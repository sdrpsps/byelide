<script setup lang="ts">
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue';
import AppPreviewer from '@/components/AppPreviewer/AppPreviewer.vue';
import AppRightPanel from '@/components/AppRightPanel/AppRightPanel.vue';
</script>

<template>
  <section class="flex h-full">
    <AppLeftPanel />
    <AppPreviewer />
    <AppRightPanel />
  </section>
</template>
