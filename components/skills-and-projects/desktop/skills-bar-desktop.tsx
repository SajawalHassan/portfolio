import Image from "next/image";
import WhiteStar from "@/assets/WhiteStar.png";

import { Skill } from "@/lib/types";
import { SkillDesktop } from "./skill-desktop";

interface Props {
  heading: string;
  skillsData: Skill[];
}

export const SkillsBarDesktop = ({ heading, skillsData }: Props) => {
  return (
    <div className="flex relative h-max">
      <div className="rounded-full bg-gradient-to-b from-th-text to-th-primary w-[13px]" />
      <div className="space-y-[16px] pb-5">
        <div className="flex items-center gap-x-[6px]">
          <div className="w-[20px] h-[6px] rounded-r-full bg-gradient-to-b from-th-primary to-th-text" />
          <h1 className="text-[20px] xl:text-[24px] font-bold bg-gradient-to-b from-th-primary to-th-text bg-clip-text text-transparent">
            {heading}
          </h1>
        </div>

        {skillsData.map((skill, i) => (
          <SkillDesktop text={skill.name} key={i} />
        ))}
      </div>

      <>
        <Image
          src={WhiteStar}
          alt="White Star"
          width={64}
          height={73}
          className="pulsing-image-sm -rotate-12 brightness-50 absolute -top-20 left-24 -z-10"
        />
      </>
    </div>
  );
};
