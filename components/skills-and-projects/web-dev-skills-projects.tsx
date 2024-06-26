"use client";

import { webDevSkillsImgsMap } from "@/data/data_maps/project-maps";
import { ProjectsDesktop } from "./desktop/projects-desktop";
import { SkillsBarDesktop } from "./desktop/skills-bar-desktop";
import { ProjectsMobile } from "./mobile/projects-mobile";
import { SkillsMobile } from "./mobile/skills-mobile";
import { webDevProjectImgsMap } from "@/data/data_maps/project-maps";

import WebDevSkillsData from "@/data/web-dev-skills-data.json";
import WebDevProjectsData from "@/data/web-dev-projects-data.json";

export const WebDevSkillsProjects = () => {
  return (
    <div className="max-w-[1280px] w-full pt-[30px]" id="projects">
      <section className="mx-auto th-lg:hidden max-w-[28rem] lg:max-w-full lg:flex lg:items-center lg:gap-x-10">
        <div className="max-w-[30rem]">
          <h1 className="text-[24px] sm:text-[30px] text-center font-bold bg-gradient-to-r from-th-primary to-th-accent bg-clip-text text-transparent">
            My Skills in Web Dev
          </h1>

          <SkillsMobile skillsData={WebDevSkillsData} skillsImgsMap={webDevSkillsImgsMap} />
        </div>
        <ProjectsMobile projectsData={WebDevProjectsData} projectsImgsMap={webDevProjectImgsMap} />
      </section>

      <section className="hidden th-lg:flex justify-between max-h-[40rem]">
        <SkillsBarDesktop heading="Skills in web dev" skillsData={WebDevSkillsData} />
        <ProjectsDesktop projectsData={WebDevProjectsData} projectsImgsMap={webDevProjectImgsMap} />
      </section>
    </div>
  );
};
