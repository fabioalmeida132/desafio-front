<template>
  <div class="mt-5">
    <div class="flex flex-row justify-between items-center mb-3">
      <h3 class="text-sm sm:text-lg font-semibold mb-3">Subtarefas</h3>
      <button> + Adicionar Subtarefa</button>
    </div>
    <SubTaskItem/>
    <SubTaskItem/>
    <SubTaskItem/>
    <SubTaskItem/>
    <SubTaskItem/>
    <SubTaskItem/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import SubTaskItem from "~/components/subtask/SubTaskItem.vue";

export default Vue.extend({
  components: {SubTaskItem}
})
</script>

<style scoped>

</style>
