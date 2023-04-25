<template>
  <div class="bg-white rounded-xl main">
    <div v-if="modalId == 'withhold_request'">
      <Modal
        title="Withhold request"
        id="withhold_request"
        size="sm"
        :centered="false"
        @close="close"
      >
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
            <td>{{ donor.name }}</td>
            <td>{{ donor.amount }}</td>
            <td>{{ donor.campaign }}</td>
            <td class="">{{ donor.date }}</td>
            <td>
              <span
                class="text-xs px-2 py-[.35rem] rounded-2xl"
                :class="
                  donor.type == 'funding'
                    ? ' text-[#337138] bg-[#D1F7C4]'
                    : ' text-[#FF4B55] bg-[#FFCDC7]'
                "
              >
                {{ donor.type }}
              </span>
            </td>

            <td>
              <Button
                :hasBorder="true"
                :hasIcon="false"
                text="Approve"
                class="text-[.875rem] !py-2 !px-3"
                @click="approve('withhold_request')"
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
  { title: "Donor" },
  { title: "Amount" },
  { title: "Campaign" },
  { title: "Date" },
  { title: "Type" },
  { title: "Actions" },
]);

const donors = ref([
  {
    name: "Blue Orange Foundation",
    amount: "$123,476,000",
    campaign: "Feed the poor",
    date: "12 Dec, 2020",
    type: "withdraw request",
  },
  {
    name: "Blue Orange Foundation",
    amount: "$123,476,000",
    campaign: "Feed the poor",
    date: "12 Dec, 2020",
    type: "withdraw request",
  },
  {
    name: "Blue Orange Foundation",
    amount: "$123,476,000",
    campaign: "Feed the poor",
    date: "12 Dec, 2020",
    type: "withdraw request",
  },
  {
    name: "Blue Foundation",
    amount: "$123,476,000",
    campaign: "Feed the poor",
    date: "12 Dec, 2021",
    type: "withdraw request",
  },
  {
    name: "Orange Foundation",
    amount: "$123,476,000",
    campaign: "Feed the poor",
    date: "18 Dec, 2020",
    type: "withdraw request",
  },
]);

const modalId = ref('')
const close = (id: string) => { modalId.value = "" }
const approve = (id: string) => { modalId.value = id }
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
