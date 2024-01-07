import Image from "next/image";
import WhiteStar from "@/assets/WhiteStar.png";
import Cloud from "@/assets/Cloud.png";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectDesktop } from "./project-desktop";
import { RawProjectType } from "@/lib/types";

interface Props {
  projectsData: RawProjectType[];
  projectsImgsMap: any;
  theme?: "default" | "alt";
}

export const ProjectsDesktop = ({ projectsData, projectsImgsMap, theme = "default" }: Props) => {
  return (
    <div className="relative">
      <Carousel orientation="vertical" className="relative lg:hidden">
        <CarouselContent className="max-h-[36rem]">
          {projectsData.map((project, i) => (
            <CarouselItem key={i}>
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
        {theme === "default" ? (
          <Image
            src={WhiteStar}
            alt="White Star"
            width={64}
            height={73}
            className="pulsing-image-md rotate-12 brightness-50 absolute -top-10 -right-10"
          />
        ) : (
          <>
            <Image src={Cloud} alt="Cloud" width={46} height={48} className="bouncing-image brightness-50 absolute -top-4 -right-8" />
            <div className="absolute top-[15rem] -left-8 rotate-180">
              <Image src={Cloud} alt="Cloud" width={46} height={48} className="bouncing-image brightness-50" />
            </div>
          </>
        )}
      </>
    </div>
  );
};
