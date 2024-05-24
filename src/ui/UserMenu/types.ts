import type { WithClassName } from '@/types';
import type { AvatarInfo } from '../Avatar';
import type { UserMenuItemProps } from './components/UserMenuItem';
import { LINKS_BOTTOM, LINKS_BOTTOM_WITH_WALLET, LINKS_MAIN } from './constants';
import { HTMLAttributeAnchorTarget } from 'react';

export type UserMenuProps = WithClassName<{
  /**
        User's wallet address
    */
  walletAddress?: string;
  /**
        User's info to display
    */
  userInfo?: AvatarInfo & {
    /**
            User's nickname
        */
    nickName: string;
  };
}>;

export type UserMenuLinkItem = UserMenuItemProps & {
  /**
        Unique identifier for the menu item.
    */
  id: string;
  /**
        Link to navigate to.
        Has to be inner link
    */
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  /**
        Callback to execute on click.
        Will be ignored if href is provided.
    */
  onClick?: () => void;
  disabled?: boolean;
};

export type UserMenuLinkId =
  | (typeof LINKS_MAIN)[number]['id']
  | (typeof LINKS_BOTTOM)[number]['id']
  | (typeof LINKS_BOTTOM_WITH_WALLET)[number]['id'];
