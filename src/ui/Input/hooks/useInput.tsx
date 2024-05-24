import { useCallback, useId, useMemo } from 'react';
import clsx from 'clsx';
import type { InputProps } from '../types';
import { useToggle } from '@/hooks/useToggle';
import { DEFAULT_INPUT_PLACEHOLDERS } from '../constants';
import Typography from '@/ui/Typography';
import Icon from '@/ui/Icon';
import s from '../Input.module.css';

export const useInput = ({
  className,
  id,
  label,
  type = 'text',
  isError,
  errorMessage,
  description,
  placeholder,
  disabled,
  required,
  ...rest
}: InputProps) => {
  const generatedInputId = useId();
  const [isPasswordVisible, toggleIsPasswordVisible] = useToggle();

  const autoComplete = type === 'password' ? 'new-password' : 'off';

  const memoizedPlaceholder = useMemo(() => {
    if (placeholder) {
      return placeholder;
    }

    return type in DEFAULT_INPUT_PLACEHOLDERS ? DEFAULT_INPUT_PLACEHOLDERS[type] : placeholder;
  }, [placeholder, type]);

  const memoizedInputType = useMemo(() => {
    if (type === 'password') {
      return isPasswordVisible ? 'text' : 'password';
    }

    return type;
  }, [isPasswordVisible, type]);

  const passwordIconClickHandler = useCallback(() => {
    toggleIsPasswordVisible();
  }, [toggleIsPasswordVisible]);

  const rightAddonJSX = useMemo(() => {
    switch (true) {
      case type === 'password': {
        return (
          <div className={s['addon-wrap']}>
            <button
              className={clsx(s['password-cta'], 'focus-primary')}
              type="button"
              data-role="password-button"
              onClick={passwordIconClickHandler}
            >
              <Icon
                className={clsx(s.icon, s['password-icon'])}
                id={isPasswordVisible ? 'icon-eye-closed_24' : 'icon-eye-open_24'}
                data-opened={isPasswordVisible}
              />
            </button>
          </div>
        );
      }
      default: {
        return null;
      }
    }
  }, [isPasswordVisible, passwordIconClickHandler, type]);

  const descriptionJSX = useMemo(() => {
    if (!description && !errorMessage) {
      return null;
    }

    const descriptionContent = errorMessage || description;

    return (
      <Typography className={s.description} variant="body-small-mono" component="span">
        {descriptionContent}
      </Typography>
    );
  }, [description, errorMessage]);

  const memoizedClasses = useMemo(() => {
    return {
      wrap: clsx(s.wrap, className, {
        [s.error]: isError || !!errorMessage,
        [s.disabled]: disabled,
      }),
      inner: clsx(s.inner, s[type], {
        [s['with-icon-right']]: !!rightAddonJSX,
      }),
      label: label
        ? clsx(s.label, {
            [s.required]: required,
          })
        : undefined,
      input: s.input,
    };
  }, [className, disabled, errorMessage, isError, label, required, rightAddonJSX, type]);

  return {
    id: id ?? generatedInputId,
    placeholder: memoizedPlaceholder,
    type: memoizedInputType,
    label,
    classes: memoizedClasses,
    rightAddonJSX,
    descriptionJSX,
    disabled,
    autoComplete,
    ...rest,
  };
};
