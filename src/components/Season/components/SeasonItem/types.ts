import type { FCProps } from '@/types';

export type SeasonItemProps = FCProps<{
  /**
      The title of component.
    */
  title: string;
  /**
        The description of component.
      */
  description: string;
  /**
        Additional classes of the content.
    */
  contentClassName?: string;
  /**
        The URL of the image to display.
      */
  imgSrc: string;
  /**
          The alternative text to display for image accessibility.
      */
  imgAlt?: string;
}>;
