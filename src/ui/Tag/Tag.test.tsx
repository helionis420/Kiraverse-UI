import { describe, it, expect, vi } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import Tag from './Tag';

describe('[UI]: Tag', () => {
  it('should render', () => {
    render(<Tag>Tag</Tag>);

    const tagElement = screen.getByRole('button');

    expect(tagElement).toBeDefined();
  });

  it('should be clickable', () => {
    const handleClick = vi.fn();

    render(<Tag onClick={handleClick}>Click Me</Tag>);

    const tagElement = screen.getByRole('button');

    fireEvent.click(tagElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
