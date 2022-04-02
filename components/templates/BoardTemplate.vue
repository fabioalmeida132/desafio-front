<template>
  <div>
    <NuxtLink to="/" class="fixed top-10 left-10 btn-primary cursor-pointer">Voltar</NuxtLink>
    <section class="container mx-auto mt-10">
      <h1 class="text-center text-4xl font-bold">{{ selectedBoard.title }}</h1>
      <p class="text-center mt-5">{{ selectedBoard.description }}.</p>
      <div class="flex flex-row justify-between items-center mb-5 mt-10">
        <h2 class="text-2xl">Minhas Tarefas</h2>
        <button class="btn-primary cursor-pointer" @click="openModal">Adicionar Tarefa</button>
      </div>
      <TaskList class="p-5"/>
    </section>
    <div class="fixed top-0 w-screen h-screen bg-black bg-opacity-30" v-if="modalEdit || modalAddSubtask || modalEditSubtask"/>
    <ModalAddSubtask v-if="modalAddSubtask" @cancel="closeAddSubtask" />
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
import ModalAddSubtask from "~/components/modal/ModalAddSubtask.vue";
import ModalEditSubtask from "~/components/modal/ModalEditSubtask.vue";

export default Vue.extend({
  components: {ModalEditSubtask, ModalAddSubtask, ModalAddTask, TaskList, Board},
  data() {
    return {
      showModal: false,
      showModalEdit: false
    }
  },
  computed: {
    ...mapGetters({
      modalEdit: 'modalEdit',
      modalAddSubtask: 'modalAddSubtask',
      modalEditSubtask: 'modalEditSubtask',
      selectedBoard: 'selectedBoard'
    })
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal(){
      this.showModal = false;
    },
    closeAddSubtask(){
     this.$store.dispatch('setModalAddSubtask');
    },
    closeEditSubtask(){
      this.$store.dispatch('setModalEditSubtask');
    }
  },
  mounted() {
    this.$store.dispatch('setActiveBoard', this.$route.params.id);
  }
})
</script>

<style scoped>

</style>
