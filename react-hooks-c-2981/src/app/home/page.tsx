'use client';

import Game1 from '../../components/Game1';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-screen pt-4">
      <h1 className="text-5xl font-bold mb-6 text-black">Selamat Datang!</h1>
      <Game1 />
    </div>
  );
}