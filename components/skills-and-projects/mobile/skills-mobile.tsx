import { SkillMobile } from "./skill-mobile";
import { Skill } from "@/lib/types";

interface Props {
  skillsData: Skill[];
  skillsImgsMap: any;
  theme?: "default" | "alt";
}

export const SkillsMobile = ({ skillsData, skillsImgsMap, theme = "default" }: Props) => {
  return (
    <div className="flex items-center justify-center gap-[12px] flex-wrap mt-2">
      {skillsData.map((skill) => {
        return (
          <SkillMobile
            imageUrl={skillsImgsMap[skill.imgName as keyof typeof skillsImgsMap].src}
            text={skill.name}
            imageClassName={skill.imageClassName || ""}
            theme={theme}
          />
        );
      })}
    </div>
  );
};
