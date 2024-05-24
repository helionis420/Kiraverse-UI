import type { AccordionItemType } from '@/ui/Accordion/components/AccordionItem';
import { ACCORDION_ITEM_TYPES } from '@/ui/Accordion/constants';

export const ACCORDION_ITEMS: AccordionItemType[] = [
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
    title: 'When will the game be out?',
    items: [
      {
        type: ACCORDION_ITEM_TYPES.TEXT,
        text: 'Kiraverse is currently in open Beta, however a final release date is still TBA.',
      },
    ],
  },
  {
    id: '3',
    title: 'What is Kira Bucks?',
    items: [
      {
        type: ACCORDION_ITEM_TYPES.TEXT,
        text: 'Kira Bucks is our ecosystem’s native currency, this can be earned in free to play modes, as well as competitive modes.',
      },
    ],
  },
  {
    id: '4',
    title: 'Is the game free to play?',
    items: [
      {
        type: ACCORDION_ITEM_TYPES.TEXT,
        text: 'Yes',
      },
    ],
  },
  {
    id: '5',
    title: 'What devices is the game playable on?',
    items: [
      {
        type: ACCORDION_ITEM_TYPES.TEXT,
        text: 'At the moment Kiraverse is only available for Windows PC users.',
      },
    ],
  },
  {
    id: '6',
    title: 'How can I bring my Digital asset to life in the Kiraverse?',
    items: [
      {
        type: ACCORDION_ITEM_TYPES.TEXT,
        text: 'Visit Pixeltopoly.com to have your digital asset modeled, and ready to be submitted for Kiraverse integration!',
      },
    ],
  },
];
