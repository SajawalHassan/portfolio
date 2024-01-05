import WebDevSkillsData from "@/data/web-dev-skills-data.json";

import { webDevSkillsImgsMap } from "@/data/data_maps/project-maps";
import { SkillMobile } from "./skill-mobile";

export const SkillsMobile = () => {
  return (
    <div className="flex items-center justify-center gap-[12px] flex-wrap mt-2">
      {WebDevSkillsData.map((skill) => (
        <SkillMobile
          imageUrl={webDevSkillsImgsMap[skill.imgName as keyof typeof webDevSkillsImgsMap].src}
          text={skill.name}
          imageClassName={skill.imageClassName || ""}
        />
      ))}
    </div>
  );
};
