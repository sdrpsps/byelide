import { defineStore } from 'pinia';
import { ref } from 'vue';
import { blocks as blocksData } from '@/mocks/blocks';

const useAppEditorStore = defineStore('appEditor', () => {
  const currentBlockId = ref<string | null>(null);
  const blocks = ref(blocksData);

  const selectBlock = (id: string) => {
    currentBlockId.value = id;
  };

  const updateBlock = (id: string, content?: string) => {
    blocks.value = blocks.value.map((block) => {
      if (block.id === id) {
        // @ts-ignore
        block.props.content = content;
      }
      return block;
    });
  };

  const updateBlocks = (newBlocks: typeof blocksData) => {
    blocks.value = newBlocks;
  };

  return { currentBlockId, blocks, selectBlock, updateBlock, updateBlocks };
});

export default useAppEditorStore;
