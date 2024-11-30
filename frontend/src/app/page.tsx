import Header from '@/components/header';
import GamesComponent from '@/components/games';

export default function Home() {
  return (
    <div className="w-full p-8 md:pt-20 flex flex-col gap-4 md:justify-center md:items-center ">
      <Header />
      <GamesComponent />
    </div>
  );
}
