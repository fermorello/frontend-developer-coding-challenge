import Header from '@/components/header';
import GamesComponent from '@/components/games';

export default function Home() {
  return (
    <div className="bg-[url('/images/mobile-bg.png')] md:bg-[url('/images/desktop-bg.png')] bg-no-repeat bg-contain">
      <div className="w-full p-8 md:pt-20 flex flex-col gap-4 md:justify-center md:items-center">
        <Header />
        <GamesComponent />
      </div>
    </div>
  );
}
