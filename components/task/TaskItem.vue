<template>
  <div class="bg-gray-100 border shadow-sm pt-3 pb-3 pl-5 pr-5 rounded-xl w-full">
    <div class="flex flex-row justify-between items-center">
      <h2 class="cursor-pointer select-none text-md sm:text-xl font-bold text-sky-800" @click="isShowing = !isShowing">Tarefa X</h2>
      <div class="space-x-3 flex flex-row">
        <select class="rounded-xl px-4 py-2">
          <option value="1">Cancelado</option>
          <option value="2">Atrasado</option>
          <option value="3">Em Desenvolvimento</option>
          <option value="4">Concluido</option>
        </select>
        <font-awesome-icon icon="fa-solid fa-trash" class="text-red-400 w-5" />
        <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-blue-400 w-5" />
      </div>
    </div>
    <div v-show="isShowing === true">
      <p class="break-all mt-5 text-gray-600">Descrição da tarefa blablabla</p>
      <SubTaskList/>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import SubTaskList from "~/components/subtask/SubTaskList.vue";

export default Vue.extend({
  components: {SubTaskList},
  data() {
    return {
      isShowing: false
    }
  },
})
</script>

<style scoped>

</style>
