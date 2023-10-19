<script lang="ts" setup>
import type { QuoteBlockInfo } from '@/block/types';
import { useFieldArray, useForm } from 'vee-validate';

defineProps<{
  blockInfo: QuoteBlockInfo;
}>();

const emit = defineEmits(['change']);

const { defineInputBinds } = useForm();

const { fields, push } = useFieldArray('blocks');

const content = defineInputBinds('content');
</script>

<template>
  <!-- @vue-ignore -->
  <input class="content-input" type="text" v-bind="content" @change="emit('change', $event.target.value)" />
  <input v-for="field in fields" :key="field.key" v-model="field.value" class="content-input" type="text" />
  <button class="rounded-lg border p-1" @click="push(new Date().toLocaleTimeString())">添加</button>
</template>

<style scoped>
.content-input {
  @apply mt-2 h-8 w-full rounded-lg border border-gray-300 px-2 text-gray-800 outline-none;
}
</style>
