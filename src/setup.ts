// 物料插件
import QuoteBlock from './block/basic/QuoteBlock.vue';
import HeroTitleBlock from '@/block/basic/HeroTitleBlock.vue';
import ViewBlock from '@/block/basic/ViewBlock.vue';
import ChartBlock from '@/block/basic/ChartBlock.vue';
import ImageBlock from '@/block/basic/ImageBlock.vue';
import type { App } from 'vue';
import type { BlockType } from './block/types';

// 基础物料
const baseBlocks = [
  {
    type: 'quote',
    material: QuoteBlock,
  },
  {
    type: 'heroTitle',
    material: HeroTitleBlock,
  },
  {
    type: 'view',
    material: ViewBlock,
  },
  {
    type: 'chart',
    material: ChartBlock,
  },
  {
    type: 'image',
    material: ImageBlock,
  },
];

// 插件化物料管理
class BlockSuit {
  private blocks = baseBlocks;

  // 获取物料 Map
  getBlockMap() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]));
  }

  // 获取物料列表
  getBlocks() {
    return this.blocks;
  }

  // 添加物料
  addBlocks(block: any) {
    this.blocks.push(block);
  }

  // 判断物料是否存在
  hasBlock(type: BlockType) {
    return !!this.getBlockMap()[type];
  }
}

const blockSuit = new BlockSuit();
const blockMap = blockSuit.getBlockMap();
export const blockMapSymbol = Symbol('blockMap');

// 安装插件
export const setup = (app: App<Element>) => {
  const ins = {
    install(app: App<Element>) {
      app.provide(blockMapSymbol, blockMap);
      // 提供全局变量来 inject
      app.config.globalProperties.$blockMap = blockMap;
    },
  };

  app.use(ins);
};
