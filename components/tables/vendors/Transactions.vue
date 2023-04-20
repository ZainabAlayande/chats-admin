<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Vendor Transactions</h3>

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
            <td>{{ donor.beneficiary }}</td>
            <td class="">{{ donor.date }}</td>
          

            <td> 
                <WidgetsIconsEllipsis /> 
            </td>
 
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const headers = ref([
  { title: "Reference ID" },
  { title: "Amount" },
  { title: "Beneficiary" },
  { title: "Date" }, 
  { title: "Actions" },
]);

const donors = ref([
  {
    name: "Blue Orange Foundation",
    amount: "$123,476,000",
    beneficiary: "Feed the poor",
    date: "12 Dec, 2020", 
  },      
  {
    name: "Blue Orange Foundation",
    amount: "$123,476,000",
    beneficiary: "Feed the poor",
    date: "12 Dec, 2020", 
  },      
  {
    name: "Blue Orange Foundation",
    amount: "$123,476,000",
    beneficiary: "Feed the poor",
    date: "12 Dec, 2020", 
  },      
  {
    name: "Blue Orange Foundation",
    amount: "$123,476,000",
    beneficiary: "Feed the poor",
    date: "12 Dec, 2020", 
  },      
  {
    name: "Blue Orange Foundation",
    amount: "$123,476,000",
    beneficiary: "Feed the poor",
    date: "12 Dec, 2020", 
  },      
]);
</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
table >tbody > tr> td  {
  @apply align-middle   mx-auto   text-base px-6 py-4 ;
}
</style>
