<template>
    <div class="modal" tabindex="-1" role="dialog" id="updateProjectModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update Project</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProject">
              <div class="form-group">
                <label for="updateName">Name:</label>
                <input type="text" id="updateName" v-model="updatedProject.name" required>
              </div>
              <div class="form-group">
                <label for="updateDeadline">Deadline:</label>
                <input type="date" id="updateDeadline" v-model="updatedProject.deadline" required>
              </div>
              <div class="form-group">
                <label for="updateStatus">Status:</label>
                <select id="updateStatus" v-model="updatedProject.status" required>
                  <option value="not_started">Not Started</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div class="form-group">
                <label for="updateDescription">Description:</label>
                <textarea id="updateDescription" v-model="updatedProject.description" required></textarea>
              </div>
              <div class="form-group">
                <label for="updateAssigner">Assigner:</label>
                <input type="text" id="updateAssigner" v-model="updatedProject.assigner" required>
              </div>
              <div class="form-group">
                <label for="updateTasks">Tasks:</label>
                <textarea id="updateTasks" v-model="updatedProject.tasks" required></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
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
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        updatedProject: {
          id: this.project.id,
          name: this.project.name,
          deadline: this.project.deadline,
          status: this.project.status,
          description: this.project.description,
          assigner: this.project.assigner,
          tasks: this.project.tasks,
        },
      };
    },
    methods: {
      async updateProject() {
        try {
          await axios.put(`/api/projects/${this.updatedProject.id}`, this.updatedProject);
          this.$emit("project-updated"); // Emit event to notify parent component
        } catch (error) {
          console.error("Error updating project:", error);
        }
      },
      closeModal() {
        this.$emit("close-modal"); // Emit event to notify parent component to close the modal
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles for the update form if needed */
  </style>
  