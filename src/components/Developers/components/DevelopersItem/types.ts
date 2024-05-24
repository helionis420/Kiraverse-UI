import type { FCProps } from '@/types';
import type { IconIdType } from '@/ui/Icon';

export type DevelopersItemProps = FCProps<{
  /**
      The title of component.
    */
  title: string;
  /**
        The icon of the component.
    */
  icon: IconIdType;
}>;
