<template>
  <div>
    <div class="container mx-auto text-center my-10">
      <h1 class="text-4xl font-bold">Meus Quadros</h1>
    </div>
    <section class="container mt-5 gap-5 mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <BoardAdd @open="openModal"/>
      <Board v-for="board in boards" :board="board" :key="board.id" />
    </section>
    <div class="fixed top-0 w-screen h-screen bg-black bg-opacity-30" v-if="showModal">
      <ModalAddBoard @cancel="closeModal"/>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Board from "~/components/board/Board.vue";
import BoardAdd from "~/components/board/BoardAdd.vue";
import {mapGetters} from 'vuex'

export default Vue.extend({
  components: {BoardAdd, Board},
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapGetters({
      boards: 'boards'
    })
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal(){
      this.showModal = false;
    }
  },
})
</script>

<style scoped>

</style>
