<script setup lang="ts">
import { Page, SmartOptimization } from '@icon-park/vue-next';
import { ref } from 'vue';
import OutlineDrawer from './OutlineDrawer.vue';
import BlockDrawer from './BlockDrawer.vue';

type DrawerMode = 'outline' | 'blocks' | null;

const isDrawerShow = ref<DrawerMode>(null);

const toggleDrawer = (drawerMode: DrawerMode) => {
  if (isDrawerShow.value === drawerMode) {
    isDrawerShow.value = null;
    return;
  }
  isDrawerShow.value = drawerMode;
};
</script>

<template>
  <div class="flex h-full">
    <!-- 按钮 -->
    <div class="flex flex-col px-2 pt-4 text-gray-400 shadow">
      <div
        @click="toggleDrawer('outline')"
        class="my-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded transition-all duration-300 hover:bg-gray-100"
        :class="isDrawerShow === 'outline' && ['bg-gray-100', 'text-gray-700']"
      >
        <Page size="20" />
      </div>
      <div
        @click="toggleDrawer('blocks')"
        class="my-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded transition-all duration-300 hover:bg-gray-100"
        :class="isDrawerShow === 'blocks' && ['bg-gray-100', 'text-gray-700']"
      >
        <SmartOptimization size="20" />
      </div>
    </div>
    <!-- 组件栏 -->
    <Transition name="app-left-panel-drawer">
      <div v-if="isDrawerShow" class="w-[calc(var(--panel-width)_-_60px)] overflow-hidden shadow">
        <component :is="isDrawerShow === 'outline' ? OutlineDrawer : BlockDrawer" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.app-left-panel-drawer-enter-active,
.app-left-panel-drawer-leave-active {
  transition: width 0.5s cubic-bezier(0.3, 0.1, 0.3, 1);
}

.app-left-panel-drawer-enter-from,
.app-left-panel-drawer-leave-to {
  width: 0;
}
</style>
