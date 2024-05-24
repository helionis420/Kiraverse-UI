import type { FCProps } from '@/types';
import type { PolicyItem } from './components/PolicyItem';

export type PolicyItems = PolicyItem[];

export type PolicyProps = FCProps<{
  /**
      The title of component.
    */
  title: string;
  /**
      The text items of component.
    */
  items?: PolicyItems[];
}>;
