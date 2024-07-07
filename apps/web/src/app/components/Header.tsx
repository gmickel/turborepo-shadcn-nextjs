import dynamic from 'next/dynamic';

const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
  ssr: false,
  loading: () => <div className="w-6 h-6" />,
});

import MountainIcon from '@/app/components/icons/MountainIcon';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
      <div className="flex items-center">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </div>
      <ThemeSwitcher />
    </header>
  );
}
