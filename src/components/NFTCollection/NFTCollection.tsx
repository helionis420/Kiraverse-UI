import { memo, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { NFTCollectionProps, NftCollection } from './types';
import { useGetNftList, useGetNftCollection } from '@/hooks/api/useNFTApi';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ID_NFT_COLLECTION, DEFAULT_TRANSITION, MIN_MEDIA_QUERY_LAPTOP } from '@/constants';
import { NFT_COLLECTION_INITIAL_PAGE_INDEX } from './constants';
import Banner from '@/components/Banner';
import Container from '@/components/Container';
import Caption from '@/ui/Caption';
import Typography from '@/ui/Typography';
import Tag from '@/ui/Tag';
import NFTCard from '@/components/NFTCard';
import Button from '@/ui/Button';
import s from './NFTCollection.module.css';

const NFTCollection: React.FC<NFTCollectionProps> = ({ className, title }) => {
  const isLaptop = useMediaQuery(MIN_MEDIA_QUERY_LAPTOP);
  const [page, setPage] = useState(NFT_COLLECTION_INITIAL_PAGE_INDEX);
  const { data: NFTCollection } = useGetNftCollection();

  const [type, setType] = useState(NFTCollection?.[0].id);

  const { data, isFetching } = useGetNftList(page, type || '', true);

  const changeTypeHandler = (type: string) => {
    setType(type);
    setPage(NFT_COLLECTION_INITIAL_PAGE_INDEX);
  };

  const NFTList = useMemo(() => {
    return data ?? [];
  }, [data]);

  useEffect(() => {
    if (isLaptop && page <= NFT_COLLECTION_INITIAL_PAGE_INDEX) {
      setPage(NFT_COLLECTION_INITIAL_PAGE_INDEX);
    }
  }, [isLaptop, page]);

  return (
    <section id={ID_NFT_COLLECTION} className={clsx(s.wrap, className)}>
      <Container className={s.container}>
        <Caption className={s.caption} title="Characters" />
        <div className={s.holder}>
          <Typography className={s.title} component="h3" variant="headline-h3">
            {title}
          </Typography>
          <div className={s.panel}>
            <ul className={clsx(s['panel-nav'], 'scrollbar-hide')}>
              {NFTCollection?.map((item: NftCollection, i: number) => {
                return (
                  <li key={i}>
                    <Tag
                      onClick={() => {
                        changeTypeHandler(item.id);
                      }}
                      active={item.id === type}
                    >
                      {item.name}
                    </Tag>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={s['cards-wrap']}>
            <AnimatePresence mode="wait">
              <motion.div
                key={type ? type : null}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: DEFAULT_TRANSITION }}
                exit={{ opacity: 0, transition: DEFAULT_TRANSITION }}
              >
                {NFTList.length ? (
                  <div className={s.cards}>
                    {NFTList.map((item) => {
                      return (
                        <NFTCard
                          className={s.card}
                          key={item.id}
                          imgSrc={item.image}
                          name={item.name}
                          nick={item?.owner}
                          href={item.url}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className={s['banner-wrap']}>
                    <Banner className={s.banner} withInnerBlock innerBlockSize="sm">
                      <div className="my-auto w-full text-center">
                        <Typography
                          className={s['banner-title']}
                          variant="headline-primary-uppercase"
                          component="h3"
                        >
                          There are no NFts yet
                        </Typography>
                        <div className="mt-3.5">
                          <Typography variant="body-large" className={s.text}>
                            Check another categories
                          </Typography>
                        </div>
                        {/* <div className="mt-12 sm:mt-8">
                          <Button className={s.btn} onClick={() => {}} size="md" variant="primary">
                            Connect wallet
                          </Button>
                        </div> */}
                      </div>
                    </Banner>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          {Boolean(page * 4 <= NFTList.length) && (
            <div className={s.action}>
              <Button
                variant="secondary"
                onClick={() => {
                  setPage((prev) => {
                    return prev + 1;
                  });
                }}
                disabled={isFetching}
              >
                See more
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default memo(NFTCollection);
