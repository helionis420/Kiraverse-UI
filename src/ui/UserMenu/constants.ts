export const DEFAULT_USER_INFO_BG_IMAGE = '/images/user-bg-default.webp';
export const USER_INFO_BG_WIDTH = 283;
export const USER_INFO_BG_HEIGHT = 74;

export const LINKS_MAIN = [
  {
    id: 'my-profile',
    label: 'My Profile',
    href: '/profile',
    iconId: 'icon-user_24',
    disabled: true,
  },
  {
    id: 'download',
    label: 'Download',
    iconId: 'icon-download_24',
    href: 'https://launcher.paramlabs.io/',
    target: '_blank',
  },
  {
    id: 'my-wallet',
    label: 'My wallet',
    href: '/wallet',
    iconId: 'icon-my-wallet_24',
    disabled: true,
  },
] as const;

export const LINKS_NO_WALLET = [LINKS_MAIN[0], LINKS_MAIN[1]] as const;

export const LINKS_BOTTOM = [
  {
    id: 'sign-out',
    label: 'Sign out',
    iconId: 'icon-sign-out_24',
  },
] as const;

export const LINKS_BOTTOM_WITH_WALLET = [
  LINKS_BOTTOM[0],
  {
    id: 'disconnect-wallet',
    label: 'Disconnect Wallet',
    iconId: 'icon-sign-out_24',
  },
] as const;
