import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';
import { screen, render } from '@testing-library/react';
import useUserInfo from './hooks/useUserInfo';
import Header from './Header';

beforeAll(() => {
  vi.mock('./hooks/useUserInfo');
});

beforeEach(() => {
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

describe('[components]: Header', () => {
  it('should render correctly', () => {
    vi.mocked(useUserInfo).mockReturnValue({
      isLoggedIn: false,
      walletAddress: '',
    });

    render(<Header />);

    expect(screen.getByRole('banner')).toBeDefined();
  });

  it('should display button "Get Started" if user not logged in', () => {
    vi.mocked(useUserInfo).mockReturnValue({
      isLoggedIn: false,
      walletAddress: '',
    });

    render(<Header />);

    expect(screen.getByRole('button', { name: 'Get started' })).toBeDefined();
  });

  it('should display user avatar and "Connect Wallet" button if user is logged in but without a wallet', () => {
    vi.mocked(useUserInfo).mockReturnValue({
      isLoggedIn: true,
      walletAddress: '',
    });

    render(<Header />);

    expect(screen.getByRole('button', { name: 'Connect wallet' })).toBeDefined();
  });

  it('should display user avatar with wallet if user is logged in and has a wallet', () => {
    vi.mocked(useUserInfo).mockReturnValue({
      isLoggedIn: true,
      walletAddress: '0x1234567890',
    });

    render(<Header />);

    expect(screen.getByRole('button', { name: 'shimmer 0x123...7890' })).toBeDefined();
    expect(screen.getByRole('img', { name: 'shimmer' })).toBeDefined();
  });
});
