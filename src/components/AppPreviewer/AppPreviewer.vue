<script lang="ts" setup>
import LaptopPreviewer from '@/components/AppPreviewer/LaptopPreviewer.vue';
import type { PreviewType } from '@/components/AppPreviewer/types';
import { provide, ref } from 'vue';
import MobilePreviewer from '@/components/AppPreviewer/MobilePreviewer.vue';
import PreviewerSwitcher from '@/components/AppPreviewer/PreviewerSwitcher.vue';

const previewType = ref<PreviewType>('mobile');

provide('previewType', previewType);
</script>

<template>
  <div class="mx-10 my-2 flex flex-1 flex-col overflow-hidden rounded-lg shadow-2xl">
    <div class="grid h-12 grid-cols-4 items-center px-4">
      <!-- 用来占位的 -->
      <div></div>
      <div class="col-span-2 rounded-md bg-gray-200/50 px-4 py-1 text-sm text-slate-400">https://google.com</div>
      <div>
        <PreviewerSwitcher />
      </div>
    </div>
    <component :is="previewType === 'laptop' ? LaptopPreviewer : MobilePreviewer" />
  </div>
</template>
