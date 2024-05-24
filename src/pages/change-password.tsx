import { displayError, trpc } from '@/api/api.helpers';
import { ChangePasswordResponse } from '@/api/api.interfaces';
import { Arg, tRPCError } from '@/api/trpc.interfaces';
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

const api = trpc.auth.changePassword.mutate<ChangePasswordResponse>;
type Argument = Arg<typeof api>;
type FormInputs = Argument & {
  rePassword: string;
};

const schema = yup
  .object({
    email: yup.string().email().required('Please provide a valid email'),
    code: yup.string().required('Please provide a valid verification code'),
    password: yup.string().required('Please provide a password'),
    rePassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Please confirm password'),
  })
  .required();

const Page: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const { mutate: changePassword, isLoading } = useMutation({
    mutationFn: (data: Argument) => {
      return api(data);
    },
    onSuccess: () => {
      router.push('/password-reset-success');
    },
    onError(err: tRPCError) {
      displayError(err);
    },
  });

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get('email') || '';

  return (
    <MainLayout>
      <Hero className="items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black-1000 to-black-36" />
        <div className="max-w-md w-screen mx-auto z-10 -mt-24">
          <Typography variant="headline-h3" className="text-center mt-4" component="h3">
            create
            <br /> new password
          </Typography>
          <form
            onSubmit={handleSubmit(({ code, email, password }) => {
              changePassword({ code, email, password });
            })}
          >
            <div className="space-y-4 mt-12">
              <Input
                defaultValue={email}
                label="Email"
                readOnly
                required
                placeholder="Your Email"
                type="text"
                {...register('email')}
                errorMessage={errors.email?.message}
              />
              <Input
                label="Verification Code"
                required
                placeholder="* * * * * *"
                type="text"
                {...register('code')}
                errorMessage={errors.code?.message}
              />
              <Input
                label="New Password"
                {...register('password')}
                errorMessage={errors.password?.message}
                required
                placeholder="New Password"
                type="password"
              />
              <Input
                label="Retype Password"
                {...register('rePassword')}
                errorMessage={errors.rePassword?.message}
                required
                placeholder="New Password"
                type="password"
              />
            </div>
            <div className="mt-6">
              <Button variant="primary" type="submit" disabled={isLoading} className="w-full">
                Save Changes
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
