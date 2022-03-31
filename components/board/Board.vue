<template>
  <div class="bg-white w-52 h-40 rounded-xl shadow-xl flex items-center justify-center">
    <div class="flex flex-col justify-center items-center space-y-5">
      <div class="text-center text-2xl font-bold">
        Board Teste
      </div>
      <div class="flex flex-row gap-5">
        <button class="text-red-600">Excluir</button>
        <NuxtLink to="/board/1" class="btn-primary">Ver</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({})
</script>

<style  scoped>

</style>
