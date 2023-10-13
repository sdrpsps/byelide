<script lang="ts" setup>
import { Iphone, LaptopComputer } from '@icon-park/vue-next';
import type { Icon } from '@icon-park/vue-next/es/runtime';
import type { PreviewType } from '@/components/AppPreviewer/types';
import { inject } from 'vue';

const previewType = inject<PreviewType>('previewType');

const iconComponents: { type: PreviewType; icon: Icon }[] = [
  {
    type: 'laptop',
    icon: LaptopComputer,
  },
  {
    type: 'mobile',
    icon: Iphone,
  },
];
</script>

<template>
  <div class="flex items-center justify-end gap-4">
    <div
      class="flex cursor-pointer items-center justify-center rounded-md p-2 transition-all hover:bg-gray-200/70"
      :class="icon.type === previewType ? 'bg-white' : ''"
      v-for="icon in iconComponents"
      :key="icon.type"
      @click="previewType = icon.type"
    >
      <component :is="icon.icon" />
    </div>
  </div>
</template>
