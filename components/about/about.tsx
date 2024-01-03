import Image from "next/image";
import MeAtDinner from "@/assets/MeAtDinner.jpg";

import { AboutInfoItem } from "./about-info-item";

export const About = () => {
  return (
    <div className="max-w-[1280px] w-full pl-[17px] pr-[10px] pt-[20px] pb-[15px] md:flex gap-x-[28px]" id="about">
      <h1 className="text-[38px] md:text-[30px lg:text-[44px] font-bold bg-gradient-to-r from-th-primary to-th-accent bg-clip-text text-transparent md:hidden">
        Who am I
      </h1>
      <div className="overflow-hidden min-w-[340px] min-h-[310px] max-w-[506px] max-h-[684px] lg:max-w-full lg:max-h-full relative rounded-[24px]">
        <Image src={MeAtDinner} alt="Sajawal Hassan at dinner" className="object-cover rounded-[24px] lg:h-full lg:w-full" />
      </div>

      <section>
        <h1 className="text-[38px] md:text-[30px] lg:text-[44px] font-bold bg-gradient-to-r from-th-primary to-th-accent bg-clip-text text-transparent hidden md:block">
          Who am I
        </h1>

        <section className="text-[12px] th-md:text-[15px] font-semibold text-th-text space-y-2.5 mt-[12px]">
          <p>Hi, I'm Sajawal Hassan.</p>
          <p>
            I'm a teenage guy who loves working in the tech industry. I've built many projects in many different fields from Website Development to
            Game Development to Data Science.
          </p>
          <p>
            I have always had a passion for tech since I was young, starting my coding journey at the young age of 11. I started with Website
            Development and went on to learn many different fields. As of now I am extremely experienced in Website Development, and quite experienced
            with Data Science.
          </p>
          <p>
            I can give you the results you need, with having built multiple full stack projects from a Reddit Clone to a Discord Clone and to even a
            Google Clone, I know for a fact I can do the task required of me. I have also created the website for an event of one of the the biggest
            universities in my home town Pakistan, called CRSOM. Along with all this I've learnt quite a lot of Data Science as well, from creating an
            LSTM that generates sentences to a sentiment analysis LSTM. I've also created GANS capable of generating images.
          </p>
          <p>
            All in all, I am someone who will be very valuable to you and your team, with my skills, I am confident I can make your dreams into a
            digital reality.
          </p>
        </section>

        <section className="flex items-center gap-x-[60px] flex-wrap mt-[12px] gap-y-[18px]">
          <AboutInfoItem text="Name" subText="Sajawal Hassan" />
          <AboutInfoItem text="Email" subText="sajawalhassan.1feb@gmail.com" />
          <AboutInfoItem text="Employment" subText="Open" />
        </section>
      </section>
    </div>
  );
};
