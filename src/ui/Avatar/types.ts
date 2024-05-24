import type { AvatarProps as RadixAvatarProps } from '@radix-ui/react-avatar';
import type { WithClassName } from '@/types';
import type { IconIdType } from '@/ui/Icon';

export type AvatarInfo = {
  /**
      The URL of the image to display.
    */
  url?: string;
  /**
      The fallback name to display if the image fails to load.
    */
  fallbackName: string;
  /**
      The fallback icon to display if the image fails to load.
    */
  fallbackIcon?: IconIdType;
  /**
      The alternative text to display for image accessibility.
    */
  alt?: string;
};

export type AvatarProps = WithClassName<AvatarInfo> & RadixAvatarProps;
