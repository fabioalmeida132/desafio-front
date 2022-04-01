<template>
  <div class="bg-white w-56 h-40 rounded-xl shadow-xl flex items-center justify-center">
    <div class="flex flex-col justify-center items-center space-y-3 mr-5 ml-5">
      <div class="text-center">
        <h1 class="text-xl break-all font-bold">{{board.title}}</h1>
        <p class="line-clamp-1 break-all mx-2 mt-1 text-sm text-gray-500">{{board.description}}</p>
      </div>
      <div class="flex flex-row gap-5">
        <button class="text-red-600" @click="removeBoard">Excluir</button>
        <NuxtLink :to="'/board/'+board.id" :board="board" class="btn-primary">Ver</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  props: {
    board: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeBoard() {
      this.$store.dispatch('removeBoard', this.board)
    }
  }
})
</script>

<style  scoped>

</style>
