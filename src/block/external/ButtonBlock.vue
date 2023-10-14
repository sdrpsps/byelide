<script setup lang="ts">
defineProps<{
  title: {
    type: String;
    required: true;
  };
  onClick: {
    type: Function;
    required: true;
  };
}>();
</script>

<template>
  <div class="flex h-9 items-center justify-center rounded-lg bg-gray-800 py-3 font-bold text-white">{{ title }}</div>
</template>
