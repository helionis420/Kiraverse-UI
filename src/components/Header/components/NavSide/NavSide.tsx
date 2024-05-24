import { trpc } from '@/api/api.helpers';
import { GenerateNonceResponse, IPublicProfile, ValidateNonceResponse } from '@/api/api.interfaces';
import { useAppDispatch } from '@/store';
import { setUser } from '@/store/user.reducer';
import { selectUser } from '@/store/user.selectors';
import Button from '@/ui/Button';
import UserMenu from '@/ui/UserMenu';
import clsx from 'clsx';
import { memo, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAccount, useConnect, useSignMessage } from 'wagmi';
import s from './NavSide.module.css';
import type { NavSideProps } from './types';
import { toast } from 'react-toastify';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const WalletConnectButton = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const {
    data: signMessageData,
    isLoading: signLoading,
    signMessage,
    variables,
  } = useSignMessage();
  const [nonce, setNonce] = useState<GenerateNonceResponse | null>(null);
  const user = useSelector(selectUser);
  const { address } = useAccount();
  const [isConnecting, setIsConnecting] = useState(false);
  const dispatch = useAppDispatch();

  const {
    connect,
    connectors: [metamask, walletConnect],
    isLoading,
    pendingConnector,
  } = useConnect({
    onSuccess: ({ account }) => {
      trpc.nonce.generate.mutate<GenerateNonceResponse>({ wallet: account }).then((data) => {
        signMessage({ message: data.nonce });
        setNonce(data);
      });
    },
    onError(err) {
      toast(err.message, {
        type: 'error',
      });
    },
  });

  useEffect(() => {
    (async () => {
      if (variables?.message && signMessageData && nonce && address && user) {
        await trpc.nonce.validate
          .mutate<ValidateNonceResponse>({ id: nonce.id, signature: signMessageData })
          .then(() => {
            setIsConnecting(true);
            trpc.me.get
              .query<IPublicProfile>()
              .then((user) => {
                dispatch(setUser(user));
                toast('Wallet connected!', {
                  type: 'info',
                });
              })
              .catch((err) => {
                toast(err.message, {
                  type: 'error',
                });
              })
              .finally(() => {
                setIsConnecting(false);
              });
          });
      }
    })();
  }, [signMessageData, variables?.message, nonce]);

  const loading = signLoading || isLoading || isConnecting;

  const connector = isMobile ? walletConnect : metamask;

  return (
    <Button
      onClick={() => {
        connector.disconnect();
        connect({ connector });
      }}
      className={clsx(s.btn, s.mob)}
      size="md"
      variant="primary"
      responsive
      disabled={!connector.ready || loading}
    >
      {isLoading || connector.id === pendingConnector?.id ? ' connecting...' : 'connect wallet'}
    </Button>
  );
};

const NavSide: React.FC<NavSideProps> = ({ className, children }) => {
  const user = useSelector(selectUser);

  const isLoggedWithoutWallet = !user?.wallet_address;
  const isLoggedIn = !!user;

  const contentJSX = useMemo(() => {
    switch (true) {
      case !isLoggedIn:
      default: {
        return (
          <Button className={s.btn} size="md" variant="primary" href="/login" responsive>
            Get started
          </Button>
        );
      }
      case isLoggedWithoutWallet: {
        return (
          <>
            <WalletConnectButton />
            <UserMenu
              userInfo={{
                fallbackName: user ? `${user?.firstname} ${user?.lastname}` : 'User #231',
                fallbackIcon: 'icon-smile_48',
                nickName: user?.id || 'User #231',
                url: user?.picture,
              }}
            />
          </>
        );
      }
      case !!user?.wallet_address: {
        return (
          <UserMenu
            userInfo={{
              fallbackName: user?.name || 'John Doe',
              url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
              fallbackIcon: 'icon-smile_48',
              nickName: user?.name || 'John Doe',
            }}
            walletAddress={user?.wallet_address}
          />
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, isLoggedWithoutWallet, user]);

  return (
    <div className={clsx(s.wrap, className)}>
      <div className={s.holder}>
        {contentJSX}
        {children}
      </div>
    </div>
  );
};

export default memo(NavSide);
