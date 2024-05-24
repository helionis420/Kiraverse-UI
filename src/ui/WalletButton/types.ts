import type { WithClassName } from '@/types';
import { WALLET_PROVIDERS } from './constants';

export type WalletProvider = (typeof WALLET_PROVIDERS)[number];

export type WalletButtonProps = WithClassName<{
  /**
        The Id of the button
     */
  id: string;
  /**
        The name of the logo to display.
     */
  logoName?: WalletProvider;
  /**
        The title of the logo to display.
     */
  title: string;
}>;
