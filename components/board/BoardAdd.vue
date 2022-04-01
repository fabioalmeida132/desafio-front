<template>
  <div>
    <div class="w-56 h-40  flex items-center justify-center border-dashed border border-blue-300 bg-gray-100 rounded-xl cursor-pointer" @click="showModal">
      <div class="flex flex-col justify-center items-center space-y-5">
        <div class="text-center text-4xl font-bold">
          +
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import Vue from 'vue'

import {mapActions} from 'vuex'
import ModalAddBoard from "~/components/modal/ModalAddBoard.vue";

export default Vue.extend({
  components: {ModalAddBoard},
  methods: {
    showModal() {
      this.$emit('open')
    }

  },
})
</script>

<style  scoped>

</style>
