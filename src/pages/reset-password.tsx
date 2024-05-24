import { displayError, trpc } from '@/api/api.helpers';
import { ResendCodeResponse } from '@/api/api.interfaces';
import { tRPCError } from '@/api/trpc.interfaces';
import Hero from '@/components/Hero';
import MainLayout from '@/components/Layout/MainLayout';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import Typography from '@/ui/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const api = trpc.auth.resendCode.mutate<ResendCodeResponse>;
type FormInputs = { email: string };

const schema = yup
  .object({
    email: yup.string().email().required('Please provide a valid first name'),
  })
  .required();

const Page: NextPage = () => {
  const router = useRouter();
  const { mutate: sendCode, isLoading } = useMutation({
    mutationFn: (data: FormInputs) => {
      return api({ ...data, type: 'forgot-password' });
    },
    onSuccess: (_, { email }) => {
      router.push(`/change-password?email=${encodeURIComponent(email)}`);
    },
    onError(err: tRPCError) {
      displayError(err);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <MainLayout>
      <Hero className="items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black-1000 to-black-36" />
        <div className="max-w-md w-screen mx-auto z-10 -mt-24">
          <Typography variant="headline-h3" className="text-center mt-4" component="h3">
            Reset
            <br /> password
          </Typography>
          <form
            onSubmit={handleSubmit((data) => {
              sendCode(data);
            })}
          >
            <div className="space-y-4 mt-12">
              <Input
                {...register('email')}
                errorMessage={errors.email?.message}
                label="Email"
                required
                placeholder="Your Email"
              />
            </div>
            <div className="mt-6">
              <Button disabled={isLoading} variant="primary" className="w-full">
                Get Code
              </Button>
            </div>
          </form>
          <div className="mt-4 text-typography-pink-100 text-center">
            Don’t have an account yet?{' '}
            <Link href="/register" className="text-stroke-blue-100">
              Sign up
            </Link>
          </div>
        </div>
      </Hero>
    </MainLayout>
  );
};

export default Page;
