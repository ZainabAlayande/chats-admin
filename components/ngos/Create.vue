<template>
  <div>
    <form @submit.prevent="addOrganization" class="mt-4 px-3 pb-2"> 
    <!-- Name Section here  here -->
    <div class="grid grid-cols-3 justify-start  gap-6"> 
      <div class="col-span-1"> 
        <div class=" border-4 mb-4 rounded-xl"> 
          <img src="~/assets/images/profile-picture.svg" class="w-[12.25rem] h-[12.5rem] "/>
        </div>

        <div class="font-bold text-[1.25rem] text-center"> Liveness capture </div>
      </div>

    <div class="col-span-2 flex flex-col space-y-4"> 
      <div class="">
        <label for="first-name" class="font-medium block text-base mb-2"> First Name </label>
        <input
          type="text" 
          id="first-name" 
          v-model="payload.first_name" 
          placeholder="Enter firstname"
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
        />
      </div>
      
      <div class="">
        <label for="last-name" class="font-medium block text-base mb-2"> Last Name </label>
        <input
          type="text" 
          id="last-name" 
          v-model="payload.last_name" 
          placeholder="Enter lastname"
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
        />
      </div>       

     <div class="">
        <label for="phone-number" class="font-medium block text-base mb-2"> Phone Number </label>
        <input
          type="text" 
          id="phone-number"
          placeholder="(759) 012-3985"
          v-model="payload.phone_number" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
        />
      </div>


      <div class="">
          <label for="address" class="font-medium block text-base mb-2"> address</label>
        <input
          type="text" 
          id="address"
          placeholder=""
          v-model="payload.address" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
        /> 
    </div>
      
    <div class=" pb-3 mt-8 w-full">
      <Button
        type="submit"
        :has-icon="false"
        text="Manually approve"
        custom-styles="height:50px; "
        class="px-8" 
      />
    </div>
    </div> 

    </div>
  </form>
  </div>
</template>

<script setup lang="ts"> 
const payload = ref({
first_name: "",
last_name: "",
phone_number: "", 
address: "", 
})


const addOrganization = () => {
  console.log(payload.value)
}
</script>
 