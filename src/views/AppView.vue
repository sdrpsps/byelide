<script lang="ts" setup>
import AppNavigator from '@/components/AppNavigator.vue';
</script>

<template>
  <div class="fixed flex h-full w-full flex-col">
    <header>
      <AppNavigator />
    </header>
    <main class="h-[calc(100%-3rem)]">
      <RouterView />
    </main>
  </div>
</template>
