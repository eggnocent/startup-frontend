<template>
  <div class="h-screen flex">
    <!-- Bagian Gambar Latar -->
    <div class="hidden md:block lg:w-1/3 bg-white h-full auth-background"></div>
    
    <!-- Bagian Form Login -->
    <div class="flex-grow flex justify-center items-center bg-blue-900">
      <div class="w-full md:w-3/4 lg:w-1/2 px-6 py-10 bg-white rounded-lg shadow-lg">
        <h2 class="font-normal mb-6 text-3xl text-gray-800 text-center">
          Sign In to Your Account
        </h2>
        <div class="mb-6">
          <label class="font-normal text-lg text-gray-700 block mb-3">
            Email Address
          </label>
          <input
            type="email"
            class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-700"
            placeholder="Write your email address here"
            value="julia.keeva@gmail.com"
          />
        </div>
        <div class="mb-6">
          <label class="font-normal text-lg text-gray-700 block mb-3">
            Password
          </label>
          <input
            type="password"
            class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-700"
            placeholder="Write your password here"
            value="nasigorenglimaribbu"
          />
        </div>
        <div class="mb-6">
          <button
            @click="$router.push({ path: '/' })"
            class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
          >
            Sign In
          </button>
        </div>
        <div class="text-center">
          <p class="text-gray-700 text-md">
            Don't have an account?
            <nuxt-link to="/register" class="no-underline text-orange-button">
              Sign Up
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-background {
  background-image: url("/sign-in-background.jpg");
  background-position: center;
  background-size: cover;
}
</style>
