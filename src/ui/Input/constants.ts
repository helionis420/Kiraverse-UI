import type { HTMLInputTypeAttribute } from 'react';

export const DEFAULT_INPUT_PLACEHOLDERS: Partial<
  Record<HTMLInputTypeAttribute, string | undefined>
> = {
  password: 'Enter password',
  text: 'Enter...',
};
