<template>
  <div class="w-full screen-list bg-white rounded-xl flex flex-col gap-3 overflow-y-scroll">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" @open="openEdit"/>
    <ModalEditTask :task="taskSelect" v-if="modalEdit"/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import TaskItem from "~/components/task/TaskItem.vue";
import { mapGetters } from 'vuex'

export default Vue.extend({
  components: {TaskItem},
  data() {
    return {
      taskSelect: {}
    }
  },
  methods: {
    async openEdit(task: Object) {
      this.taskSelect = task
      this.$store.dispatch('setModalEdit');
    }
  },
  computed: {
    ...mapGetters({
      tasks: 'tasks',
      modalEdit: 'modalEdit'
    }),
  },
})
</script>

<style scoped>
.screen-list{
  min-height: calc(100vh - 17rem);
  max-height: calc(100vh - 17rem);
}
</style>
