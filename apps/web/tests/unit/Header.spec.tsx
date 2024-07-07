import Header from '@/app/components/Header';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('next/dynamic', () => ({
  __esModule: true,
  default: () => {
    return function DynamicComponent() {
      return <div data-testid="theme-switcher">ThemeSwitcher</div>;
    };
  },
}));

vi.mock('@/app/components/icons/MountainIcon', () => ({
  __esModule: true,
  default: () => <div data-testid="mountain-icon">MountainIcon</div>,
}));

describe('Header', () => {
  it('renders the header component', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the MountainIcon', () => {
    render(<Header />);
    expect(screen.getByTestId('mountain-icon')).toBeInTheDocument();
  });

  it('includes a visually hidden company name', () => {
    render(<Header />);
    expect(screen.getByText('Acme Inc')).toBeInTheDocument();
    expect(screen.getByText('Acme Inc')).toHaveClass('sr-only');
  });

  it('renders the ThemeSwitcher component', () => {
    render(<Header />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });

  it('has the correct layout classes', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass(
      'px-4 lg:px-6 h-14 flex items-center justify-between border-b',
    );
  });
});
