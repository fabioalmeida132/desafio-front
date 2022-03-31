<template>
  <BoardTemplate/>
</template>

<script lang="ts">
import Vue from 'vue'
import BoardTemplate from "~/components/templates/BoardTemplate.vue";

export default Vue.extend({
  components: {BoardTemplate},
  layout: 'default'
})
</script>
