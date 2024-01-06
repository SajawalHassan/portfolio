import Image from "next/image";
import WhiteStar from "@/assets/WhiteStar.png";

import { Skill } from "@/lib/types";
import { SkillDesktop } from "./skill-desktop";
import { cn } from "@/lib/utils";

interface Props {
  heading: string;
  skillsData: Skill[];
  theme?: "default" | "alt";
}

export const SkillsBarDesktop = ({ heading, skillsData, theme = "default" }: Props) => {
  return (
    <div className="flex relative h-max">
      <div className={cn("rounded-full bg-gradient-to-b from-th-text to-th-primary w-[13px]", theme === "alt" ? "hidden" : "block")} />
      <div className="space-y-[16px] pb-5">
        <div className="flex items-center gap-x-[6px]">
          <div
            className={cn("w-[20px] h-[6px] rounded-r-full bg-gradient-to-b from-th-primary to-th-text", theme === "default" ? "block" : "hidden")}
          />
          <h1 className="text-[20px] xl:text-[24px] font-bold bg-gradient-to-b from-th-primary to-th-text bg-clip-text text-transparent">
            {heading}
          </h1>
          <div className={cn("w-[20px] h-[6px] rounded-r-full bg-gradient-to-b from-th-primary to-th-text", theme === "alt" ? "block" : "hidden")} />
        </div>

        {skillsData.map((skill, i) => (
          <SkillDesktop text={skill.name} key={i} theme={theme} />
        ))}
      </div>
      <div className={cn("rounded-full bg-gradient-to-b from-th-text to-th-primary w-[13px]", theme === "default" ? "hidden" : "block")} />

      <>
        {theme === "default" ? (
          <Image
            src={WhiteStar}
            alt="White Star"
            width={64}
            height={73}
            className="pulsing-image-sm -rotate-12 brightness-50 absolute -top-20 left-24 z-10"
          />
        ) : (
          <Image
            src={WhiteStar}
            alt="White Star"
            width={64}
            height={73}
            className="pulsing-image-sm -rotate-12 brightness-50 absolute -bottom-32 left-10 z-10"
          />
        )}
      </>
    </div>
  );
};
