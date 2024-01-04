"use client";

import ReactJS from "@/assets/svgs/reactjs-icon.svg";
import ReactQuery from "@/assets/svgs/react-query-icon.svg";
import NextJS from "@/assets/svgs/nextjs-icon.svg";
import TailwindCSS from "@/assets/svgs/tailwindcss-icon.svg";
import Prisma from "@/assets/svgs/prisma-icon.svg";
import API from "@/assets/api-icon.png";
import SQL from "@/assets/svgs/sql-icon.svg";
import MongoDB from "@/assets/svgs/mongodb-icon.svg";
import HTML5 from "@/assets/svgs/html5-icon.svg";
import CSS3 from "@/assets/svgs/css3-icon.svg";
import Javascript from "@/assets/svgs/javascript-icon.svg";
import Typescript from "@/assets/svgs/typescript-icon.svg";
import Django from "@/assets/svgs/django-icon.svg";
import WebDevProjectsData from "@/data/web-dev-projects-data.json";
import RedditCloneImg from "@/assets/project-images/reddit-clone.png";
import DiscordCloneImg from "@/assets/project-images/discord-clone.png";
import GoogleCloneImg from "@/assets/project-images/google-clone.png";
import CRSOMImg from "@/assets/project-images/crsom.png";

import { Skill } from "./skill";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Project } from "./project";

const projectImgsMap = {
  reddit: RedditCloneImg,
  discord: DiscordCloneImg,
  google: GoogleCloneImg,
  crsom: CRSOMImg,
};

export const WebDevSkillsAndProjects = () => {
  return (
    <div className="max-w-[1280px] w-full">
      <h1 className="text-[24px] md:text-[30px] lg:text-[44px] text-center font-bold bg-gradient-to-r from-th-primary to-th-accent bg-clip-text text-transparent md:hidden">
        My Skills in Web Dev
      </h1>

      <div className="flex items-center justify-center gap-[12px] flex-wrap mt-2">
        <Skill imageUrl={ReactJS} text="ReactJS" />
        <Skill imageUrl={NextJS} text="NextJS" imageClassName="h-[14px] w-[14px]" />
        <Skill imageUrl={Prisma} text="PrismaORM" />
        <Skill imageUrl={TailwindCSS} text="TailwindCSS" />
        <Skill imageUrl={ReactQuery} text="React Query" />
        <Skill imageUrl={API.src} text="Rest APIs" />
        <Skill imageUrl={SQL} text="SQL" />
        <Skill imageUrl={MongoDB} text="MongoDB" />
        <Skill imageUrl={HTML5} text="HTML5" />
        <Skill imageUrl={CSS3} text="CSS3" />
        <Skill imageUrl={Javascript} text="Javascript" />
        <Skill imageUrl={Typescript} text="Typescript" />
        <Skill imageUrl={Django} text="Django" />
      </div>

      <div className="mt-[29px] relative">
        <p className="text-[12px] text-[#7d7d7d] uppercase font-bold">Projects</p>
        <Carousel>
          <CarouselContent>
            {WebDevProjectsData.map((project) => (
              <Project project={project} imageUrl={projectImgsMap[project.imageName as keyof typeof projectImgsMap].src} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute inset-y-0 my-auto left-5" />
          <CarouselNext className="absolute inset-y-0 my-auto right-5" />
        </Carousel>
      </div>
    </div>
  );
};
