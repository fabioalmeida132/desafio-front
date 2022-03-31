<template>
  <div class="bg-white px-5 py-5 rounded-xl mb-3">
    <div class="flex flex-row items-center justify-between">
      <p class="text-md cursor-pointer" @click="isShowing = !isShowing">teste</p>
      <div class="flex flex-row gap-2">
        <div class="w-6 h-6 rounded-full cursor-pointer" :class="status === 1 ? 'bg-red-400' : 'bg-gray-400'" @click="changeStatus(1)"/>
        <div class="w-6 h-6 rounded-full cursor-pointer" :class="status === 2 ? 'bg-yellow-400' : 'bg-gray-400'" @click="changeStatus(2)"/>
        <div class="w-6 h-6 rounded-full cursor-pointer" :class="status === 3 ? 'bg-blue-400' : 'bg-gray-400'" @click="changeStatus(3)"/>
        <div class="w-6 h-6 rounded-full cursor-pointer" :class="status === 4 ? 'bg-green-400' : 'bg-gray-400'" @click="changeStatus(4)"/>
      </div>
    </div>
    <div v-show="isShowing === true">
      <p class="mt-5 break-all">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi architecto atque consectetur ex exercitationem itaque labore laboriosam molestiae nam nobis pariatur, quisquam quos, ratione repellat rerum voluptatum! Ut, vitae?</p>
      <div class="text-right mt-5">
        <a href="" class="text-red-500 pr-5">Excluir</a>
        <a href="" class="btn-primary">Editar</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      status: 4,
      isShowing: false
    }
  },
  methods: {
    changeStatus(value: number) {
      this.status = value
    }
  }
})
</script>

<style scoped>

</style>
