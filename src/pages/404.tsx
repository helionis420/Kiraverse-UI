import type { NextPage } from 'next';
import MainLayout from '@/components/Layout/MainLayout';
import NotFound from '@/modules/NotFound';

const NotFoundPage: NextPage = () => {
  return (
    <MainLayout>
      <NotFound />
    </MainLayout>
  );
};

export default NotFoundPage;
