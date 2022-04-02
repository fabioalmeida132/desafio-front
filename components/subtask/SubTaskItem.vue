<template>
  <div class="bg-white px-5 py-5 rounded-xl mb-3">
    <div class="flex flex-row items-center justify-between">
      <p class="text-md cursor-pointer" @click="isShowing = !isShowing">{{ subtask.title }}</p>
      <div class="flex flex-row gap-2">
        <div class="w-6 h-6 rounded-full cursor-pointer flex justify-center items-center text-white" :class="status === 4 ? 'bg-red-400' : 'bg-gray-400'" @click="changeStatus(4)">
          <font-awesome-icon icon="fa-solid fa-xmark" class="w-3 h-3" v-if="status === 4"/>
        </div>
        <div class="w-6 h-6 rounded-full cursor-pointer flex justify-center items-center text-white" :class="status === 3 ? 'bg-yellow-400' : 'bg-gray-400'" @click="changeStatus(3)">
          <font-awesome-icon icon="fa-solid fa-clock bg-white" class="w-3 h-3" v-if="status === 3"/>
        </div>
        <div class="w-6 h-6 rounded-full cursor-pointer flex justify-center items-center text-white" :class="status === 2 ? 'bg-blue-400' : 'bg-gray-400'" @click="changeStatus(2)">
          <font-awesome-icon icon="fa-solid fa-play bg-white" class="w-3 h-3" v-if="status === 2"/>
        </div>
        <div class="w-6 h-6 rounded-full cursor-pointer flex justify-center items-center text-white" :class="status === 1 ? 'bg-green-400' : 'bg-gray-400'" @click="changeStatus(1)">
          <font-awesome-icon icon="fa-solid fa-check bg-white" class="w-3 h-3" v-if="status === 1"/>
        </div>
      </div>
    </div>
    <div v-show="isShowing === true">
      <p class="mt-5 break-all">{{subtask.description}}</p>
      <div class="text-right mt-5">
        <button class="text-red-500 pr-5" @click="removeSubtask">Excluir</button>
        <button class="btn-primary" @click="openModal">Editar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import {mapGetters} from "vuex";

export default Vue.extend({
  props: {
    subtask: {
      type: [Array,Object],
      required: true
    }
  },
  data() {
    return {
      status: this.subtask.status_id,
      isShowing: false
    }
  },
  computed: {
    ...mapGetters({
      modalEditSubtask: 'modalEditSubtask'
    })
  },
  methods: {
    openModal(){
      this.$store.dispatch('setSubtaskActive', this.subtask)
      this.$store.dispatch('setModalEditSubtask')
    },
    removeSubtask() {
     this.$store.dispatch('removeSubtask', this.subtask).then(subtasks => {
       this.$emit('update',subtasks)
     })

    },
    changeStatus(value: number) {
      this.status = value
      this.$store.dispatch('updateSubtaskStatus', {
        taskId: this.subtask.task_id,
        subtaskId: this.subtask.id,
        statusId: this.status
      })
    }
  }
})
</script>

<style scoped>

</style>
