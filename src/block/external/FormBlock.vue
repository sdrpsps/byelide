<script setup lang="ts">
import { h } from 'vue';

const props = defineProps<{
  title: {
    type: String;
    required: true;
  };
  onClick: {
    type: Function;
    required: true;
  };
}>();

console.log(props);

type Field = {
  id: string;
  type: 'input' | 'select';
  label: string;
};

const fieldMap = {
  input: h('input'),
  select: h('select'),
};

const fields: Field[] = [
  {
    id: '1',
    type: 'input',
    label: '标题',
  },
  {
    id: '2',
    type: 'select',
    label: '标题2',
  },
];
</script>

<template>
  <div class="flex flex-col">
    <div class="mb-3 flex flex-col" v-for="field in fields" :key="field.id">
      <component :is="fieldMap[field.type]" />
    </div>
  </div>
</template>
