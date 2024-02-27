<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Register for free
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <Input :label="'Username'" :type="'text'" v-model="username" />
        <Input :label="'Email address'" :type="'email'" v-model="email" />
        <Input :label="'Password'" :type="'password'" v-model="password" />


        <div>
          <button
            type="submit"
            @click="submitHandler"
            :class="isLoading ? 'cursor-not-allowed opacity-50' : ''"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <router-link
          :to="{ name: 'login' }"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>
<script>

export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    computed: {
        isLoading() {
            return this.$store.state.auth.isLoading;
        },
    },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            const data = {
                name: "none",
                username: this.username,
                bio: "none",
                following: false,
                email: this.email,
                password: this.password,
                image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/773.jpg"
            };
            this.$store.dispatch("register", data)
                .then(user => console.log("USER", user))
                .catch(error => console.log("ERROR", error));
        },
    },
};
</script>
<style>

</style>
