<template>
  <div>
    <div class="mt-5">
      <div class="flex flex-row justify-between items-center mb-3">
        <h4 class="text-sm sm:text-lg font-semibold mb-3">Subtarefas</h4>
        <button @click="openModal" class="text-green-700"> + Adicionar Subtarefa</button>
      </div>
      <SubTaskItem v-for="subtask in subtasks" :key="subtask.id" :subtask="subtask" @open="openEdit" @update="fetchSubtask"/>
    </div>
    <ModalEditSubtask v-if="modalEditSubtask" :subtask="subtaskSelect" @update="updateTaskList"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SubTaskItem from "~/components/subtask/SubTaskItem.vue";
import {mapGetters, mapState} from "vuex";
import ModalEditSubtask from "~/components/modal/ModalEditSubtask.vue";
export default Vue.extend({
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      subtasks: {},
      subtaskSelect: {}
    }
  },
  computed: {
    ...mapState({
      modalEditSubtask: 'modalEditSubtask',
      modalAddSubtask: 'modalAddSubtask'
    }),
  },
  components: {ModalEditSubtask, SubTaskItem},
  watch: {
    modalAddSubtask:{
      handler(newValue, oldValue) {
        if(newValue === false){
          this.fetchSubtask();
        }
      },
      deep: true
    }
  },
  methods: {
    async fetchSubtask() {
      this.subtasks =  await this.$store.dispatch('subtasks', this.task.id);
    },
     updateTaskList(subtask: Object) {
      if(this.task.id === subtask) {
        this.fetchSubtask();
      }
    },
    async openEdit(subtask: Object) {
      this.subtaskSelect = subtask
      this.$store.dispatch('setModalEditSubtask');
    },
    openModal() {
      this.$store.dispatch('setTaskItemSelected',this.task.id)
      this.$store.dispatch('setModalAddSubtask');
    },
  },
  async fetch() {
    this.subtasks = await this.$store.dispatch('subtasks', this.task.id);
  }
})
</script>

<style scoped>
</style>
