import Image from "next/image";
import SajawalHassan from "@/assets/SajawalHassan.png";

import { HeroSkillsCards } from "./hero-skills-cards";

export const Hero = () => {
  return (
    <main className="mt-[54px] flex flex-col items-center md:flex-row md:justify-between relative" id="hero">
      <section className="text-center md:text-left">
        <h3 className="text-th-text text-[26px] md:text-[20px] lg:text-[32px] font-bold">Hi I'm</h3>
        <h1 className="text-[38px] md:text-[30px] lg:text-[44px] font-bold bg-gradient-to-r from-th-primary to-th-accent bg-clip-text text-transparent">
          Sajawal Hassan
        </h1>
        <p className="font-normal text-th-text text-sm md:text-[11px] lg:text-[20px]">A Web Developer / Data Scientist</p>
      </section>

      <section className="mt-[49px]">
        <section className="relative md:pr-[10rem]">
          <Image
            src={SajawalHassan}
            alt="Sajawal Hassan"
            width={240}
            height={366}
            className="w-[240px] h-[366px] lg:w-[323px] lg:h-[458px] relative"
          />
          <div className="rounded-[149px] border-[10px] border-white w-[274px] h-[422px] lg:w-[369px] lg:h-[543px] absolute -top-7 -left-10 lg:-top-12 lg:-left-16" />
        </section>

        <section className="space-y-[15px] mt-[61px] md:absolute top-10 right-[0px]">
          <HeroSkillsCards text="Innovative Mindset" />
          <HeroSkillsCards text="Critical Thinker" />
          <HeroSkillsCards text="Strong Work Ethic" className="pr-0" />
        </section>
      </section>
    </main>
  );
};
