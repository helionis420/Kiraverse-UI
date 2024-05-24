import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NFTCard from './NFTCard';

describe('[components]: NFTCard', () => {
  it('should render NFTCard component', () => {
    render(
      <NFTCard
        data-testid="nft-card"
        imgSrc="/images/nft-test.webp"
        name="Kira Genesis"
        nick="@loidonsaf"
        href="https://www.test.com/"
      />,
    );

    expect(screen.getByTestId('nft-card')).toBeDefined();
  });

  it('should be attribute href in NFTCard', () => {
    render(
      <NFTCard
        imgSrc="/images/nft-test.webp"
        name="Kira Genesis"
        nick="@loidonsaf"
        href="https://www.test.com/"
      />,
    );

    const link = screen.getByRole('link', { name: /collect now/i });

    expect(link).toBeDefined();
    expect(link.getAttribute('href')).toBe('https://www.test.com/');
  });
});
