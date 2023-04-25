<template>
  <div>
    <div v-if="modalId == 'add_beneficiary'">
      <Modal
        title="Add Beneficiary"
        id="add_beneficiary"
        size="lg"
        :centered="false"
        @close="closeModal"
      >
        <BeneficiaryAdd />
      </Modal>
    </div>

    <!-- Privacy Holder component -->
    <PartialsPrivacyHolder
      createBtnText="Add Beneficiary"
      @create="addBeneficiary('add_beneficiary')"
    />

    <div class="mt-6">
      <TablesBeneficiaries />
    </div>
  </div>
</template>

<script setup lang="ts"> 
const modalId = ref('')
const closeModal = (id: string) => { modalId.value = "" }
const addBeneficiary = (id: string) => { modalId.value = id }
</script>
 