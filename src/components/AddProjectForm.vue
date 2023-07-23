<template>
    <div class="modal" tabindex="-1" role="dialog" id="addProjectModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Project</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProject">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="newProject.name" required>
              </div>
              <div class="form-group">
                <label for="deadline">Deadline:</label>
                <input type="date" id="deadline" v-model="newProject.deadline" required>
              </div>
              <div class="form-group">
                <label for="status">Status:</label>
                <select id="status" v-model="newProject.status" required>
                  <option value="not_started">Not Started</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textarea id="description" v-model="newProject.description" required></textarea>
              </div>
              <div class="form-group">
                <label for="assigner">Assigner:</label>
                <input type="text" id="assigner" v-model="newProject.assigner" required>
              </div>
              <div class="form-group">
                <label for="tasks">Tasks:</label>
                <textarea id="tasks" v-model="newProject.tasks" required></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
                <button type="submit" class="btn btn-primary">Add Project</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        newProject: {
          name: "",
          deadline: "",
          status: "not_started",
          description: "",
          assigner: "",
          tasks: "",
        },
      };
    },
    methods: {
      async addProject() {
        try {
          const response = await axios.post("/api/projects", this.newProject);
          this.$emit("project-added"); // Emit event to notify parent component
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
        }
      },
      closeModal() {
        this.$emit("close-modal"); // Emit event to notify parent component to close the modal
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles for the add form if needed */
  </style>
  