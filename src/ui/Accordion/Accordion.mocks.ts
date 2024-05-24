import type { AccordionItemType } from './components/AccordionItem';
import { ACCORDION_ITEM_TYPES } from './constants';

export const MOCK_ACCORDION_ITEMS: AccordionItemType[] = [
  {
    id: '1',
    title: 'Who are the creators of Kiraverse?',
    items: [
      {
        type: ACCORDION_ITEM_TYPES.TEXT,
        text: 'Param Labs is an independent game and technology development studio specializing in multiplayer blockchain games and innovative technology development. ',
      },
      {
        type: ACCORDION_ITEM_TYPES.LINK,
        text: 'www.paramlabs.io',
        href: 'https://www.paramlabs.io/',
      },
    ],
  },
  {
    id: '2',
    title: 'Who are the creators of Kiraverse?',
    items: [
      {
        type: ACCORDION_ITEM_TYPES.TEXT,
        text: 'Non-Fungible Tokens (or NFTs) are cryptocurrency tokens that represent scarce, digital collectibles which are also indivisible and unique. The term ‘non-fungible’ just means that the tokens are distinguishable from each other and cannot be interchanged.',
      },
    ],
  },
  {
    id: '3',
    title: 'When will the game be out?',
    items: [
      {
        type: ACCORDION_ITEM_TYPES.TEXT,
        text: 'Non-Fungible Tokens (or NFTs) are cryptocurrency tokens that represent scarce, digital collectibles which are also indivisible and unique. The term ‘non-fungible’ just means that the tokens are distinguishable from each other and cannot be interchanged.',
      },
    ],
  },
  {
    id: '4',
    title: 'Who are the creators of Kiraverse?',
    items: [
      {
        type: ACCORDION_ITEM_TYPES.TEXT,
        text: 'Non-Fungible Tokens (or NFTs) are cryptocurrency tokens that represent scarce, digital collectibles which are also indivisible and unique. The term ‘non-fungible’ just means that the tokens are distinguishable from each other and cannot be interchanged.',
      },
    ],
  },
];
