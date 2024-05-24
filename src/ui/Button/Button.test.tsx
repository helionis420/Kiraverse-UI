import { vi, describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('[UI]: Button', () => {
  it('should render Button component', () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should be clickable if disabled=false', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be unclickable if disabled=true', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>,
    );

    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should be clickable if disabled=false with href', () => {
    render(<Button href="https://www.test.com/">Click Me</Button>);

    const link = screen.getByRole('link', { name: 'Click Me' });

    expect(link).toBeDefined();
    expect(link.getAttribute('href')).toBe('https://www.test.com/');
  });
});
