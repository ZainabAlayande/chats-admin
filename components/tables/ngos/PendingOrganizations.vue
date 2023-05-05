<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Organizations</h3>

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
            v-for="(organization, index) in organizations"
            :key="index"
            class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'"
          >
            <td class="title">{{ organization.name }}</td>
            <td>{{ organization.email }}</td>
            <td>{{ organization.firstName }}</td>
            <td class="">{{ organization.lastName }}</td>
            <td>
              <span
                class="text-xs px-2 py-[.35rem] rounded-2xl capitalize text-[#337138] bg-[#D1F7C4]"
              >
                {{ organization.status }}
              </span>
            </td>

            <td>
              <Button
                :hasBorder="true"
                :hasIcon="false"
                text="Manually approve"
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
  { title: "Organizations Name" },
  { title: "Email address" },
  { title: "First Name" },
  { title: "Last Name" },
  { title: "KYCs Status" },
  { title: "Actions" },
]);

const organizations = ref([
  {
    name: "Blue Orange Foundation",
    email: "example@gmail.com",
    firstName: "Daniel",
    lastName: "Script",
    status: "successful",
  },
  {
    name: "Blue Orange Foundation",
    email: "example@gmail.com",
    firstName: "Daniel",
    lastName: "Script",
    status: "successful",
  },
  {
    name: "Blue Orange Foundation",
    email: "example@gmail.com",
    firstName: "Daniel",
    lastName: "Script",
    status: "successful",
  },
  {
    name: "Blue Orange Foundation",
    email: "example@gmail.com",
    firstName: "Daniel",
    lastName: "Script",
    status: "successful",
  },
  {
    name: "Blue Orange Foundation",
    email: "example@gmail.com",
    firstName: "Daniel",
    lastName: "Script",
    status: "successful",
  },
]);
</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
table > tbody > tr > td {
  @apply align-middle  text-center  text-base px-6 py-4;
}
table > tbody > tr > td.title {
  @apply   text-left ;
}
</style>
