import { describe, it, expect, beforeAll, vi } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import CircleButton from './CircleButton';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      };
    }),
  });
});

describe('[UI]: CircleButton', () => {
  it('should render', () => {
    render(<CircleButton>Click me</CircleButton>);
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('should be clickable', () => {
    const handleClick = vi.fn();
    render(<CircleButton onClick={handleClick}>Test</CircleButton>);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be clickable with href', () => {
    render(<CircleButton href="https://www.test.com/">Click me</CircleButton>);

    const link = screen.getByRole('link', { name: 'ROLL YAW XYZ PITCH Click me' });

    expect(link).toBeDefined();
    expect(link.getAttribute('href')).toBe('https://www.test.com/');
  });
});
