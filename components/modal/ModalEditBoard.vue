<template>
  <div class="fixed overflow-y-auto overflow-x-hidden fixed top-1/4 right-1/3 left-0 flex justify-center z-50 w-full h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white w-full text-center">
            Editar quadro
          </h3>
          <button @click="cancel" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <BaseInput id="name" label="Nome do quadro" type="text" v-model="title" :maxlength="30"/>
          <BaseInput id="descricao" label="Descrição do quadro" type="text" v-model="description" :maxlength="255"/>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center justify-end p-4 rounded-b border-t border-gray-200 dark:border-gray-600 w-full ">
          <button class="btn-success" @click="editBoard">Atualizar quadro</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import BaseInput from "~/components/base/BaseInput.vue";

export default Vue.extend({
  components: {BaseInput},
  data() {
    return {
      id: this.$store.state.boardSelected.id,
      title: this.$store.state.boardSelected.title,
      description: this.$store.state.boardSelected.description
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel');
      this.$store.dispatch('setModalEditBoard')
    },
    editBoard() {
      this.$store.dispatch('updateBoard', {
        id: this.id,
        title: this.title,
        description: this.description,
      }).then(() => {
        this.cancel();
      });
    }
  },
})
</script>

<style scoped>

</style>
