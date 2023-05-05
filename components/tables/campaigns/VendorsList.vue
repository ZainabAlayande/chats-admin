<template>
  <div
    class="  flex flex-col space-y-5 px-5 py-4 justify-around  box-shadow  rounded-xl bg-white  "
  >
   
   <h3 class="text-xl flex items-center font-bold py-4   space-x-2">
      Campaign Vendors ( {{ campaignVendors.length }} )
    </h3>

    <div class= " p-4 space-y-5 rounded-xl ring-1  opacity ring-primary-green">
      <h1
        v-for="(name, index) in campaignVendors"
        :key="index"
        class="font-medium  capitalize text-primary-gray"
      >
        {{ name }}
      </h1>

      <div
        class=" flex items-center space-x-2 font-bold text-primary-green"
      >
        <IconEyes title="open" />
       <span class="block">See All</span>
      </div>
    </div>
  </div>
</template>

<script setup>   
   const  campaignVendors = ref( [
      "Joseph Clark",
      "Abraham Julius",
      "Alex Philips",
      "Jude Emeka",
    ])
</script>

 
<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
} 
</style>
