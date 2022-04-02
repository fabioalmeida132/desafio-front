<template>
  <div>
    <div class="mt-5">
      <div class="flex flex-row justify-between items-center mb-3">
        <h4 class="text-sm sm:text-lg font-semibold mb-3">Subtarefas</h4>
        <button @click="openModal"> + Adicionar Subtarefa</button>
      </div>
      <SubTaskItem v-for="subtask in subtasks" :key="subtask.id" :subtask="subtask" @update="updateSubtasks" @open="openEdit"/>
    </div>
    <ModalEditSubtask v-if="modalEditSubtask" :subtask="subtaskSelect" @update="updateSubtasks"/>
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
      'subtask' : 'subtasks',
      modalEditSubtask: 'modalEditSubtask'
    }),
    ...mapGetters({
      modalEditSubtask: 'modalEditSubtask'
    })
  },
  watch: {
    subtask(oldValue) {
      this.getSubtasks();
    }
  },
  components: {ModalEditSubtask, SubTaskItem},
  methods: {
    async openEdit(subtask: Object) {
      this.subtaskSelect = subtask
      this.$store.dispatch('setModalEditSubtask');
    },
    openModal() {
      this.$store.dispatch('setTaskItemSelected',this.task.id)
      this.$store.dispatch('setModalAddSubtask');
    },
    updateSubtasks(subtasks: Object) {
      this.subtasks = subtasks;
    },
    getSubtasks() {
      this.$store.dispatch('subtasks', this.task.id).then(subtasks => {
        this.subtasks = subtasks;
      });
    }
  },
  async fetch() {
    this.subtasks = await this.$store.dispatch('subtasks', this.task.id);
  }
})
</script>

<style scoped>

</style>
