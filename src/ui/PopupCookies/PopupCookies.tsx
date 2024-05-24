import Link from 'next/link';
import { setCookie, parseCookies } from 'nookies';
import { memo, useEffect } from 'react';
import clsx from 'clsx';
import type { PopupCookiesProps, PopupCookiesType } from './types';
import { COOKIES_MAX_AGE } from './constants';
import useIsClient from '@/hooks/useIsClient';
import { useToggle } from '@/hooks/useToggle';
import Icon from '@/ui/Icon';
import Typography from '@/ui/Typography';
import ComponentLink from '@/ui/Link';
import Button from '@/ui/Button';
import s from './PopupCookies.module.css';

const PopupCookies: React.FC<PopupCookiesProps> = ({ className }) => {
  const isClient = useIsClient();
  const { cookies } = parseCookies();
  const [isShown, , setIsShown] = useToggle(false);

  const cookieClickHandler = (value: PopupCookiesType) => {
    setCookie(null, 'cookies', value, {
      maxAge: COOKIES_MAX_AGE,
      path: '/',
    });
    setIsShown(false);
  };

  useEffect(() => {
    if (!isClient) {
      return;
    }

    if (!cookies) {
      setIsShown(true);
    }
  }, [isClient, setIsShown, cookies]);

  return (
    <div className={clsx(s.wrap, isShown && s.show, className)}>
      <div className={s.holder}>
        <span className={s.icon}>
          <Icon id="icon-cookie_20" />
        </span>
        <div className={s.content}>
          <Typography className={s.desc} variant="body-large" component="p">
            We use cookies to ensure that we give you the best experience on our website.{' '}
            <Link href="/privacy-policy" passHref legacyBehavior>
              <ComponentLink className={s.link} variant="tertiary">
                Read cookies policies.
              </ComponentLink>
            </Link>
          </Typography>
        </div>
      </div>
      <div className={s.actions}>
        <Button
          className={s.btn}
          variant="primary"
          size="sm"
          disabled={!isShown}
          onClick={() => {
            cookieClickHandler('allow');
          }}
        >
          Allow
        </Button>
        <Button
          className={s.btn}
          variant="secondary"
          size="sm"
          disabled={!isShown}
          onClick={() => {
            cookieClickHandler('decline');
          }}
        >
          Decline
        </Button>
      </div>
    </div>
  );
};

export default memo(PopupCookies);
