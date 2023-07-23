<template>
  <div>
    <h1>Project Tracker</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <button
        @click="showAddProjectModal"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        Add New Project
      </button>

      <!-- Modal for adding a new project -->
      <AddProjectForm
        v-if="showAddModal"
        @project-added="handleProjectAdded"
        @close-modal="closeAddModal"
      />

      <div v-if="projects.length === 0">
        No projects to display. Add projects below.
      </div>
      <ul v-else>
        <li v-for="project in projects" :key="project.id">
          <strong>{{ project.name }}</strong> - Deadline: {{ project.deadline }}
          <countdown-timer
            :deadline="project.deadline"
            v-if="project.status !== 'completed'"
          ></countdown-timer>
          <span v-else>Completed!</span>
          <select
            v-model="project.status"
            @change="updateProjectStatus(project)"
          >
            <option value="not_started">Not Started</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button
            @click="removeProject(project)"
            v-if="project.status !== 'completed'"
          >
            Remove
          </button>
          <button
            @click="showUpdateProjectModal(project)"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#updateProjectModal"
          >
            Update
          </button>
        </li>
      </ul>

      <!-- Modal for updating a project -->
      <UpdateProjectForm
        v-if="showUpdateModal"
        :project="selectedProject"
        @project-updated="handleProjectUpdated"
        @close-modal="closeUpdateModal"
      />
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import CountdownTimer from "@/components/CountdownTimer.vue";
import AddProjectForm from "@/components/AddProjectForm.vue";
import UpdateProjectForm from "@/components/UpdateProjectForm.vue";

export default {
  components: {
    CountdownTimer,
    AddProjectForm,
    UpdateProjectForm,
  },
  data() {
    return {
      projects: [],
      loading: true,
      error: null,
      showAddModal: false,
      showUpdateModal: false,
      selectedProject: null,
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get("/api/projects");
        this.projects = response.data;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching project data:", error);
        this.error = "Failed to fetch project data. Please try again later.";
        this.loading = false;
      }
    },
    async addProject() {
      try {
        const response = await axios.post("/api/projects", this.newProject);
        this.projects.push(response.data);
        this.newProject = {
          name: "",
          deadline: "",
          status: "not_started",
          description: "",
          assigner: "",
          tasks: "",
        };
      } catch (error) {
        console.error("Error adding project:", error);
        this.error = "Failed to add the project. Please try again later.";
      }
    },
    async updateProjectStatus(project) {
      try {
        // Make sure that 'project' contains the correct data and 'project.id' is a valid value.
        const response = await axios.put(`/api/projects/${project.id}`, {
          status: project.status,
        });
        // Optionally, you can update the project data in the frontend with the response data if needed.
      } catch (error) {
        console.error("Error updating project status:", error);
        this.error = "Failed to update project status. Please try again later.";
      }
    },

    async removeProject(project) {
      try {
        await axios.delete(`/api/projects/${project.id}`);
        const index = this.projects.indexOf(project);
        if (index !== -1) {
          this.projects.splice(index, 1);
        }
      } catch (error) {
        console.error("Error deleting project:", error);
        this.error = "Failed to delete the project. Please try again later.";
      }
    },
    // Method to show the modal for adding a new project
    showAddProjectModal() {
      this.showAddModal = true;
    },

    // Method to close the add modal
    closeAddModal() {
      this.showAddModal = false;
    },

    // Method to show the modal for updating a project
    showUpdateProjectModal(project) {
      this.selectedProject = { ...project }; // Make a copy of the selected project
      this.showUpdateModal = true;
    },

    // Method to close the update modal
    closeUpdateModal() {
      this.showUpdateModal = false;
    },

    // Method to handle the event when a new project is added
    handleProjectAdded() {
      this.showAddModal = false;
      // Optionally, update the projects list after successful addition
      this.fetchProjects();
    },

    // Method to handle the event when a project is updated
    handleProjectUpdated() {
      this.showUpdateModal = false;
      // Optionally, update the projects list after successful update
      this.fetchProjects();
    },
  },
};
</script>
  
  <style>
.error-message {
  color: red;
  font-weight: bold;
}
</style>
  