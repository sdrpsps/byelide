export type BasicBlockType = 'quote' | 'heroTitle' | 'view' | 'chart' | 'image';

export type ExternalBlockType = 'button' | 'form' | 'notes';

export type BlockType = BasicBlockType | ExternalBlockType;

export interface BasicBlockInfo {
  id: string;
  type: BasicBlockType;
  label: string;
}

export interface QuoteBlockInfo extends BasicBlockInfo {
  content: string;
}
