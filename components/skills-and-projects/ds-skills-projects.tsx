"use client";

import { ProjectsDesktop } from "./desktop/projects-desktop";
import { SkillsBarDesktop } from "./desktop/skills-bar-desktop";
import { ProjectsMobile } from "./mobile/projects-mobile";
import { SkillsMobile } from "./mobile/skills-mobile";
import { dsProjectImgsMap, dsSkillsImgsMap } from "@/data/data_maps/project-maps";

import DsSkillsData from "@/data/ds-skills-data.json";
import DsProjectsData from "@/data/ds-projects-data.json";

export const DsSkillsProjects = () => {
  return (
    <div className="max-w-[1280px] w-full py-[30px] bg-th-secondary relative" id="projects">
      <section className="mx-auto th-lg:hidden max-w-[28rem] lg:max-w-full lg:flex lg:items-center lg:gap-x-10">
        <div className="max-w-[30rem]">
          <h1 className="text-[24px] sm:text-[30px] text-center font-bold bg-gradient-to-r from-th-primary to-th-accent bg-clip-text text-transparent">
            My Skills in DS
          </h1>

          <SkillsMobile skillsData={DsSkillsData} skillsImgsMap={dsSkillsImgsMap} theme="alt" />
        </div>
        <ProjectsMobile projectsData={DsProjectsData} projectsImgsMap={dsProjectImgsMap} theme="alt" />
      </section>

      <section className="hidden th-lg:flex justify-between max-h-[40rem]">
        <ProjectsDesktop projectsData={DsProjectsData} projectsImgsMap={dsProjectImgsMap} theme="alt" />
        <SkillsBarDesktop heading="Skills in DS" skillsData={DsSkillsData} theme="alt" />
      </section>
    </div>
  );
};
