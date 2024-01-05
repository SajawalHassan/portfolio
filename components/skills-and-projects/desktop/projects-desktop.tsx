import WebDevProjectsData from "@/data/web-dev-projects-data.json";
import Image from "next/image";
import WhiteStar from "@/assets/WhiteStar.png";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectDesktop } from "./project-desktop";
import { webDevProjectImgsMap } from "@/data/data_maps/project-maps";

export const ProjectsDesktop = () => {
  return (
    <div className="relative">
      <Carousel orientation="vertical" className="relative lg:hidden">
        <CarouselContent className="max-h-[36rem]">
          {WebDevProjectsData.map((project) => (
            <CarouselItem>
              <ProjectDesktop project={project} imageUrl={webDevProjectImgsMap[project.imageName as keyof typeof webDevProjectImgsMap].src} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute bottom-5 inset-x-0 mx-auto" />
        <CarouselPrevious className="absolute top-5 inset-x-0 mx-auto" />
      </Carousel>

      <section className="hidden lg:grid grid-cols-2 gap-x-[34px] gap-y-[34px]">
        {WebDevProjectsData.map((project) => (
          <ProjectDesktop project={project} imageUrl={webDevProjectImgsMap[project.imageName as keyof typeof webDevProjectImgsMap].src} />
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
