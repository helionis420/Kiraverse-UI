import { getAnchorHref } from './utils/common';

export const API_URL = process.env.PUBLIC_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

export const ALCHEMY_API_KEY =
  process.env.PUBLIC_ALCHEMY_API_KEY || 'DnYBRfyDl1aI0hyiEsNlPvGAXx8gWLdD';

export const STATUS_CODE_UNAUTHORIZED = 401;

export const STATUS_CODE_FORBIDDEN = 403;

export const LOCK_SCROLL_Y_CLASS_NAME = 'lock-scroll-y';

export const URL_REGEX = /^((http|https|ftp):\/\/)/;

export const MEDIA_QUERY_LARGE_PHONES = '(max-width: 640px)';
export const MIN_MEDIA_QUERY_LAPTOP = '(min-width: 1025px)';

export const DEFAULT_TRANSITION = { type: 'linear', duration: 0.3 };

export const DAY_IN_SECONDS = 60 * 60 * 24;

export const URL_LINK_DOWNLOAD = 'http://launcher.paramlabs.io';

export const SCROLL_DURATION = 600;

export const ABOUT_VIDEO_YT_ID = 'wJONXDzMQyE';
export const ABOUT_VIDEO_YT_URL = 'https://youtu.be/wJONXDzMQyE';

export const ID_HERO = 'hero';
export const ID_ABOUT_US = 'about-us';
export const ID_SEASON = 'game-modes';
export const ID_NFT_COLLECTION = 'nft-collection';
// export const ID_METAVERSE = 'metaverse';
export const ID_DEVELOPERS = 'developers';
export const ID_FAQ = 'faq';

export const IDS_SECTIONS = [ID_ABOUT_US, ID_SEASON, ID_NFT_COLLECTION, ID_DEVELOPERS, ID_FAQ];

export const MAIN_NAVIGATION = [
  {
    id: 1,
    href: getAnchorHref(ID_ABOUT_US),
    label: 'About us',
  },
  {
    id: 2,
    href: getAnchorHref(ID_SEASON),
    label: 'Game modes',
  },
  {
    id: 3,
    href: getAnchorHref(ID_NFT_COLLECTION),
    label: 'Characters',
  },
  // {
  //     id: 4,
  //     href: getAnchorHref(ID_METAVERSE),
  //     label: 'Metaverse',
  // },
  {
    id: 5,
    href: getAnchorHref(ID_DEVELOPERS),
    label: 'Developers',
  },
  {
    id: 6,
    href: 'https://www.lootrush.com/games/kiraverse-genesis-collection',
    label: 'Rent Skins',
  },
  {
    id: 7,
    href: getAnchorHref(ID_FAQ),
    label: 'faq',
  },
];

export const SOCIALS = [
  {
    id: 'icon-twitter_24',
    href: 'https://twitter.com/kiraversegame',
  },
  {
    id: 'icon-instagram_24',
    href: 'https://instagram.com/thekiraverse',
  },
  {
    id: 'icon-discord_24',
    href: 'https://discord.gg/kiraverse',
  },
  {
    id: 'icon-youtube_24',
    href: 'https://youtube.com/@kiraversegame',
  },
];

export const FOOTER_LINKS = [
  {
    id: 1,
    href: '/terms-of-service',
    label: 'Terms Of Service',
  },
  {
    id: 2,
    href: '/privacy-policy',
    label: 'Privacy Policy',
  },
];

const DURATION = 0.65;
const DELAY = 0.3;

export const FADE_IN_UP = {
  hidden: {
    y: '75%',
    opacity: 0,
  },
  visible: (custom: number) => {
    return {
      y: 0,
      opacity: 1,
      transition: { delay: custom * DELAY, duration: DURATION },
    };
  },
};
