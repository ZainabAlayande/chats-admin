<template>
  <div
    class="box-shadow space-y-4  flex flex-col w-full justify-around rounded-lg bg-white p-4"
  >
    <h2 class="font-bold text-sm">
      Total Count
    </h2>

    <div v-for="(item, index) in totalCount" :key="index" class="mb-1">  
      <div 
        class="flex h-8 w-fit items-center justify-around space-x-4 rounded-2xl bg-button-light-gray text-primary-gray mb-1 px-4 py-1"
      > 
       <IconSearch :width="16" :height="16" />
        <p class="text-sm"> {{ item.title }} </p>
      </div> 

      <h2 class="ml-5 mt-1 font-medium">
        {{item.count}}
      </h2> 
     </div>
  </div>
</template>

<script setup lang="ts"> 
const props = defineProps({
beneficiaries: {
    type: Number,
    default: 842000,
  },
  vendors: {
    type: Number,
    default: 42000,
  },
})
const totalCount = ref([
  {
    title: "Beneficiaries",
    count: props.beneficiaries,
    // icon: BeneficiaryIcon,
  },
  {
    title: "Vendors",
    count: props.vendors,
    // icon: VendorIcon,
  },
],) 
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
</style>


