import Board from "@/components/board";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="h-screen w-full min-h-screen bg-[#1D2125] text-neutral-50 flex items-center justify-center flex-col">
      <Intro />
      <Board />
    </main>
  );
}
