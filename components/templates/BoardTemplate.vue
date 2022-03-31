<template>
  <section class="container mx-auto mt-10">
    <div class="flex flex-row justify-between items-center mb-5">
      <h1 class="text-2xl mb-3">Minhas Tarefas</h1>
      <button class="btn-primary">Adicionar Tarefa</button>
    </div>
    <TaskList class="p-5"/>
  </section>
</template>

<script lang="ts">

import Vue from 'vue'
import Board from "~/components/board/Board.vue";
import TaskList from "~/components/task/TaskList.vue";

export default Vue.extend({
  components: {TaskList, Board}
})
</script>

<style scoped>

</style>
