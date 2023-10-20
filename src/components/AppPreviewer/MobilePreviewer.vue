<script lang="ts" setup>
import StatusBar from '@/components/AppPreviewer/StatusBar.vue';
import BlockRenderer from '@/block/BlockRender.vue';
</script>

<template>
  <div class="flex flex-1 items-center justify-center">
    <div
      class="simulator-wrapper relative flex h-[852px] w-[393px] flex-col overflow-hidden overflow-y-auto rounded-[55px] bg-white"
    >
      <div class="sticky top-0 z-20 bg-white">
        <StatusBar />
      </div>
      <div class="px-3 py-5">
        <BlockRenderer />
      </div>
    </div>
  </div>
</template>

<style scoped>
.simulator-wrapper {
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

.simulator-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
