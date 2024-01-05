"use client";

import { ProjectsDesktop } from "./desktop/projects-desktop";
import { SkillsBarDesktop } from "./desktop/skills-bar-desktop";
import { ProjectsMobile } from "./mobile/projects-mobile";
import { SkillsMobile } from "./mobile/skills-mobile";

export const WebDevSkillsProjects = () => {
  return (
    <div className="max-w-[1280px] w-full pt-[30px]" id="projects">
      <section className="th-lg:hidden max-w-[28rem] lg:max-w-full lg:flex mx-auto items-center gap-x-10">
        <div className="w-[30rem]">
          <h1 className="text-[24px] sm:text-[30px] text-center font-bold bg-gradient-to-r from-th-primary to-th-accent bg-clip-text text-transparent">
            My Skills in Web Dev
          </h1>

          <SkillsMobile />
        </div>
        <ProjectsMobile />
      </section>

      <section className="hidden th-lg:flex justify-between max-h-[40rem]">
        <SkillsBarDesktop heading="Skills in web dev" />
        <ProjectsDesktop />
      </section>
    </div>
  );
};
