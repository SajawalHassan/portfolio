import { About } from "@/components/about/about";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="max-w-[1015px] px-[27px] pt-[29px] w-full">
          <Header />
          <Hero />
        </div>
      </section>

      <section className="bg-th-secondary flex items-center justify-center mt-[25px] md:mt-[35px] lg:mt-[60px]">
        <About />
      </section>

      <div className="p-[10rem]" />
    </>
  );
}
