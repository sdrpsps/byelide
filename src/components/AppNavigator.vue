<script lang="ts" setup>
import { computed } from 'vue';
import { Bug, Data, LayoutThree, Lightning, Share } from '@icon-park/vue-next';
import { useRoute } from 'vue-router';
import useEnvStore from '@/stores/env';

const route = useRoute();
const activeLink = computed(() => route.name);

const envStore = useEnvStore();

const navigateItemLinks = [
  {
    value: 'dataSource',
    label: '数据源',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(0, 196, 83, 0.2) 0%, rgba(0, 196, 83, 0) 100%)`,
    color: 'rgb(0, 196, 83)',
    borderColor: 'radial-gradient(50% 50%, rgb(0, 196, 83) 0%, rgba(0, 196, 83, 0) 100%)',
    icon: Data,
  },
  {
    value: 'layout',
    label: '布局',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(24, 190, 212, 0.2) 0%, rgba(24, 190, 212, 0) 100%)`,
    color: 'rgb(24, 190, 212)',
    borderColor: 'radial-gradient(50% 50%, rgb(24, 190, 212) 0%, rgba(24, 190, 212, 0) 100%)',
    icon: LayoutThree,
  },
  {
    value: 'actions',
    label: '动作',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(241, 60, 11, 0.2) 0%, rgba(241, 60, 11, 0) 100%)`,
    color: 'rgb(241, 60, 11)',
    borderColor: 'radial-gradient(50% 50%, rgb(241, 60, 11) 0%, rgba(241, 60, 11, 0) 100%)',
    icon: Lightning,
  },
];
</script>

<template>
  <div class="flex h-12 items-center justify-between text-sm shadow">
    <!-- logo -->
    <section class="ml-4 flex items-center">
      <div class="h-8 w-8">
        <img
          alt="logo"
          class="rounded-md bg-slate-400 p-1"
          src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/11.3.0/2/svg/1f469-200d-1f692.svg"
        />
      </div>
      <h1 class="ml-2 font-bold">Byelide</h1>
    </section>
    <!-- 导航 -->
    <section class="flex">
      <div
        v-for="link in navigateItemLinks"
        :key="link.value"
        :style="{ background: activeLink === link.value ? link.bg : '' }"
      >
        <RouterLink :to="link.value" class="relative mx-6 flex h-12 items-center gap-2 px-2">
          <div :style="{ color: activeLink === link.value ? link.color : '#666' }">
            <component :is="link.icon" v-bind:size="16" />
          </div>
          <span>{{ link.label }}</span>
          <div
            :style="{ background: activeLink === link.value ? link.borderColor : '' }"
            class="absolute bottom-[-1px] h-[1px] w-full"
          ></div>
        </RouterLink>
      </div>
    </section>
    <!-- 按钮 -->
    <section class="mr-4 flex h-9 gap-2">
      <div
        :class="envStore.isDebug ? 'border-cyan-500 text-cyan-500' : 'text-gray-400'"
        class="flex cursor-pointer select-none items-center gap-2 rounded-md border px-3"
        @click="envStore.toggleDebug()"
      >
        <Bug />
        <span>开发模式:{{ envStore.isDebug ? '开' : '关' }}</span>
      </div>
      <div
        class="flex cursor-pointer select-none items-center gap-2 rounded-md border-gray-800 bg-gray-800 px-3 text-white"
      >
        <Share />
        <span>发布</span>
      </div>
    </section>
  </div>
</template>
