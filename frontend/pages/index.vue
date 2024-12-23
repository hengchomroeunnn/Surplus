<template>
  <div class="min-h-screen bg-gradient-to-b from-[#F86901] to-[#FF8C42] text-white flex flex-col items-center justify-center px-4">
    <!-- Logo Section -->
    <div class="mb-6 bg-white rounded-2xl p-4 flex items-center justify-center max-w-xs md:max-w-sm">
      <img 
        src="../assets/111.png" 
        alt="App Logo" 
        class="h-16 md:h-20 lg:h-24 object-contain"
      />
    </div>

    <!-- Hero Section -->
    <header class="text-center max-w-md px-4">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
        The App is Coming Soon!
      </h1>
      <p class="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
        Register now to be an early adopter and receive a 
        <span class="font-bold text-yellow-300">50% voucher</span>.
      </p>
    </header>

    <!-- Registration Form -->
    <form 
      @submit.prevent="registerUser" 
      class="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg shadow-md p-6 text-gray-800"
    >
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="Enter your email"
          class="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#F86901] focus:outline-none"
        />
      </div>
      <button
        type="submit"
        class="w-full py-3 bg-[#F86901] hover:bg-[#FF8C42] text-white font-semibold rounded-lg shadow-md"
      >
        Register Now
      </button>
    </form>

    <!-- Thank You Message -->
    <p v-if="registered" class="mt-6 text-lg font-medium text-center px-4">
      🎉 Thank you for registering! Stay tuned for updates.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const registered = ref(false);

const registerUser = () => {
  if (email.value) {
    registered.value = true;
    email.value = ""; // Clear input after registration
  }
};
</script>