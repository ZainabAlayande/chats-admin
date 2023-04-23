<template>
  <div class=" bg-[#FAFAFA]">
    <div v-if="modalId == 'add_organization'">
      <Modal
        title="Add Organization"
        id="add_organization"
        size="sm"
        :centered="false"
        @close="closeModal"
      >
        <NgosAdd />
      </Modal>
    </div>

    <div v-if="modalId == 'create_new'">
      <Modal
        :hasHeader="false"
        id="create_new"
        size="lg"
        :centered="false"
        @close="closeModal"
      >
        <NgosCreate />
      </Modal>
    </div>

    <!--  -->
    <div class="flex w-auto mb-4">
      <Button @click="openModal('add_organization')" text="Add Organization" />
      <Button @click="openModal('create_new')" text="Create New" />
  </div>


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
const modalId = ref('')
const closeModal = (id: string) => { modalId.value = "" }
const openModal = (id: string) => { modalId.value = id } 

const activeTab = ref("active");
const tabs = ref([
  { title: "Active", id: "active" },
  { title: "Pending approval", id: "pending" },
]);
</script>
 