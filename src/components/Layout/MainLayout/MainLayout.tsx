import { memo } from 'react';
import type { MainLayoutProps } from './types';
import { useScrollbarWidth } from '@/hooks/useScrollbarWidth';
import { useSetGlobalCustomProperty } from '@/hooks/useSetGlobalCustomProperty';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useQuery } from 'wagmi';
import { trpc } from '@/api/api.helpers';
import { useAppDispatch } from '@/store';
import { setUser } from '@/store/user.reducer';
import { IPublicProfile } from '@/api/api.interfaces';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const sbw = useScrollbarWidth();

  useSetGlobalCustomProperty('--sbw', `${sbw}px`);

  const dispatch = useAppDispatch();

  useQuery(['me'], {
    queryFn: trpc.me.get.query<IPublicProfile>,
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
  });

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default memo(MainLayout);
