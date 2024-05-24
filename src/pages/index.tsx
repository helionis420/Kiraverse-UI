import { trpc } from '@/api/api.helpers';
import { NftCollectionsResponse, NftListResponse } from '@/api/api.interfaces';
import MainLayout from '@/components/Layout/MainLayout';
import {
  NFT_COLLECTION_INITIAL_ID,
  NFT_COLLECTION_INITIAL_PAGE_INDEX,
} from '@/components/NFTCollection/constants';
import Home from '@/modules/Home';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage } from 'next';

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  let initialId = NFT_COLLECTION_INITIAL_ID;

  await queryClient.prefetchQuery(['nft/collection'], async () => {
    const collections = await trpc.asset.collections.query<NftCollectionsResponse>();

    if (collections.length) {
      initialId = collections[0]?.id;
    }

    return collections;
  });

  await queryClient.prefetchQuery(
    ['nft/list', NFT_COLLECTION_INITIAL_PAGE_INDEX, initialId],
    async () => {
      const list = await trpc.asset.list.query<NftListResponse>({
        collection: initialId,
        top: NFT_COLLECTION_INITIAL_PAGE_INDEX * 4,
      });
      return list;
    },
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default HomePage;
