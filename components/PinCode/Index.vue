<template>
  <div class="flex space-x-1.5 justify-around"> 
    <!-- value1 -->
    <input
      type="number"
      class=""
      :class="value1 && `outline-primary-green`"
      placeholder="-"
      v-model="value1"
    />

    <!-- value2 -->
    <input
      type="number"
      :class="value2 && `outline-primary-green`"
      placeholder="-"
      v-model="value2"
      :disabled="!value1"
    />

    <!-- value3 -->
    <input
      type="number"
      :class="value3 && `outline-primary-green`"
      placeholder="-"
      v-model="value3"
      :disabled="!value2"
    />

    <!-- value4 -->
    <input
      type="number"
      :class="value4 && `outline-primary-green`"
      placeholder="-"
      v-model="value4"
      :disabled="!value3"
    />

    <!-- value5 -->
    <input
      type="number"
      :class="value5 && `outline-primary-green`"
      placeholder="-"
      v-model="value5"
      :disabled="!value4"
    />

    <!-- value6 -->
    <input
      type="number"
      :class="value6 && `outline-primary-green`"
      placeholder="-"
      v-model="value6"
      @input="getInput"
      :disabled="!value5"
    />
  </div>
</template>
 
<script setup lang="ts" >
const props = defineProps({
  noOfFields: {
    type: Number,
    default: 6,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
},)

const value1 = ref(null)
const value2 = ref(null)
const value3 = ref(null)
const value4 = ref(null)
const value5 = ref(null)
const value6 = ref(null)

const inputValue = computed(() => {
  if (!value1.value || !value2.value || !value3.value || !value4.value || !value5.value || !value6.value)
    return null

  const valueTotal = `${value1.value}${value2.value}${value3.value}${value4.value}${value5.value}${value6.value}`
  return valueTotal
})

// EMITS
const emit = defineEmits(['getInput'])
const getInput = () => {
  emit('getInput', inputValue.value)
} 
</script>

<style  scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

input {
  @apply h-11 w-11  text-primary-input inline-flex rounded-md font-bold text-center bg-[#F5F6F8] -outline-offset-2 outline-2 outline-none focus:outline-primary-green;
}
input:disabled {
  @apply cursor-not-allowed opacity-60;
}
</style>
