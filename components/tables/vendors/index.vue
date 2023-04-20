<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Vendors</h3>

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
            v-for="(vendor, index) in vendors"
            :key="index"
            class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'"
          >
            <td>{{ vendor.name }}</td>
            <td>{{ vendor.email }}</td>
            <td>{{ vendor.amount }}</td>
            <td class="">{{ vendor.ngo_campaign_ratio }}</td>
                 <td> 
            <span class="text-xs px-2 py-[.35rem] rounded-2xl capitalize" :class="vendor.status == 'active' ? 'text-[#337138] bg-[#D1F7C4]' : 'text-[#3D435E] bg-[#E7EBF3]'"> {{ vendor.status }} </span>
            </td>


            <td> 
                <Button
                  :hasBorder="true"
                  :hasIcon="false" 
                  :text="vendor.status == 'active' ? 'Deactivate' : 'Activate'"
                  :isGray="vendor.status == 'active'"
                  :disabled="vendor.status == 'active'"
                  class="text-[.875rem] !py-2 !px-3"
                /> 
            </td>
 
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const headers = ref([
  { title: "Name" },
  { title: "Email Address" },
  { title: "Amount sold" },
  { title: "NGOs / Campaigns" },
  { title: "Status" },
  { title: "Actions" },
]);

const vendors = ref([
  {
    name: "Blue Orange Foundation",
    email: "test@gmamil.com",
    amount: "$123,476,000",
    ngo_campaign_ratio: "3 / 9",
    status: "active", 
  },  
  {
    name: "Blue Orange Foundation",
    email: "test@gmamil.com",
    amount: "$123,476,000",
    ngo_campaign_ratio: "3 / 9",
    status: "inactive", 
  },  
  {
    name: "Blue Orange Foundation",
    email: "test@gmamil.com",
    amount: "$123,476,000",
    ngo_campaign_ratio: "3 / 9",
    status: "active", 
  },  
  {
    name: "Blue Orange Foundation",
    email: "test@gmamil.com",
    amount: "$123,476,000",
    ngo_campaign_ratio: "3 / 9",
    status: "active", 
  },  
  {
    name: "Blue Orange Foundation",
    email: "test@gmamil.com",
    amount: "$123,476,000",
    ngo_campaign_ratio: "3 / 9",
    status: "active", 
  },  
  {
    name: "Blue Orange Foundation",
    email: "test@gmamil.com",
    amount: "$123,476,000",
    ngo_campaign_ratio: "3 / 9",
    status: "inactive", 
  },  
  {
    name: "Blue Orange Foundation",
    email: "test@gmamil.com",
    amount: "$123,476,000",
    ngo_campaign_ratio: "3 / 9",
    status: "active", 
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
