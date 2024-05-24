import { trpc } from '@/api/api.helpers';
import { NftCollectionsResponse, NftListResponse } from '@/api/api.interfaces';
import { tRPCError } from '@/api/trpc.interfaces';
import { useQuery } from '@tanstack/react-query';

export const useGetNftCollection = () => {
  const response = useQuery<NftCollectionsResponse, tRPCError>({
    queryKey: ['nft/collection'],
    queryFn() {
      return trpc.asset.collections.query<NftCollectionsResponse>();
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return response;
};

export const useGetNftList = (page: number, type: string, enabled: boolean) => {
  const response = useQuery<NftListResponse, tRPCError>({
    queryKey: ['nft/list', page, type],
    queryFn() {
      return trpc.asset.list.query<NftListResponse>({
        collection: type,
        top: page * 4,
      });
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    enabled,
  });

  return response;
};
