import type { NextPage } from 'next';
import { TERMS_OF_SERVICE_ITEMS } from '@/modules/Policy/constants';
import MainLayout from '@/components/Layout/MainLayout';
import Policy from '@/modules/Policy';

const TermsOfService: NextPage = () => {
  return (
    <MainLayout>
      <Policy title="Terms of service" items={TERMS_OF_SERVICE_ITEMS} />
    </MainLayout>
  );
};

export default TermsOfService;
