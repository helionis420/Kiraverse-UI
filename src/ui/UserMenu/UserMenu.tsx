import { trpc } from '@/api/api.helpers';
import { MEDIA_QUERY_LARGE_PHONES } from '@/constants';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useAppDispatch } from '@/store';
import { resetUser, setUser } from '@/store/user.reducer';
import { selectUser } from '@/store/user.selectors';
import Avatar from '@/ui/Avatar';
import Icon from '@/ui/Icon';
import Typography from '@/ui/Typography';
import { createSvgShimmer, noop } from '@/utils/common';
import { cutString } from '@/utils/cutString';
import {
  Content as RadixPopoverContent,
  Portal as RadixPopoverPortal,
  Root as RadixPopoverRoot,
  Trigger as RadixPopoverTrigger,
} from '@radix-ui/react-popover';
import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDisconnect } from 'wagmi';
import s from './UserMenu.module.css';
import UserMenuItem from './components/UserMenuItem';
import {
  DEFAULT_USER_INFO_BG_IMAGE,
  LINKS_BOTTOM,
  LINKS_BOTTOM_WITH_WALLET,
  LINKS_MAIN,
  LINKS_NO_WALLET,
  USER_INFO_BG_HEIGHT,
  USER_INFO_BG_WIDTH,
} from './constants';
import type { UserMenuLinkId, UserMenuLinkItem, UserMenuProps } from './types';

const UserMenu: React.FC<UserMenuProps> = ({ className, userInfo, walletAddress }) => {
  const isMobile = useMediaQuery(MEDIA_QUERY_LARGE_PHONES);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);

  const { mutate: disconnectWallet } = useMutation({
    mutationFn: () => {
      return trpc.me.disconnectWallet.mutate();
    },
    onSuccess: () => {
      disconnect();
    },
  });

  const { disconnect } = useDisconnect({
    onSuccess: () => {
      if (user) {
        dispatch(setUser({ ...user, wallet_address: '' }));
      }
    },
  });

  const { mutate: logout } = useMutation({
    mutationFn: () => {
      return trpc.auth.logout.mutate();
    },
    onSuccess: () => {
      dispatch(resetUser());
      router.replace('/login');
    },
  });

  const userTriggerJSX = useMemo(() => {
    if (!userInfo) {
      return null;
    }

    if (!walletAddress) {
      return (
        <button className={clsx(s['avatar-without-wallet-wrap'], 'focus-primary', className)}>
          <Avatar className={s.avatar} {...userInfo} />
        </button>
      );
    }

    return (
      <button className={clsx(s['avatar-with-wallet-wrap'], 'focus-primary', className)}>
        <span className={s.left}>
          <Avatar className={s.avatar} {...userInfo} />
          <Typography className={s['wallet-address']} variant="body-small-mono">
            {cutString(walletAddress)}
          </Typography>
        </span>
        {isMobile ? null : <Icon className={s.indicator} id="icon-chevron-down_24" />}
      </button>
    );
  }, [className, isMobile, userInfo, walletAddress]);

  const downloadClickHandler = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('download');
  }, []);

  const signOutClickHandler = useCallback(() => {
    logout();
  }, []);

  const menuItemsHandlers = useMemo<Partial<Record<UserMenuLinkId, typeof noop>>>(() => {
    return {
      download: downloadClickHandler,
      'sign-out': signOutClickHandler,
      'disconnect-wallet': disconnectWallet,
    };
  }, [downloadClickHandler, signOutClickHandler]);

  const renderMenuItem = useCallback(
    (link: UserMenuLinkItem) => {
      if (link?.href && !link?.disabled) {
        return (
          <Link href={link.href} target={link.target || '_self'}>
            <span className={clsx(s['menu-item'], 'focus-primary')}>
              <UserMenuItem {...link} />
            </span>
          </Link>
        );
      }

      if (Object.keys(menuItemsHandlers).includes(link.id)) {
        return (
          <UserMenuItem
            className={clsx(s['menu-item'], 'focus-primary')}
            {...link}
            onClick={menuItemsHandlers[link.id as UserMenuLinkId]}
          />
        );
      }

      return <UserMenuItem className={clsx(s['menu-item'], 'focus-primary')} {...link} />;
    },
    [menuItemsHandlers],
  );

  if (!userInfo) {
    return null;
  }

  return (
    <RadixPopoverRoot>
      <RadixPopoverTrigger asChild>{userTriggerJSX}</RadixPopoverTrigger>
      <RadixPopoverPortal>
        <RadixPopoverContent className={s.content} side="bottom" align="end">
          <div className={s.top}>
            <div className={s.inner}>
              <Avatar className={s.avatar} {...userInfo} />
              <Typography className={s.name} variant="body-large-bold">
                {userInfo.nickName}
              </Typography>
            </div>
            <Image
              className={s.background}
              src={DEFAULT_USER_INFO_BG_IMAGE}
              width={USER_INFO_BG_WIDTH}
              height={USER_INFO_BG_HEIGHT}
              alt={userInfo.nickName}
              loading="lazy"
              placeholder="blur"
              blurDataURL={createSvgShimmer(USER_INFO_BG_WIDTH, USER_INFO_BG_HEIGHT)}
            />
          </div>
          <div className={s.menu}>
            {walletAddress ? (
              <ul className={s['list-top']}>
                {LINKS_MAIN.map((link) => {
                  return <li key={link.id}>{renderMenuItem(link)}</li>;
                })}
              </ul>
            ) : (
              <ul className={s['list-top']}>
                {LINKS_NO_WALLET.map((link) => {
                  return <li key={link.id}>{renderMenuItem(link)}</li>;
                })}
              </ul>
            )}
            <div className={s.divider} />
            {/* <a className={clsx(s['eos-link'], 'focus-primary')} href="#">
              <Typography className={s.label} variant="body-small-mono">
                Connect EOS account
              </Typography>
            </a> */}
            {walletAddress ? (
              <ul className={s['list-bottom']}>
                {LINKS_BOTTOM_WITH_WALLET.map((link) => {
                  return <li key={link.id}>{renderMenuItem(link)}</li>;
                })}
              </ul>
            ) : (
              <ul className={s['list-bottom']}>
                {LINKS_BOTTOM.map((link) => {
                  return <li key={link.id}>{renderMenuItem(link)}</li>;
                })}
              </ul>
            )}
          </div>
        </RadixPopoverContent>
      </RadixPopoverPortal>
    </RadixPopoverRoot>
  );
};

export default memo(UserMenu);
