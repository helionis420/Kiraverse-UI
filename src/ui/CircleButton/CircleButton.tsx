import { memo, useMemo } from 'react';
import clsx from 'clsx';
import type { CircleButtonProps } from './types';
import { MEDIA_QUERY_LARGE_PHONES } from '@/constants';
import Typography from '@/ui/Typography';
import Icon from '@/ui/Icon';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import CircleButtonDecorOuterDesktop from './components/CircleButtonDecorOuterDesktop';
import CircleButtonDecorInnerDesktop from './components/CircleButtonDecorInnerDesktop';
import CircleButtonDecorOuterMobile from './components/CircleButtonDecorOuterMobile';
import CircleButtonDecorInnerMobile from './components/CircleButtonDecorInnerMobile';
import s from './CircleButton.module.css';

const CircleButton: React.FC<CircleButtonProps> = ({
  className,
  children,
  href,
  iconId = 'icon-arrow-right_24',
  topCaption = 'ROLL',
  bottomCaption = 'YAW',
  leftCaption = 'XYZ',
  rightCaption = 'PITCH',
  onClick,
}) => {
  const isMobile = useMediaQuery(MEDIA_QUERY_LARGE_PHONES);

  const contentJSX = useMemo(() => {
    return (
      <>
        <Typography className={clsx(s.caption, s.top)} variant="body-small-mono" component="span">
          {topCaption}
        </Typography>
        <Typography
          className={clsx(s.caption, s.bottom)}
          variant="body-small-mono"
          component="span"
        >
          {bottomCaption}
        </Typography>
        <Typography className={clsx(s.caption, s.left)} variant="body-small-mono" component="span">
          {leftCaption}
        </Typography>
        <Typography className={clsx(s.caption, s.right)} variant="body-small-mono" component="span">
          {rightCaption}
        </Typography>
        {isMobile ? (
          <>
            <CircleButtonDecorOuterMobile className={s.outer} />
            <CircleButtonDecorInnerMobile className={s.inner} />
          </>
        ) : (
          <>
            <CircleButtonDecorOuterDesktop className={s.outer} />
            <CircleButtonDecorInnerDesktop className={s.inner} />
          </>
        )}
        <span className={s.content}>
          <Typography
            className={s.title}
            variant={isMobile ? 'body-small-mono' : 'body-large-uppercase'}
            component="span"
          >
            {children}
          </Typography>
          <Icon className={s.icon} id={iconId} />
        </span>
      </>
    );
  }, [bottomCaption, children, iconId, isMobile, leftCaption, rightCaption, topCaption]);

  if (href) {
    return (
      <a
        className={clsx(s.wrap, className)}
        href={href}
        target="_blank"
        role="link"
        rel="noreferrer"
      >
        {contentJSX}
      </a>
    );
  }

  return (
    <button className={clsx(s.wrap, className)} onClick={onClick}>
      {contentJSX}
    </button>
  );
};

export default memo(CircleButton);
