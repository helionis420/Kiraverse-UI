import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import NavLink from './NavLink';

describe('[UI]: NavLink', () => {
  it('should render NavLink component', () => {
    render(<NavLink href="/">Home</NavLink>);

    expect(screen.getByRole('link')).toBeDefined();
  });

  it('should be NavLink with active class', () => {
    render(<NavLink href="/">Label</NavLink>);

    const classes = screen.getByRole('link').getAttribute('class');

    const isActive = classes?.split(' ').some((el) => {
      return el.includes('active');
    });

    expect(isActive).toBe(true);
  });
});
