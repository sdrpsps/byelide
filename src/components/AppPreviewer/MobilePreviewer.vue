<script lang="ts" setup>
import StatusBar from '@/components/AppPreviewer/StatusBar.vue';
</script>

<template>
  <div class="simulator mx-auto flex h-full w-[393px] scale-95 flex-col overflow-hidden overflow-y-auto rounded-[55px]">
    <StatusBar />
  </div>
</template>

<style scoped>
.simulator {
  box-shadow:
    0 0 0 5px #151515,
    0 0 0 6px var(--color-primary),
    0 -7.5px 1.5px rgb(255 255 255 / 40%),
    7.5px 0 1.5px rgb(255 255 255 / 25%),
    -7.5px 0 1.5px rgb(255 255 255 / 40%),
    0 7.5px 1.5px rgb(255 255 255 / 25%),
    0 0 0 9px var(--color-primary),
    6px 8px 16px rgb(0 0 0 / 25%),
    20px 32px 72px rgb(0 0 0 / 20%);
}
</style>
