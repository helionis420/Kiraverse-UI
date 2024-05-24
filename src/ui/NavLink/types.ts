import type { FCProps } from '@/types';

export type NavLinkProps = FCProps<{
  /**
        If true, the component is active.
    */
  active?: boolean;
  /**
        If true, the component is disabled.
    */
  disabled?: boolean;
  /**
        Redirect link
    */
  href: string;
  /**
        The text transform uppercase.
    */
  uppercase?: boolean;
  /**
        The responsive mobile size of the component.
    */
  responsive?: boolean;
  /**
        If true, the href exact match to url page.
    */
  exact?: boolean;
  /**
        If true, the scroll to element by custom function.
    */
  isScrollToCustom?: boolean;
}>;
