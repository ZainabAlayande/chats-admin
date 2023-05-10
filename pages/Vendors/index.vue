<template>
  <div>
    <!-- Modals Here -->
    <div v-if="modalId == 'add_vendor'">
      <Modal
        title="Add Vendor"
        id="add_vendor"
        size="lg"
        :centered="false"
        @close="closeModal"
      >
        <VendorsAdd />
      </Modal>
    </div>

    <!-- Privacy Holder component -->
    <PartialsPrivacyHolder
      createBtnText="Add Vendor"
      @create="createVendor('add_vendor')"
    />

    <div class="mt-6">
      <TablesVendors />
    </div>
  </div>
</template>

<script setup lang="ts"> 
const modalId = ref('')
const closeModal = (id: string) => { modalId.value = "" }
const createVendor = (id: string) => { modalId.value = id }
</script>
