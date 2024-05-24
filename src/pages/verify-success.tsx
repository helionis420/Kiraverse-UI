import Hero from '@/components/Hero';
import MainLayout from '@/components/Layout/MainLayout';
import Button from '@/ui/Button';
import Icon from '@/ui/Icon';
import Typography from '@/ui/Typography';
import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <MainLayout>
      <Hero className="items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black-1000 to-black-36" />
        <div className="max-w-md w-screen mx-auto z-10 -mt-24">
          <div className="flex items-center justify-center mb-8">
            <div className="rounded-full w-32 h-32 border border-background-white-10-left bg-black-1000 text-background-blue-sides flex items-center justify-center">
              <Icon id="icon-mark_48" />
            </div>
          </div>
          <Typography variant="headline-h3" className="text-center mt-4" component="h3">
            successfully
            <br /> verified
          </Typography>
          <div className="mt-6 flex items-center justify-center">
            <Button variant="primary" href="/login">
              log in
            </Button>
          </div>
        </div>
      </Hero>
    </MainLayout>
  );
};

export default Page;
