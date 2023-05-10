<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Donors</h3>

      <div class="text-sm flex font-medium items-center justify-end">
        <span>Filter By</span>
      </div>
    </div>

    <Loading v-if="loading"/>

    <div v-else>
      <table class="table-auto w-full">
        <thead class="w-full">
          <tr>
            <th
              v-for="(header, index) in headers"
              class="bg-[#f7f7f7] text-base font-medium px-6 py-4"
              :class="index == 0 && 'text-left'"
            >
              {{ header.title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(donor, index) in donors"
            :key="index"
            class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'"
          >
            <td> {{ donor.name }} </td>
            <td>{{ donor.email }}</td>
            <td>{{ formatMoney(donor.total_donation) }}</td>
            <td class=""> 
              {{ donor.total_ngo }} /
              {{ donor.total_campaign }} 
              
            </td>
            <td>
              <span
                class="text-xs px-2 py-[.35rem] rounded-2xl capitalize"
                :class="
                  donor.status == 'active'
                    ? 'text-[#337138] bg-[#D1F7C4]'
                    : 'text-[#3D435E] bg-[#E7EBF3]'
                "
              >
                {{ donor.status }}
              </span>
            </td>

            <td>
              <Button
                :hasBorder="true"
                :hasIcon="false"
                :text="donor.status == 'active' ? 'Deactivate' : 'Activate'"
                :isGray="donor.status == 'active'"
                :disabled="donor.status == 'active'"
                class="text-[.875rem] !py-2 !px-3"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRepositories } from "~/repositories/useRepositories";
import {formatMoney} from "~/controllers/utils"
const headers = ref([
  { title: "Name" },
  { title: "Email address" },
  { title: "Total Donation" },
  { title: "NGOs / Campaigns" },
  { title: "Status" },
  { title: "Actions" },
]);

const donors = ref([ ]);

const loading: Ref<boolean> = ref(false);

const fetchDonors = async () => {
  loading.value = true;
  const { donorsRepo } = useRepositories();

 const response = await donorsRepo.getAllDonors().finally(() => {
    loading.value = false;
  });
 
  console.log(response) 
  donors.value = response?.data
 
}

onBeforeMount(()=> {
  fetchDonors()
})
</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
table > tbody > tr > td {
  @apply align-middle text-center  mx-auto   text-base px-6 py-4;
}
table > tbody > tr > td:first-child {
  @apply text-left;
}
</style>
