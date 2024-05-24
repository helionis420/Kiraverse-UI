import type { WithClassName } from '@/types';

export type InputProps = WithClassName<{
  /**
      Label of input
    */
  label?: string;
  /**
        If true, error state will be shown.
    */
  isError?: boolean;
  /**
        If truthy, error state will be shown with message
    */
  errorMessage?: string;
  /**
        If truthy, description will be shown.
    */
  description?: string;
  /**
        If truthy, field will be shown as required
    */
  required?: boolean;
}> &
  React.InputHTMLAttributes<HTMLInputElement>;
