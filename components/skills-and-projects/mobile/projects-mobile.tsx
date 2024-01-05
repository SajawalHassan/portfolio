import WebDevProjectsData from "@/data/web-dev-projects-data.json";

import { webDevProjectImgsMap } from "@/data/data_maps/project-maps";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectMobile } from "./project-mobile";

export const ProjectsMobile = () => {
  return (
    <div className="mt-[29px] relative max-w-[30rem]">
      <p className="text-[12px] text-[#7d7d7d] uppercase font-bold">Projects</p>
      <Carousel>
        <CarouselContent>
          {WebDevProjectsData.map((project) => (
            <ProjectMobile project={project} imageUrl={webDevProjectImgsMap[project.imageName as keyof typeof webDevProjectImgsMap].src} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute inset-y-0 my-auto left-5" />
        <CarouselNext className="absolute inset-y-0 my-auto right-5" />
      </Carousel>
    </div>
  );
};
