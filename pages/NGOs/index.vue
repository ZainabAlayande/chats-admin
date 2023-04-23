<template>
  <div>
    <div class="flex items-center space-x-3">
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        class="cursor-pointer px-2 pb-4 text-[1.125rem] text-center"
        :class="
          tab.id === activeTab
            ? 'border-primary-green font-bold  border-b-2 text-primary-green'
            : 'text-primary-gray font-medium'
        "
        @click="activeTab = tab.id"
      >
        {{ tab.title }}
      </span>
    </div>

    <div class="mt-6">
      <TablesNgosActiveOrganizations v-if="activeTab == 'active'" />
      <TablesNgosPendingOrganizations v-if="activeTab == 'pending'" />
    </div>
  </div>
</template>

<script setup lang="ts">
const activeTab = ref("active");
const tabs = ref([
  { title: "Active", id: "active" },
  { title: "Pending approval", id: "pending" },
]);
</script>
