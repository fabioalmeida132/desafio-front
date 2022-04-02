<template>
  <div>
    <NuxtLink to="/" class="block w-16 sm:absolute mt-5 ml-5 sm:top-10 sm:left-10 btn-backpage cursor-pointer">Voltar</NuxtLink>
    <section class="container mx-auto mt-10">
      <h1 class="justify-center gap-2 text-2xl sm:text-4xl font-bold flex items-center">{{ selectedBoard.title }}  <button class="btn-primary align-middle text-sm" @click="openBoardEdit">Editar</button></h1>
      <p class="text-center mt-5 break-all">{{ selectedBoard.description }}</p>
      <div class="flex flex-row justify-between items-center mb-5 mt-10">
        <h2 class="text-2xl">Minhas Tarefas</h2>
        <button class="btn-success cursor-pointer" @click="openModal">Adicionar Tarefa</button>
      </div>
      <TaskList class="p-5"/>
    </section>
    <div class="fixed top-0 w-screen h-screen bg-black bg-opacity-30" v-if="modalEdit || modalAddSubtask || modalEditSubtask  || showModal  || modalEditBoard "/>
    <ModalEditBoard v-if="modalEditBoard"/>
    <ModalAddSubtask v-if="modalAddSubtask" @cancel="closeAddSubtask" />
    <ModalAddTask @cancel="closeModal" v-if="showModal"/>
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
import ModalEditBoard from "~/components/modal/ModalEditBoard.vue";

export default Vue.extend({
  components: {ModalEditBoard, ModalEditSubtask, ModalAddSubtask, ModalAddTask, TaskList, Board},
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
      modalEditBoard: 'modalEditBoard',
      selectedBoard: 'selectedBoard'
    })
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    openBoardEdit(){
      this.$store.dispatch('setModalEditBoard');
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
