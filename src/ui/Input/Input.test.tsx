import { useState } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { InputProps } from './types';
import Input from './Input';

type RegularInputWrapperProps = Partial<InputProps>;
type WithErrorInputWrapperProps = Partial<InputProps>;

const RegularInputWrapper: React.FC<RegularInputWrapperProps> = (props) => {
  const [value, setValue] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input value={value} onChange={changeHandler} {...props} />;
};

const WithErrorInputWrapper: React.FC<WithErrorInputWrapperProps> = (props) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && e.target.value.length < 3) {
      setErrorMessage('error');
    }
    setValue(e.target.value);
  };

  return <Input value={value} onChange={changeHandler} errorMessage={errorMessage} {...props} />;
};

describe('[UI]: Input', () => {
  it('should render Input component', () => {
    render(<RegularInputWrapper />);

    expect(screen.getByRole('textbox')).toBeDefined();
  });

  it('should render Input and change value on type if not disabled', () => {
    render(<RegularInputWrapper />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');
  });

  it('should display error message if input value is less than 3 characters', async () => {
    render(<WithErrorInputWrapper />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input.value).toBe('');

    await fireEvent.change(input, { target: { value: 'te' } });

    expect(input.value).toBe('te');
    expect(screen.getByText('error')).toBeDefined();
  });

  it('should render error message even if description prop passed', async () => {
    render(<WithErrorInputWrapper description="description" />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input.value).toBe('');
    expect(screen.getByText('description')).toBeDefined();

    await fireEvent.change(input, { target: { value: 'te' } });

    expect(input.value).toBe('te');
    expect(screen.queryByText('description')).toBeNull();
    expect(screen.getByText('error')).toBeDefined();
  });

  it('should render password input with hidden value by default', () => {
    render(<RegularInputWrapper type="password" />);

    const input = screen.getByPlaceholderText('Enter password') as HTMLInputElement;

    expect(input.value).toBe('');
    expect(input.type).toBe('password');
  });

  it('should render password input with visible value on show-password button click', () => {
    render(<RegularInputWrapper type="password" />);

    const input = screen.getByPlaceholderText('Enter password') as HTMLInputElement;
    const showPasswordButton = screen.getByRole('button');

    expect(input.value).toBe('');
    expect(input.type).toBe('password');

    fireEvent.click(showPasswordButton);

    expect(input.type).toBe('text');
  });

  // TODO[test]: add case for changing the icon
});
