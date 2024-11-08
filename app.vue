<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';
import { useAuthStore } from '~/stores/authStore';

const authStore = useAuthStore();
authStore.initialize();
</script>
