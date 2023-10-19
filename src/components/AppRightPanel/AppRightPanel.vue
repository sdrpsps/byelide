<script lang="ts" setup>
import useAppEditorStore from '@/stores/appEditor';
import { computed } from 'vue';
import { blocks } from '@/mocks/blocks';
import { blocksBaseMeta } from '@/constants/blocksBaseMeta';
import QuoteSetting from '@/components/AppRightPanel/QuoteSetting.vue';

const appEditorStore = useAppEditorStore();

const { updateBlock } = appEditorStore;

const blocksMap = computed(() => {
  return blocks.reduce<Record<string, (typeof blocks)[0]>>((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {});
});

const currentBlockInfo = computed(() => {
  if (!appEditorStore.currentBlockId) return null;
  return blocksMap.value[appEditorStore.currentBlockId];
});
</script>

<template>
  <div class="w-[var(--panel-width)] px-4 shadow">
    <template v-if="currentBlockInfo">
      <!-- @vue-ignore -->
      <div class="h-11 text-sm font-bold leading-[44px]">{{ blocksBaseMeta[currentBlockInfo.type].name }}</div>
      <div>
        <!-- @vue-ignore -->
        <QuoteSetting :blockInfo="currentBlockInfo" @change="(val) => updateBlock(currentBlockInfo.id, val)" />
      </div>
    </template>
  </div>
</template>
