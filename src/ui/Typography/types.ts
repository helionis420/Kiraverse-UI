import type { FCProps, ObjValues } from '@/types';
import { TYPOGRAPHY_COMPONENTS, TYPOGRAPHY_VARIANTS } from './constants';

export type TypographyComponent = ObjValues<typeof TYPOGRAPHY_COMPONENTS>;
export type TypographyVariant = ObjValues<typeof TYPOGRAPHY_VARIANTS>;

export type TypographyProps = FCProps<{
  /**
        The component of the Typography.
    */
  component?: TypographyComponent;
  /**
        The variant to use.
    */
  variant?: TypographyVariant;
}>;
