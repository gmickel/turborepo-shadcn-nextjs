import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import WelcomeCard from '@/app/components/WelcomeCard';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <WelcomeCard />
      </main>{' '}
      <Footer />
    </div>
  );
}
