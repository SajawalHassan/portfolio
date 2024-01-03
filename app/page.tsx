import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-[1015px] px-[27px] pt-[29px] w-full">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}
