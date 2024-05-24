import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Link from './Link';

describe('[UI]: Link', () => {
  it('should render Link component', () => {
    render(<Link>Label</Link>);

    expect(screen.getByRole('link')).toBeDefined();
  });

  it('should be attribute href', () => {
    render(<Link href="https://www.test.com/">Label</Link>);

    const link = screen.getByRole('link', { name: 'Label' });

    expect(link).toBeDefined();
    expect(link.getAttribute('href')).toBe('https://www.test.com/');
  });
});
