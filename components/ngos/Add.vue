<template>
  <div>
    <form @submit.prevent="addOrganization" class="mt-4 px-3 pb-2"> 
    <!-- Name Section here  here -->
    <div class="flex flex-col space-y-4"> 
      <div class="">
        <label for="organization-name" class="font-medium block text-base mb-2"> Name of organization </label>
        <input
          type="text" 
          id="organization-name" 
          v-model="organization.name" 
          placeholder="Enter Organization"
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
        />
      </div>

      <div class="">
        <label for="email" class="font-medium block text-base mb-2"> Email </label>
        <input
          type="email" 
          id="email" 
          placeholder="example@gmail.com"
          v-model="organization.email" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
        />
      </div>
  
      <div class="">
          <label for="website" class="font-medium block text-base mb-2"> website </label>
        <input
          type="text" 
          id="website"
          placeholder="https://www.example.com"
          v-model="organization.website" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
        /> 
    </div>
  
      <div class="">
          <label for="location" class="font-medium block text-base mb-2"> location</label>
        <input
          type="text" 
          id="location"
          placeholder=""
          v-model="organization.location" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
        /> 
    </div>

     <div class="">
        <label for="phone-number" class="font-medium block text-base mb-2"> Phone Number </label>
        <input
          type="text" 
          id="phone-number"
          placeholder="(759) 012-3985"
          v-model="organization.phone_number" 
          class="text-base p-4 rounded-md font-normal w-full outline-none ring-0 bg-[#FAFAFA]"
        />
      </div>
    </div> 

    <div class="save-btn flex pb-3 mt-8">
      <Button
        type="submit"
        :has-icon="false"
        text="Create"
        custom-styles="height:50px; "
        class="px-8" 
      />
    </div>
  </form>
  </div>
</template>

<script setup lang="ts"> 
const organization = ref({
name: "",
email: "", 
website: "",
location: "",
phone_number: "",
})

const addOrganization = () => {
  console.log(organization.value)
}
</script>
 