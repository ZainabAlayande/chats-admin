<template>
  <div class="bg-white rounded-xl main">
    <div v-if="modalId == 'withhold_request'">
      <Modal title="Withhold request" id="withhold_request" size="sm" :centered="false" @close="close">
        <DonorsWithholdRequest @close="close" />
      </Modal>
    </div>

    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Donor withdrawal request</h3>

      <div class="text-sm flex font-medium items-center justify-end">
        <span>Filter By</span>
      </div>
    </div>

    <div>
      <table class="table-auto w-full mx-auto">
        <thead class="w-full">
          <tr>
            <th class="bg-[#f7f7f7] text-base font-medium px-6 py-4" v-for="(header, index) in headers">
              {{ header.title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(withdrawal, index) in withdrawals" :key="withdrawal.id + index" class="cursor-pointer" 
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'">
            <!-- <td>{{ 'nameee' }}</td> -->
            <td>{{ withdrawal?.campaign?.Organisation?.name }}</td>
            <td>{{ formatMoney(withdrawal?.campaign?.budget) }}</td>
            <td>{{ withdrawal?.campaign?.title }}</td>
            <td class="">{{ formatDate(withdrawal?.createdAt) }}</td>
            <td>
              <span class="text-xs px-2 py-[.35rem] rounded-2xl" :class="withdrawal?.status.toLowerCase() == 'approved'
                ? ' text-[#337138] bg-[#D1F7C4]'
                : ' text-[#FF4B55] bg-[#FFCDC7]'
                ">
                {{ withdrawal?.status }}
              </span>
            </td>

            <td
              @click.stop="handleApproveOrReject(withdrawal?.campaign.OrganisationId, { type: withdrawal.status.toLowerCase() === 'rejected' ? 'approve' : 'reject', campaign_id: withdrawal.campaign.id, request_id: withdrawal.id })">
              <Button :hasBorder="true" :hasIcon="false"
                :text="withdrawal.status.toLowerCase() !== 'approved' ? 'Approve' : 'Reject'"
                class="text-[.875rem] !py-2 !px-3" :isGray="withdrawal.status.toLowerCase() === 'approved'" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { UpdateApprovalStatus } from "~/repositories/withdrawals";

import { useRepositories } from "~/repositories/useRepositories";
import { formatMoney, formatDate } from "~/controllers/utils"
const headers = ref([
  { title: "Donor" },
  { title: "Amount" },
  { title: "Campaign" },
  { title: "Date" },
  { title: "Status" },
  { title: "Actions" },
]);

// const donors = ref([
//   {
//     name: "Blue Orange Foundation",
//     amount: "$123,476,000",
//     campaign: "Feed the poor",
//     date: "12 Dec, 2020",
//     type: "withdraw request",
//   },
// ]);

const swal = Swal.mixin({
  customClass: {
    confirmButton: 'bg-primary-green rounded-xl px-3.5 py-3 font-medium ml-2 text-white',
    // cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
const { withdrawalsRepo } = useRepositories();


const modalId = ref('')
const close = (id: string) => { modalId.value = "" }
const approve = (id: string) => { modalId.value = id }


const withdrawals: Ref<any[]> = ref([]);

const fetchWithdrawals = async () => {

  const response = await withdrawalsRepo.getWithdrawalRequests()
  //  console.log('WITHDRAAA', response?.data)
  withdrawals.value = response?.data.splice(0, 8)

}

onBeforeMount(() => {
  fetchWithdrawals()
})

const handleApproveOrReject = (orgId: string | number, data: UpdateApprovalStatus) => {
  swal.fire({
    title: 'Proceed ?',
    // text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, proceed!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      // swal.fire(
      //   'Deleted!',
      //   'Your file has been deleted.',
      //   'success'
      // )

      handleProceed(orgId, data)
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      // swal.fire(
      //   'Cancelled',
      //   'Your imaginary file is safe :)',
      //   'error'
      // )
    }
  })
}

const handleProceed = async (orgId: string | number, data: UpdateApprovalStatus) => {
  // console.table('DATAAA', data)
  await withdrawalsRepo.approveRejectRequest(orgId, data)
  fetchWithdrawals()
}

</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}

table>tbody>tr>td {
  @apply align-middle text-center mx-auto text-base px-6 py-4;
}

table>tbody>tr>td:first-child {
  @apply text-left;
}
</style>
