<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Donors</h3>

      <div class="text-sm flex font-medium items-center justify-end">
        <span>Filter By</span>
      </div>
    </div>

    <div>
      <table class="table-auto w-full">
        <thead class="w-full">
          <tr>
            <th
              class="bg-[#f7f7f7] text-base font-medium px-6 py-4"
              v-for="(header, index) in headers"
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
            <td>{{ donor.total_donations }}</td>
            <td class="">{{ donor.ngo_campaign_ration }}</td>
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
const headers = ref([
  { title: "Name" },
  { title: "Email address" },
  { title: "Total Donation" },
  { title: "NGOs / Campaigns" },
  { title: "Status" },
  { title: "Actions" },
]);

const donors = ref([
  {
    id: "rf",
    name: "Hope Spring Initiative",
    email: "script@gmail.com",
    total_donations: "$10,050,000",
    ngo_campaign_ration: "3 / 9",
    status: "active",
  },
  {
    id: "rf",
    name: "Hope Spring Initiative",
    email: "script@gmail.com",
    total_donations: "$10,050,000",
    ngo_campaign_ration: "3 / 9",
    status: "inactive",
  },
  {
    id: "rf",
    name: "Hope Spring Initiative",
    email: "script@gmail.com",
    total_donations: "$10,050,000",
    ngo_campaign_ration: "3 / 9",
    status: "active",
  },
  {
    id: "rf",
    name: "Hope Spring Initiative",
    email: "script@gmail.com",
    total_donations: "$10,050,000",
    ngo_campaign_ration: "3 / 9",
    status: "inactive",
  },
  {
    id: "rf",
    name: "Hope Spring Scritpt",
    email: "script@gmail.com",
    total_donations: "$10,050,000",
    ngo_campaign_ration: "3 / 9",
    status: "inactive",
  },
  {
    id: "rf",
    name: "Hope iDonate",
    email: "script@gmail.com",
    total_donations: "$10,050,000",
    ngo_campaign_ration: "3 / 9",
    status: "active",
  },
  {
    id: "rf",
    name: "Johnny Walker Inc.",
    email: "script@gmail.com",
    total_donations: "$10,050,000",
    ngo_campaign_ration: "3 / 9",
    status: "active",
  },

]);
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
