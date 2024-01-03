import Image from "next/image";
import SajawalHassan from "@/assets/SajawalHassan.png";
import WhiteStar from "@/assets/WhiteStar.png";
import Cloud from "@/assets/Cloud.png";
import Rain from "@/assets/Rain.png";
import Arrow from "@/assets/RoundedArrow.png";
import Link from "next/link";

import { HeroSkillsCards } from "./hero-skills-cards";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <>
      <main className="mt-[54px] flex flex-col items-center md:flex-row md:justify-between relative" id="hero">
        <section className="text-center md:text-left relative">
          <h3 className="text-th-text text-[26px] md:text-[20px] lg:text-[32px] font-bold">Hi I'm</h3>
          <h1 className="text-[38px] md:text-[30px] lg:text-[44px] font-bold bg-gradient-to-r from-th-primary to-th-accent bg-clip-text text-transparent">
            Sajawal Hassan
          </h1>
          <p className="font-normal text-th-text text-sm md:text-[11px] lg:text-[20px]">A Web Developer / Data Scientist</p>

          <div className="flex items-center justify-center md:justify-start gap-x-[8px] mt-[14px]">
            <Link href="#contact">
              <Button className="w-[91px] h-[33px] lg:w-[126px] lg:h-[47px] rounded-[8px] bg-th-primary font-bold text-[11px] lg:text-[16px] hover:bg-th-primary/70">
                Contact me!
              </Button>
            </Link>

            <Link href="#projects">
              <Button className="w-[91px] h-[33px] lg:w-[126px] lg:h-[47px] rounded-[8px] bg-th-secondary text-th-text text-[11px] lg:text-[16px] hover:bg-th-secondary/70">
                My Projects
              </Button>
            </Link>
          </div>

          <div>
            <Image
              src={Rain}
              alt="Rain"
              width={160}
              height={112}
              className="absolute -top-[8rem] right-0 brightness-50 rotate-12 bouncing-image hidden md:block"
            />
            <Image
              src={WhiteStar}
              alt="White Star"
              width={20}
              height={20}
              className="absolute -bottom-[15rem] pulsing-image-md brightness-50 hidden md:block"
            />
            <Image
              src={Arrow}
              alt="Arrow"
              width={122}
              height={60}
              className="absolute -bottom-[3.5rem] lg:-bottom-[6rem] -left-[6rem] brightness-50 hidden md:block bouncing-image"
            />
          </div>
        </section>

        <section className="mt-[49px]">
          <div className="relative md:pr-[10rem]">
            <Image
              src={SajawalHassan}
              alt="Sajawal Hassan"
              width={240}
              height={366}
              className="w-[240px] h-[366px] lg:w-[323px] lg:h-[458px] relative"
            />
            <div className="rounded-[149px] border-[10px] border-white w-[274px] h-[422px] lg:w-[369px] lg:h-[543px] absolute -top-7 -left-10 lg:-top-12 lg:-left-16" />

            <div>
              <Image src={Cloud} alt="Cloud" width={70} height={70} className="absolute -top-12 right-[8rem] hidden lg:block bouncing-image" />
              <div className="rotatation-175 absolute -bottom-12 -left-[8rem]">
                <Image src={Cloud} alt="Cloud" width={70} height={70} className="hidden lg:block bouncing-image" />
              </div>
              <Image src={WhiteStar} alt="White Star" width={20} height={20} className="absolute -top-8 -right-3 pulsing-image-md brightness-50" />
              <Image
                src={WhiteStar}
                alt="White Star"
                width={10}
                height={10}
                className="absolute top-24 -left-14 pulsing-image-sm brightness-50 lg:hidden"
              />
              <Image
                src={WhiteStar}
                alt="White Star"
                width={15}
                height={15}
                className="absolute bottom-0 -left-10 lg:-left-14 pulsing-image-sm lg:pulsing-image-md brightness-50 md:hidden"
              />
              <Image
                src={WhiteStar}
                alt="White Star"
                width={30}
                height={30}
                className="absolute -bottom-[4rem] right-0 pulsing-image-md brightness-7"
              />
            </div>
          </div>

          <div className="space-y-[15px] mt-[61px] md:absolute top-10 right-[0px]">
            <HeroSkillsCards text="Innovative Mindset" />
            <HeroSkillsCards text="Critical Thinker" />
            <HeroSkillsCards text="Strong Work Ethic" className="pr-0" />
          </div>
        </section>
      </main>
      <div className="py-[5rem]" />
    </>
  );
};
