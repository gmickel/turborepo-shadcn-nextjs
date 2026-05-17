import ThemeSwitcherNoSSR from '@/app/components/ThemeSwitcherNoSSR';
import MountainIcon from '@/app/components/icons/MountainIcon';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
      <div className="flex items-center">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </div>
      <ThemeSwitcherNoSSR />
    </header>
  );
}
