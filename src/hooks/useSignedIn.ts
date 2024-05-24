import { selectUser } from '@/store/user.selectors';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function useSignedIn() {
  const router = useRouter();
  // const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [router, user]);
}
