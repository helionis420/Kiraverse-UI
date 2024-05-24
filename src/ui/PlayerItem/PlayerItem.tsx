import { memo } from 'react';
import {
  Provider as RadixTooltipProvider,
  Root as RadixTooltipRoot,
  Trigger as RadixTooltipTrigger,
  Portal as RadixTooltipPortal,
  Content as RadixTooltipContent,
} from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import type { PlayerItemProps } from './types';
import { createUserInitials } from '@/utils/createUserInitials';
import Typography from '@/ui/Typography';
import Avatar from '@/ui/Avatar';
import s from './PlayerItem.module.css';

const PlayerItem: React.FC<PlayerItemProps> = ({ className, avatarUrl, name, place }) => {
  const isFirstPlace = place === 1;
  const userInitials = createUserInitials(name);

  return (
    <div
      className={clsx(s.wrap, className, {
        [s.first]: isFirstPlace,
      })}
    >
      <RadixTooltipProvider>
        <RadixTooltipRoot>
          <RadixTooltipTrigger asChild>
            <div className={s.left}>
              <Avatar className={s.avatar} url={avatarUrl} fallbackName={userInitials} alt={name} />
              <Typography className={s.name} variant="body-large-bold" component="p">
                {name}
              </Typography>
            </div>
          </RadixTooltipTrigger>
          <RadixTooltipPortal>
            <RadixTooltipContent className={s['tooltip-content']} align="start">
              <Typography className={s['tooltip-name']} variant="body-small-mono">
                {name}
              </Typography>
            </RadixTooltipContent>
          </RadixTooltipPortal>
        </RadixTooltipRoot>
      </RadixTooltipProvider>

      <div className={s.right}>
        <RadixTooltipProvider>
          <RadixTooltipRoot>
            <RadixTooltipTrigger asChild>
              <div className={s['place-wrap']}>
                <Typography className={s.place} variant="body-small-mono">
                  {place}
                </Typography>
              </div>
            </RadixTooltipTrigger>
            <RadixTooltipPortal>
              <RadixTooltipContent className={s['tooltip-content']} side="right">
                <Typography className={s['tooltip-place']} variant="body-small-mono">
                  {place}
                </Typography>
              </RadixTooltipContent>
            </RadixTooltipPortal>
          </RadixTooltipRoot>
        </RadixTooltipProvider>
      </div>
    </div>
  );
};

export default memo(PlayerItem);
