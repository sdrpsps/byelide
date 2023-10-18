<script setup lang="ts">
import { Success, Attention, Error } from '@icon-park/vue-next';

// 定义状态类型
const STATUS_MAP = {
  success: {
    color: '#059669',
    bgColor: '#E4F2E9',
    borderColor: '#79DBA2',
    icon: Success,
  },
  warning: {
    color: '#E18F05',
    bgColor: '#F8ECEC',
    borderColor: '#79DBA2',
    icon: Attention,
  },
  error: {
    color: '#DC2C26',
    bgColor: '#F8ECEC',
    borderColor: '#F3A9A5',
    icon: Error,
  },
};

// 定义 props，withDefaults 是 Vue3 的内置函数
const props = withDefaults(
  // props 的类型定义
  defineProps<{
    status: keyof typeof STATUS_MAP;
    content: string;
  }>(),
  // props 的默认值
  {
    status: 'success',
    content: 'quote',
  },
);

const { icon, color, bgColor } = STATUS_MAP[props.status];
</script>

<template>
  <div class="flex flex-1 items-center rounded-lg px-2 py-4" :style="{ backgroundColor: bgColor, color }">
    <component :is="icon" />
    <span class="ml-1.5">{{ content }}</span>
  </div>
</template>
