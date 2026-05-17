'use client';

import dynamic from 'next/dynamic';

const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
  ssr: false,
  loading: () => <div className="h-6 w-6" />,
});

export default function ThemeSwitcherNoSSR() {
  return <ThemeSwitcher />;
}
