<script lang="ts" setup>
import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer';
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable';
import { Delete, Drag } from '@icon-park/vue-next';
import useEnvStore from '@/stores/env';
import useAppEditorStore from '@/stores/appEditor';
import { storeToRefs } from 'pinia';
import type { DropResult } from 'smooth-dnd';
import { toRaw } from 'vue';

const envStore = useEnvStore();
const appEditorStore = useAppEditorStore();

const { currentBlockId, blocks } = storeToRefs(appEditorStore);
const { selectBlock, updateBlocks } = appEditorStore;

const onDrop = <T extends any[]>(arr: T, dragResult: DropResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;

  const result = [...arr];

  // 没做操作
  if (addedIndex === null) return result;

  // 添加
  if (removedIndex === null) {
    result.splice(addedIndex, 0, { id: `${Math.random()}`, ...payload });
    return result;
  }

  // 移动
  if (removedIndex !== null) {
    const item = result[removedIndex];
    result.splice(removedIndex, 1);
    result.splice(addedIndex, 0, item);
    return result;
  }

  return result;
};
</script>

<template>
  <smooth-dnd-container
    drag-handle-selector=".handle"
    group-name="blocks"
    orientation="vertical"
    tag="div"
    @drop="updateBlocks(onDrop(toRaw(blocks), $event))"
  >
    <smooth-dnd-draggable v-for="(block, index) in blocks" :key="block.id" class="!overflow-visible">
      <div class="relative mt-4 flex w-full rounded-lg bg-white px-1 py-2.5" @click.stop="selectBlock(block.id)">
        <!-- 动态模块 -->
        <!-- @vue-ignore -->
        <component class="z-10" :is="$blockMap[block.type].material" :content="block.props.content" />
        <!-- 边框 -->
        <div
          :class="{
            current: currentBlockId === block.id,
            development: envStore.isDebug,
          }"
          class="absolute left-0 top-0 h-full w-full rounded-lg"
        >
          <!-- 工具栏 -->
          <div
            v-if="currentBlockId === block.id"
            class="absolute left-0 top-[-36px] z-10 flex items-center gap-1 rounded-lg bg-gray-900 px-2 py-1"
          >
            <div class="handle flex h-6 w-6 cursor-pointer items-center justify-center rounded text-white">
              <Drag />
            </div>
            <div
              class="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-white"
              @click="blocks.splice(index, 1)"
            >
              <Delete />
            </div>
          </div>
        </div>
      </div>
    </smooth-dnd-draggable>
  </smooth-dnd-container>
</template>

<style scoped>
.development {
  @apply border border-dashed border-indigo-600;
}

.current {
  @apply border border-solid border-slate-400;
}
</style>
