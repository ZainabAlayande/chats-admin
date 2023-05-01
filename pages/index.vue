<template>
  <div class="flex bg-[#FAFAFA] min-h-screen justify-between items-center">
    <div class="w-[27.5rem] block mx-auto my-10">
      <img
        src="~/assets/images/logo.svg"
        class="m-auto h-[3.875rem] text"
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
                id="email"
                v-model="payload.email"
                type="email"
                class="bg-transparent focus:bg-transparent block flex-1 min-w-0 w-full rounded-tr-lg rounded-br-lg text-sm text-primary-input p-[1.125rem] pl-1 outline-0 border-0"
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
                id="password"
                v-model="payload.password"
                :type="showPassword ? 'text' : 'password'"
                class="bg-transparent focus:bg-transparent block flex-1 min-w-0 w-full rounded-tr-lg rounded-br-lg text-sm text-primary-input p-[1.125rem] pl-1 outline-0 border-0"
                placeholder="password"
                autocomplete="current-password"
              />

              <div
                class="absolute right-0 top-0 my-auto h-full bg-transparent flex justify-center items-center px-[1.125rem] cursor-pointer"
                @click="showPassword = !showPassword"
              >
                <WidgetsIconsEyes :title="showPassword ? 'open' : 'close'" />
              </div>
            </div>
          </div>

          <div class="block w-full mt-8">
            <Button
              text="Login"
              class="w-full"
              :disabled="loading"
              @click="login"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginCredentials } from "~/repositories/auth/interface";
import { useRepositories } from "~/repositories/useRepositories";

definePageMeta({
  layout: "auth",
});

const showPassword: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const payload = ref<LoginCredentials>({
  email: "",
  password: "",
});

const login = async () => {
  loading.value = true;
  const { auth } = useRepositories();
  const authData = await auth.login(payload.value).finally(() => {
    loading.value = false;
  });

  console.log("authData", authData);
};
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.04);
}
</style>
