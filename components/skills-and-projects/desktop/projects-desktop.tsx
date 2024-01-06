import WebDevProjectsData from "@/data/web-dev-projects-data.json";
import Image from "next/image";
import WhiteStar from "@/assets/WhiteStar.png";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectDesktop } from "./project-desktop";
import { webDevProjectImgsMap } from "@/data/data_maps/project-maps";
import { RawProjectType } from "@/lib/types";

interface Props {
  projectsData: RawProjectType[];
  projectsImgsMap: any;
}

export const ProjectsDesktop = ({ projectsData, projectsImgsMap }: Props) => {
  return (
    <div className="relative">
      <Carousel orientation="vertical" className="relative lg:hidden">
        <CarouselContent className="max-h-[36rem]">
          {projectsData.map((project) => (
            <CarouselItem>
              <ProjectDesktop project={project} imageUrl={projectsImgsMap[project.imageName as keyof typeof projectsImgsMap].src} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute bottom-5 inset-x-0 mx-auto" />
        <CarouselPrevious className="absolute top-5 inset-x-0 mx-auto" />
      </Carousel>

      <section className="hidden lg:grid grid-cols-2 gap-x-[34px] gap-y-[34px]">
        {projectsData.map((project, i) => (
          <ProjectDesktop project={project} imageUrl={projectsImgsMap[project.imageName as keyof typeof projectsImgsMap].src} key={i} />
        ))}
      </section>

      <>
        <Image
          src={WhiteStar}
          alt="White Star"
          width={64}
          height={73}
          className="pulsing-image-md rotate-12 brightness-50 absolute -top-10 -right-10 -z-10"
        />
      </>
    </div>
  );
};
