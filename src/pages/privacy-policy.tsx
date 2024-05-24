import type { NextPage } from 'next';
import { PRIVACY_POLICY_ITEMS } from '@/modules/Policy/constants';
import MainLayout from '@/components/Layout/MainLayout';
import Policy from '@/modules/Policy';

const PrivacyPolicy: NextPage = () => {
  return (
    <MainLayout>
      <Policy title="Privacy Policy" items={PRIVACY_POLICY_ITEMS} />
    </MainLayout>
  );
};

export default PrivacyPolicy;
