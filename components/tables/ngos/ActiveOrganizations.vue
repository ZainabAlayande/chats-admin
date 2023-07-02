<template>
  <div class="bg-white rounded-xl main">
    <div class="flex h-16 w-full items-center justify-between px-6">
      <h3 class="font-bold text-[1.125rem]">Organizations</h3>

      <div class="text-sm flex font-medium items-center justify-end">
        <span>Filter By</span>
      </div>
    </div>

    <Loading v-if="loading" />

    <div v-else>
      <table class="table-auto w-full">
        <thead class="w-full">
          <tr>
            <th class="bg-[#f7f7f7] text-base font-medium px-6 py-4" v-for="(header, index) in headers"
              :class="index == 0 && 'text-left'">
              {{ header.title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(organization, index) in organizations" :key="index" class="cursor-pointer"
            :class="index % 2 != 0 && 'bg-[#FCFCFE]'">
            <td class="title">
              <nuxt-link :to="`ngos/${organization.id}`">
                {{ organization.name }}
              </nuxt-link>
            </td>
            <td>{{ organization.email }}</td>
            <td>{{ formatMoney(organization.disbursedSum) }}</td>
            <td class="">{{ organization.beneficiary_count }}</td>
            <td>
              <span class="text-xs px-2 py-[.35rem] rounded-2xl capitalize" :class="organization.status == 'active'
                  ? 'text-[#337138] bg-[#D1F7C4]'
                  : 'text-[#3D435E] bg-[#E7EBF3]'
                ">
                {{ organization.status }}
              </span>
            </td>

            <td>
              <Button :hasBorder="true" :hasIcon="false" :text="organization.status == 'active' ? 'Deactivate' : 'Activate'
                " :isGray="organization.status == 'active'" :disabled="organization.status == 'active'"
                class="text-[.875rem] !py-2 !px-3" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatMoney } from "~/controllers/utils"
import { useToast } from '~/composables/useToast'

const headers = ref([
  { title: "Name" },
  { title: "Email address" },
  { title: "Disbursed" },
  { title: "Beneficiaries" },
  { title: "Status" },
  { title: "Actions" },
]);

const organizations: Ref<any[]> = ref([]);
const loading: Ref<boolean> = ref(false);

const { getAllNGOs } = useApi();
const toast = useToast()

const fetchNGOs = async () => {

  loading.value = true;
  const { data, error } = await useAsyncData('all-ngo', () => getAllNGOs())

  if (data)
    organizations.value = data.value.data.splice(0, 8)

  else if (error)
    toast.error('Error Fetching')

  loading.value = false;
}

onBeforeMount(() => { fetchNGOs() })
</script>

<style lang="scss" scoped>
.main {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}

table>tbody>tr>td {
  @apply align-middle text-center text-base px-6 py-4;
}

table>tbody>tr>td.title {
  @apply text-left;
}
</style>
