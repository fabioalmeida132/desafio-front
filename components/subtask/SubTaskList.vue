<template>
  <div class="mt-5">
    <div class="flex flex-row justify-between items-center mb-3">
      <h4 class="text-sm sm:text-lg font-semibold mb-3">Subtarefas</h4>
      <button> + Adicionar Subtarefa</button>
    </div>
    <SubTaskItem v-for="subtask in subtasks" :key="subtask.id" :subtask="subtask"/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import SubTaskItem from "~/components/subtask/SubTaskItem.vue";

export default Vue.extend({

  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      subtasks: {}
    }
  },
  components: {SubTaskItem},
  async fetch() {
    this.subtasks = await this.$store.dispatch('subtasks', this.task.id);

  }
})
</script>

<style scoped>

</style>
