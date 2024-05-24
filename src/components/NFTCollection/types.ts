import type { FCProps } from '@/types';

export type NftCollection = {
  address: string;
  id: string;
  img_url: string;
  name: string;
  type: string;
};

export type NFTItem = {
  id: string;
  image: string;
  address: string;
  name: string;
  owner?: string;
  price: {
    value: number;
    type: string;
  };
  collection: string;
  url: string;
};

export type NFTCollectionProps = FCProps<{
  /**
      The title of component.
    */
  title: string;
  /**
      The names of categories nft.
    */
  // NFTCategories: NFTCategory[];
}>;
