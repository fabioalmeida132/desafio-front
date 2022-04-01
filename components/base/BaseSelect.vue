<template>
  <div class="flex flex-col space-y-1 w-full">
    <label>{{label}}</label>
    <select  v-model="localValue">
      <option value="" selected :disabled="disabled">{{placeholder}}</option>
      <option :value="option.id" v-for="(option, index) in options" :key="index">
        {{option.status}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: 'Selecione um status...'
    },
    categoryId: {
      type: [String,Number],
      default: ''
    },
    label: String,
    value: {
      type: [String,Number]
    }
  },
  data(){
    return {
      id: ''
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
    },
    options(){
      return this.$store.state.status
    },
  },
  methods: {
    updateValue(event: { target: HTMLInputElement }) {
      this.$emit('input', event.target.value)
    }
  },
})
</script>

<style scoped>
select{
  @apply px-5 py-1 rounded-md border border-gray-300
}
</style>
