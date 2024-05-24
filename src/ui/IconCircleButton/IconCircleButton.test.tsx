import { vi, describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CircleButton from './IconCircleButton';

describe('[UI]: CircleButton', () => {
  it('should render CircleButton component', () => {
    render(<CircleButton icon="icon-arrow-right_24" />);

    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should be clickable if disabled=false', () => {
    const handleClick = vi.fn();
    render(<CircleButton icon="icon-arrow-right_24" onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be unclickable if disabled=true', () => {
    const handleClick = vi.fn();
    render(<CircleButton icon="icon-arrow-right_24" disabled onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
