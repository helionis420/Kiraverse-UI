import { memo } from 'react';
import Image from 'next/image';
import { Item as RadixRadioItem } from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import type { WalletButtonProps } from './types';
import { createSvgShimmer } from '@/utils/common';
import Typography from '@/ui/Typography';
import s from './WalletButton.module.css';

const WalletButton: React.FC<WalletButtonProps> = ({ className, title, logoName, id }) => {
  return (
    <RadixRadioItem
      className={clsx(s.wrap, 'focus-primary', className, {
        [s['without-logo']]: !logoName,
        [s['with-logo']]: logoName,
      })}
      value={id}
      id={id}
    >
      {logoName ? (
        <Image
          className={s.logo}
          src={`/images/wallets/${logoName}.webp`}
          width={40}
          height={40}
          alt={title}
          placeholder="blur"
          blurDataURL={createSvgShimmer(40, 40)}
        />
      ) : null}
      <Typography className={s.title} variant="body-large-bold">
        {title}
      </Typography>
    </RadixRadioItem>
  );
};

export default memo(WalletButton);
