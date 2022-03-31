<template>
  <section class="container mt-5 flex flex-wrap gap-5 mx-auto w-full">
    <BoardAdd/>
    <Board/>
    <Board/>
    <Board/>
    <Board/>
    <Board/>
    <Board/>
    <Board/>
    <Board/>
  </section>
</template>

<script lang="ts">

import Vue from 'vue'
import Board from "~/components/board/Board.vue";
import BoardAdd from "~/components/board/BoardAdd.vue";

export default Vue.extend({
  components: {BoardAdd, Board}
})
</script>

<style scoped>

</style>
