<template>
  <div>
    <section class="container mx-auto mt-10">
      <h1 class="text-center text-4xl font-bold">Nome</h1>
      <p class="text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur eaque iusto quam sint. Beatae, dignissimos esse labore laborum laudantium minus numquam omnis perferendis quia quidem, sint tempora totam voluptatem.</p>
      <div class="flex flex-row justify-between items-center mb-5 mt-10">
        <h2 class="text-2xl">Minhas Tarefas</h2>
        <button class="btn-primary" @click="openModal">Adicionar Tarefa</button>
      </div>
      <TaskList class="p-5"/>
    </section>
    <div class="fixed top-0 w-screen h-screen bg-black bg-opacity-30" v-if="modalEdit"></div>
    <div class="fixed top-0 w-screen h-screen bg-black bg-opacity-30" v-if="showModal">
      <ModalAddTask @cancel="closeModal" />
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import {mapGetters} from 'vuex'
import Board from "~/components/board/Board.vue";
import TaskList from "~/components/task/TaskList.vue";
import ModalAddTask from "~/components/modal/ModalAddTask.vue";

export default Vue.extend({
  components: {ModalAddTask, TaskList, Board},
  data() {
    return {
      showModal: false,
      showModalEdit: false
    }
  },
  computed: {
    ...mapGetters({
      modalEdit: 'modalEdit'
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
  mounted() {
    this.$store.dispatch('setActiveBoard', this.$route.params.id);
  }
})
</script>

<style scoped>

</style>
