<template>
  <div>
    <div v-if="modalId == 'add_beneficiary'">
      <Modal title="Add Beneficiary" id="add_beneficiary" size="lg" :centered="false" @close="closeModal">
        <BeneficiaryAdd @addBeneficiary="handleAddBeneficiary" :isSubmitting="isSubmitting" />
      </Modal>
    </div>

    <!-- Privacy Holder component -->
    <PartialsPrivacyHolder createBtnText="Add Beneficiary" @create="setModalId('add_beneficiary')" />

    <div class="mt-6">
      <TablesBeneficiaries :beneficiaries="beneficiaries" :headers="headers" :loading="loading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'
import { Beneficiary } from "~/composables/useApi";

const modalId = ref('')
const beneficiaries = ref<any[]>([]);
const loading: Ref<boolean> = ref(false)

const closeModal = (id: string) => { modalId.value = "" }
const setModalId = (id: string) => { modalId.value = id }
const isSubmitting = ref(false)

const headers = ref([
  { title: "Name" },
  { title: "Email address" },
  { title: "Amount spent" },
  { title: "Campaigns" },
  { title: "Status" },
  { title: "Actions" },
]);


const { getAllBeneficiaries, addBeneficiary } = useApi()
const toast = useToast()


const fetchBeneficiaries = async () => {
  loading.value = true;
  const { data, error } = await useAsyncData('all-donors', () => getAllBeneficiaries())

  if (data)
    beneficiaries.value = data.value.data.splice(0, 8)

  else if (error)
    toast.error('Error Fetching')

  loading.value = false;
}

const handleAddBeneficiary = async (payload: Beneficiary) => {
  isSubmitting.value = true
  const { data, error } = await useAsyncData('add-beneficiary', () => addBeneficiary(payload))

  if (data) {
    toast.success('Success')
    fetchBeneficiaries()
  }

  else if (error)
    toast.error('Something went wrong')

  isSubmitting.value = false
}


onBeforeMount(() => {
  fetchBeneficiaries()
})

// onMounted(()=> {
//   toast.success('YESSS')
// })
</script>
 