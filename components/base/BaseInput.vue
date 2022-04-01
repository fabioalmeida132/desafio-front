<template>
  <div class="flex flex-col space-y-1 w-full">
    <label :for="id">{{label}}</label>
    <input :type="type" :id="id" :name="id" :value="value" @input="updateValue" class="focus:ring-1 focus:outline-none focus:ring-blue-300" :maxlength="maxlength">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: String,
    label: String,
    maxlength: Number,
    id: String,
    value: {
      type: [String, Number],
      required: false
    }
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    updateValue(event: { target: HTMLInputElement }) {
      this.$emit('input', event.target.value)
    },
  }
})
</script>

<style scoped>
input{
  @apply px-5 py-1 rounded-md border border-gray-300
}
</style>
