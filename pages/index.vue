<template>
  <div class="flex bg-[#FAFAFA] min-h-screen justify-between items-center">
    <div class="w-[27.5rem] block mx-auto my-10">
      <img
        src="~/assets/images/logo.svg"
        class="m-auto h-[3.875rem]"
        alt="logo"
      />

      <div class="mt-16 bg-white rounded-2xl box-shadow">
        <h3
          class="text-center text-2xl py-6 font-medium text-primary-blue border-b-[1px] border=[#FEFEFE]"
        >
          Admin Login
        </h3>

        <form class="p-6">
          <div class="flex flex-col mb-4">
            <label for="password" class="block mb-2 text-sm font-medium">
              Email Address
            </label>

            <div class="flex relative items-center bg-primary-light rounded-lg">
              <span class="inline-flex items-center pl-4 pr-3 text-sm">
                <WidgetsIconsEmail />
              </span>

              <input
                v-model="email"
                type="email"
                id="email"
                class="bg-transparent focus:bg-transparent block flex-1 min-w-0 w-full  rounded-tr-lg rounded-br-lg text-sm text-primary-input p-[1.125rem] pl-1 outline-0 border-0"
                placeholder="email"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <label for="password" class="block mb-2 text-sm font-medium">
              Password
            </label>

            <div class="flex relative items-center bg-primary-light rounded-lg">
              <span class="inline-flex items-center pr-3 pl-4">
                <WidgetsIconsLock />
              </span>

              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                id="password"
                class="bg-transparent focus:bg-transparent block flex-1 min-w-0 w-full rounded-tr-lg rounded-br-lg  text-sm text-primary-input p-[1.125rem] pl-1 outline-0 border-0"
                placeholder="password"
              />

              <div
                @click="togglePassword"
                class="absolute right-0 top-0 my-auto h-full bg-transparent flex justify-center items-center px-[1.125rem] cursor-pointer"
              >
                <WidgetsIconsEyes :title="showPassword ? 'open' : 'close'" />
              </div>
            </div>
          </div>

          <div class="block w-full mt-8">
            <Button text="Login" class="w-full" @click="login" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showPassword = ref(false);
const email = ref("");
const password = ref("");

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
const login = () => {
  console.log("logiing in");
};
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.04);
}
</style>
