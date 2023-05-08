<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Vendors</h3>

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
              class="bg-[#f7f7f7] text-base font-medium px-6 py-4"
              v-for="(header, index) in headers"
            >
              {{ header.title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(organization, index) in beneficiaries"
            :key="index"
            class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'"
          >
            <td class="title">
              <nuxt-link :to="`beneficiaries/${organization.id}`">
                {{ organization.name }}
              </nuxt-link>
            </td>

            <td>{{ organization.email }}</td>
            <td>{{ organization.amount }}</td>
            <td>{{ organization.campaigns }}</td>
            <td>
              <span
                class="text-xs px-2 py-[.35rem] rounded-2xl capitalize"
                :class="
                  organization.status == 'active'
                    ? 'text-[#337138] bg-[#D1F7C4]'
                    : 'text-[#3D435E] bg-[#E7EBF3]'
                "
              >
                {{ organization.status }}
              </span>
            </td>

            <td>
              <Button
                :hasBorder="true"
                :hasIcon="false"
                :text="
                  organization.status == 'active' ? 'Deactivate' : 'Activate'
                "
                :isGray="organization.status == 'active'"
                :disabled="organization.status == 'active'"
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
const headers = ref([
  { title: "Name" },
  { title: "Email address" },
  { title: "Amount spent" },
  { title: "Campaigns" },
  { title: "Status" },
  { title: "Actions" },
]);

const beneficiaries = ref([
  {
    id: "rf",
    name: "Janet Woodpecker",
    email: "test@gmail.com",
    amount: "40,888",
    campaigns: "3",
    status: "active",
  },  
]);

const loading: Ref<boolean> = ref(false);
const fetchBeneficiaries = async () => {
  loading.value = true;
  const { beneficiariesRepo } = useRepositories();

 const reponse = await beneficiariesRepo.getAllBeneficiaries().finally(() => {
    loading.value = false;
  });

// beneficiaries.value = reponse.data
  console.log(reponse) 
}

onBeforeMount(()=> {
  fetchBeneficiaries()
})
</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
table > tbody > tr > td {
  @apply align-middle  text-center text-base px-6 py-4;
}
table > tbody > tr > td.title {
  @apply text-left;
}
</style>
