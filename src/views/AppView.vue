<script lang="ts" setup>
import AppNavigator from '@/components/AppNavigator.vue';
</script>

<template>
  <div class="app-wrapper">
    <header>
      <AppNavigator />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
