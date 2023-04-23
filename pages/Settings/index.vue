<template>
  <div>
    <div class="m-4 flex space-x-4 items-center">
      <span
        v-for="(option, index) in settingsOptions"
        :key="index"
        class="mx-1 cursor-pointer capitalize border-b-2 p-1 text-[1.125rem] text-center"
        :class="
          option.id === selectedOptionId
            ? 'border-primary-green font-bold text-primary-green px-4'
            : 'border-white font-medium text-primary-gray'
        "
        @click="selectedOptionId = option.id"
      >
        {{ option.title }}
      </span>
    </div>

    <SettingsPasswordAndTwoFAuth
      v-if="selectedOptionId == 'password_and_2fa'"
    />
    <SettingsPlansAndBillings v-else />
  </div>
</template>

<script setup lang="ts"> 
const selectedOptionId = ref("password_and_2fa")
const settingsOptions = ref([
  { title: "Password & 2FA", id: "password_and_2fa" },
  { title: "Plans & Billing", id: "plans_and_billings" }
]) 
</script>

