<template>
  <div
    class="  flex flex-col space-y-5 px-5 py-4 justify-around  box-shadow  rounded-xl bg-white  "
  >
   
   <h3 class="text-xl flex items-center font-bold pb-4   space-x-2">
     Campaign Summary 
    </h3>

      <div class= " p-4 rounded-xl ring-1  opacity ring-primary-green">

      <div v-for="(campaign, index) in campaignSummary" :key="index">
        <h1 class="font-bold space-y-4 mb-4 text-[1.125rem]">{{ campaign.name }}</h1>
   
        <div class="flex items-center gap-x-4 mb-4  font-medium text-primary-gray"> 
        <WidgetsIconsEyes title="close" />
           {{ campaign.beneficiaries }} Beneficiaries
        </div>

        <!-- fund progess bar  -->
        <div class="h-2 w-full overflow-hidden mb-4 rounded-2xl bg-gray-200">
          <p
            :style="{
              width:
                getCampaignFundsPercentage(
                  campaign.beneficiaries,
                  campaign.data['Beneficiary Share']
                ) + '%',
            }"
            class="h-2 rounded-2xl bg-green-400"
          ></p>
        </div>

        <!-- fund progess bar  -->
        <div class=" w-full  mb-6  flex justify-between items-center">
         <p class="flex items-center space-x-2 ">
           <span class="font-bold">134  </span>
           <span class="   font-medium text-primary-gray"> / 264 Beneficiaries spent </span>
            </p>


         <p class=" rounded-xl  py-1 px-2 font-normal text-sm bg-[#F5F6F8] ">
           
           64% </p>

         
        </div>
 
        <div class="flex flex-col justify-between">
          <div
            v-for="(values, keys) in campaign.data"
            :key="keys"
            class="flex  pt-5 pb-1 space-x-2 justify-between border-b border-primary-light text-sm"
        
          >
            <p class="font-bold">{{ keys }}:</p>
            <p class="text-right">{{ values }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup> 
const campaignSummary = ref ([
      {
        name: "Feed the Hungry Campaign",
        beneficiaries: 784,
        data: {
          Description: "This is a campaign for feeding the hungry people",
          "Start Date": new Date("Sept 28, 2022").toDateString(),
          "End Date": new Date("Dec 30, 2022").toDateString(),
          Location: "Ikeja , Lagos , Nigeria",
          Created: new Date("Dec 30, 2022").toDateString(),
          "Beneficiary Share": 90000,
        },
      },
    ]) 
    const getCampaignFundsPercentage = (availableFunds, budget) =>  {
      if (availableFunds * 100 < budget) {
        const ratio = (availableFunds * 100) / budget;
        const result = ratio * 100;
        return Math.ceil(result);
      } else return 100;
    } 
</script>

<style lang="scss" scoped></style>
