<template>
  <div class="z-1">
    <div class="bg-gray-100 border shadow-sm pt-3 pb-3 pl-5 pr-5 rounded-xl w-full">
      <div class="flex flex-row justify-between items-center">
        <h3 class="cursor-pointer select-none text-md sm:text-xl font-bold text-sky-800" @click="isShowing = !isShowing">
          {{ task.title }}
        </h3>
        <div class="space-x-3 flex flex-row">
          <select class="rounded-xl px-4 py-2" v-model="taskStatus">
            <option :value="status.id" v-for="status in $store.state.status">{{status.status}}</option>
          </select>
          <font-awesome-icon icon="fa-solid fa-trash" class="text-red-400 w-5" @click="removeTask"/>
          <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-blue-400 w-5 cursor-pointer" @click="openModal"/>
        </div>
      </div>
      <div v-show="isShowing === true">
        <p class="break-all mt-5 text-gray-600">{{ task.description }}</p>
        <SubTaskList :task="task"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'
import SubTaskList from "~/components/subtask/SubTaskList.vue";
import ModalEditTask from "~/components/modal/ModalEditTask.vue";

export default Vue.extend({
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  components: {ModalEditTask, SubTaskList},
  data() {
    return {
      isShowing: false,
      subtasks: {},
      taskStatus: this.task.status_id,
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.$emit('open',this.task)
    },
    removeTask() {
      this.$store.dispatch('removeTask', this.task);
    },
  },
  watch: {
    task(){
      this.taskStatus = this.task.status_id;
    },
    taskStatus() {
      this.$store.dispatch('updateTaskStatus', {
        taskId: this.task.id,
        statusId: this.taskStatus
      });
    }

  },
})
</script>

<style scoped>

</style>
