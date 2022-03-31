<template>
  <div class="w-full screen-list bg-white rounded-xl flex flex-col gap-3 overflow-y-scroll">
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import TaskItem from "~/components/task/TaskItem.vue";

export default Vue.extend({
  components: {TaskItem}
})
</script>

<style scoped>
.screen-list{
  min-height: calc(100vh - 10rem);
  max-height: calc(100vh - 10rem);
}
</style>
