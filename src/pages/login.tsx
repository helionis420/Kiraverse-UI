import { displayError, trpc } from '@/api/api.helpers';
import { LoginResponse } from '@/api/api.interfaces';
import { Arg, tRPCError } from '@/api/trpc.interfaces';
import Hero from '@/components/Hero';
import MainLayout from '@/components/Layout/MainLayout';
import { useSignedIn } from '@/hooks/useSignedIn';
import { useAppDispatch } from '@/store';
import { setToken, setUser } from '@/store/user.reducer';
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

const api = trpc.auth.login.mutate<LoginResponse>;
type Argument = Arg<typeof api>;
type FormInputs = Argument;

const schema = yup
  .object({
    email: yup.string().email().required('Please provide a valid first name'),
    password: yup.string().required('Please provide a valid password'),
  })
  .required();

const Page: NextPage = () => {
  const router = useRouter();
  useSignedIn();
  const dispatch = useAppDispatch();
  const { mutate: signin, isLoading } = useMutation({
    mutationFn: (data: FormInputs) => {
      return api(data);
    },
    onSuccess: ({ token, ...data }) => {
      dispatch(setUser(data));
      dispatch(setToken(token));
      router.replace('/');
    },
    onError(err: tRPCError) {
      displayError(err);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <MainLayout>
      <Hero className="items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black-1000 to-black-36" />
        <form
          onSubmit={handleSubmit((data) => {
            signin(data);
          })}
          className="max-w-md w-screen mx-auto z-10 -mt-24"
        >
          <Typography variant="headline-h3" className="text-center mt-4" component="h3">
            Login in to
            <br /> your Account
          </Typography>
          <div className="space-y-4 mt-12">
            <Input
              label="Email"
              placeholder="Your Email"
              {...register('email', { required: true })}
              errorMessage={errors.email?.message}
            />
            <Input
              label="Password"
              type="password"
              {...register('password', { required: true })}
              errorMessage={errors.password?.message}
            />
            <div className="text-right text-sm font-mono text-typography-bright-pink-100">
              <Link href="/reset-password">Forgot Password?</Link>
            </div>
          </div>
          <div className="mt-6">
            <Button disabled={isLoading || !isValid} variant="primary" className="w-full">
              log in
            </Button>
          </div>
          <div className="mt-4 text-typography-pink-100 text-center">
            Don&apos;t have an account yet?{' '}
            <Link href="/register" className="text-stroke-blue-100">
              Sign up
            </Link>
          </div>
        </form>
      </Hero>
    </MainLayout>
  );
};

export default Page;
