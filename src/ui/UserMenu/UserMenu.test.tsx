import { describe, it, expect, vi, beforeAll } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import UserMenu from './UserMenu';

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

describe('[UI]: UserMenu', () => {
  it('should render without crashing', () => {
    render(
      <UserMenu
        userInfo={{
          fallbackName: 'John Doe',
          url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
          fallbackIcon: 'icon-smile_48',
          nickName: '@alexsmith',
        }}
      />,
    );

    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should render null if user info is not provided', () => {
    render(<UserMenu />);

    expect(screen.queryByRole('button')).toBeNull();
  });

  it('should display user image if provided', () => {
    render(
      <UserMenu
        userInfo={{
          fallbackName: 'John Doe',
          url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
          fallbackIcon: 'icon-smile_48',
          nickName: '@alexsmith',
        }}
      />,
    );

    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByRole('img')).toBeDefined();
  });

  it('should display icon if user image not provided or failed to load', () => {
    render(
      <UserMenu
        userInfo={{
          url: '',
          fallbackName: 'John Doe',
          fallbackIcon: 'icon-smile_48',
          nickName: '@alexsmith',
        }}
      />,
    );

    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('should open menu on click', async () => {
    render(
      <UserMenu
        userInfo={{
          fallbackName: 'John Doe',
          url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
          fallbackIcon: 'icon-smile_48',
          nickName: '@alexsmith',
        }}
      />,
    );

    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.queryByRole('menu')).toBeNull();

    await fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('dialog')).toBeDefined();
  });

  it('should close menu on click on button when menu is open', async () => {
    render(
      <UserMenu
        userInfo={{
          fallbackName: 'John Doe',
          url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
          fallbackIcon: 'icon-smile_48',
          nickName: '@alexsmith',
        }}
      />,
    );

    const menuButton = screen.getByRole('button');

    expect(menuButton).toBeDefined();
    expect(screen.queryByRole('menu')).toBeNull();

    await fireEvent.click(menuButton);

    expect(screen.getByRole('dialog')).toBeDefined();

    await fireEvent.click(menuButton);

    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
