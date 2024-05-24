import { displayError, trpc } from '@/api/api.helpers';
import { RegisterResponse } from '@/api/api.interfaces';
import { Arg, tRPCError } from '@/api/trpc.interfaces';
import Hero from '@/components/Hero';
import MainLayout from '@/components/Layout/MainLayout';
import { useSignedIn } from '@/hooks/useSignedIn';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import RadioGroup from '@/ui/RadioGroup';
import Typography from '@/ui/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const api = trpc.auth.register.mutate<RegisterResponse>;
type Argument = Arg<typeof api>;
type FormInputs = Argument & {
  rePassword: string;
};

const schema = yup
  .object({
    firstname: yup.string().required('Please provide a valid first name'),
    lastname: yup.string().required('Please provide a valid last name'),
    email: yup.string().email().required('Please provide a valid email'),
    password: yup.string().required('Please provide a password'),
    rePassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Please confirm password'),
  })
  .required();

const Page: NextPage = () => {
  const router = useRouter();
  useSignedIn();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (data: Argument) => {
      return api(data);
    },
    onError(err: tRPCError) {
      displayError(err);
    },
    onSuccess: (_data, { email }) => {
      router.push(`/validate-email?email=${encodeURIComponent(email)}`);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = ({ rePassword: _, ...data }) => {
    signup(data);
  };

  return (
    <MainLayout>
      <Hero>
        <div className="absolute inset-0 bg-gradient-to-t from-black-1000 to-black-36" />
        <div className="max-w-md w-screen mx-auto z-10">
          <Typography variant="headline-h3" className="text-center mt-4" component="h3">
            Create
            <br /> An Account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <Input
                label="First Name"
                {...register('firstname', { required: true })}
                errorMessage={errors.firstname?.message}
              />
              <Input
                label="Last Name"
                {...register('lastname', { required: true })}
                errorMessage={errors.lastname?.message}
              />
              <Input
                label="Email"
                {...register('email', { required: true })}
                errorMessage={errors.email?.message}
              />
              <Input
                label="Password"
                {...register('password', { required: true })}
                errorMessage={errors.password?.message}
                type="password"
              />
              <Input
                label="Retype Password"
                {...register('rePassword', { required: true })}
                errorMessage={errors.rePassword?.message}
                type="password"
              />
              <RadioGroup
                radioDataList={[
                  {
                    label: 'Interest in receiving promotional offers or newsletters via email',
                    value: '0',
                  },
                ]}
              />
              <RadioGroup radioDataList={[{ label: 'I agree with Privacy Policy', value: '1' }]} />
            </div>
            <div className="mt-6">
              <Button variant="primary" className="w-full" disabled={isLoading}>
                Create Account
              </Button>
            </div>
          </form>
          <div className="mt-4 text-typography-pink-100 text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-stroke-blue-100">
              Sign In
            </Link>
          </div>
          <div className="mt-4 text-typography-neutral-grey text-center">
            When you click &quot;Create Account&quot; you accept the privacy policy implicitly
          </div>
        </div>
      </Hero>
    </MainLayout>
  );
};

export default Page;
