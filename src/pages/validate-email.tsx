import { displayError, trpc } from '@/api/api.helpers';
import { ResendCodeResponse, VerifyCodeResponse } from '@/api/api.interfaces';
import { tRPCError } from '@/api/trpc.interfaces';
import Hero from '@/components/Hero';
import MainLayout from '@/components/Layout/MainLayout';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import Typography from '@/ui/Typography';
import { useMutation } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';

const ResendCodeButton = () => {
  const [remainingSeconds, setRemainingSeconds] = useState(20);

  const { mutate: resendCode } = useMutation({
    mutationFn: (data: Parameters<typeof trpc.auth.resendCode.mutate>[0]) => {
      return trpc.auth.resendCode.mutate<ResendCodeResponse>(data);
    },
    onSuccess: () => {
      setRemainingSeconds(30);
    },
    onError(err: tRPCError) {
      displayError(err);
    },
  });

  useEffect(() => {
    const x = setInterval(() => {
      if (remainingSeconds <= 0) {
        return;
      }
      setRemainingSeconds((secs) => {
        return secs - 1;
      });
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, [remainingSeconds]);

  if (remainingSeconds <= 0) {
    return (
      <button
        className="text-stroke-blue-100"
        onClick={() => {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const email = urlParams.get('email');
          if (email) {
            resendCode({
              email: decodeURIComponent(email),
              type: 'validate-email',
            });
          }
        }}
      >
        Resend
      </button>
    );
  }

  return (
    <button className="text-stroke-blue-100 disabled:opacity-40" disabled={remainingSeconds >= 0}>
      Resend in {remainingSeconds} sec
    </button>
  );
};

const Page: NextPage = () => {
  const [code, setCode] = useState<{ [key: string]: string }>({
    'field-0': '',
    'field-1': '',
    'field-2': '',
    'field-3': '',
    'field-4': '',
    'field-5': '',
  });

  const router = useRouter();

  const { mutate: verifyCode, isLoading } = useMutation({
    mutationFn: (data: Parameters<typeof trpc.auth.verifyCode.mutate>[0]) => {
      return trpc.auth.verifyCode.mutate<VerifyCodeResponse>(data);
    },
    onError: () => {
      // do nothing for now
    },
    onSuccess: (_data) => {
      router.push('/verify-success');
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value, name } = e.currentTarget;
    const [, fieldIndex] = name.split('-');

    const fieldIntIndex = parseInt(fieldIndex, 10);

    const matcher = new RegExp(/[0-9]/);

    if (value === '') {
      // It should not be last input field
      if (fieldIntIndex >= 0) {
        // Get the next input field using it's name
        const nextfield = document.querySelector<HTMLInputElement>(
          `input[name=field-${fieldIntIndex - 1}]`,
        );

        setCode((state) => {
          return { ...state, [name]: value };
        });

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
          nextfield.select();
        }
      }
    }

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 6) {
        // Get the next input field using it's name
        const nextfield = document.querySelector<HTMLInputElement>(
          `input[name=field-${fieldIntIndex + 1}]`,
        );

        if (!matcher.test(value)) return;

        setCode((state) => {
          return { ...state, [name]: value };
        });

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
          nextfield.select();
        }
      }
    }
  };

  return (
    <MainLayout>
      <Hero className="items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black-1000 to-black-36" />
        <div className="lg:w-full max-w-md w-screen mx-auto z-10 -mt-24">
          <Typography variant="headline-h3" className="text-center mt-4" component="h3">
            verification code
          </Typography>
          <Typography variant="body-small-mono" className="text-center mt-4" component="h3">
            You will receive a 6-digit verification code if your email exist.
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const queryString = window.location.search;
              const urlParams = new URLSearchParams(queryString);
              const email = urlParams.get('email');
              if (email) {
                verifyCode({
                  email: decodeURIComponent(email),
                  code: Object.values(code).join(''),
                });
              }
            }}
          >
            <div className="space-y-4 mt-12">
              <div className="flex items-center lg:gap-1 gap-4">
                {Array.from({ length: 6 }).map((_, idx) => {
                  const field = `field-${idx}`;
                  return (
                    <Input
                      key={idx}
                      required
                      placeholder="*"
                      type="text"
                      maxLength={1}
                      name={field}
                      onChange={handleChange}
                      className="lg:w-1/6 w-20 lg:px-0 text-center"
                      pattern="[0-9]"
                      value={code[field]}
                      onPaste={({ clipboardData }) => {
                        const text = clipboardData.getData('text');

                        const values = text.split('');

                        const newCode = values.reduce((curr, next, idx) => {
                          return {
                            ...curr,
                            [`field-${idx}`]: next,
                          };
                        }, {});

                        setCode(newCode);
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="mt-6">
              <Button variant="primary" className="w-full" disabled={isLoading}>
                verify
              </Button>
            </div>
          </form>
          <div className="mt-4 text-typography-pink-100 text-center">
            Didn&apos;t recieve code <ResendCodeButton />
          </div>
        </div>
      </Hero>
    </MainLayout>
  );
};

export default Page;
