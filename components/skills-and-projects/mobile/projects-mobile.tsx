import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectMobile } from "./project-mobile";
import { RawProjectType } from "@/lib/types";

interface Props {
  projectsData: RawProjectType[];
  projectsImgsMap: any;
  theme?: "default" | "alt";
}

export const ProjectsMobile = ({ projectsData, projectsImgsMap, theme = "default" }: Props) => {
  return (
    <div className="mt-[29px] relative max-w-[30rem] mx-auto">
      <p className="text-[12px] text-[#7d7d7d] uppercase font-bold">Projects</p>
      <Carousel>
        <CarouselContent>
          {projectsData.map((project, i) => (
            <ProjectMobile
              project={project}
              imageUrl={projectsImgsMap[project.imageName as keyof typeof projectsImgsMap].src}
              theme={theme}
              key={i}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute inset-y-0 my-auto left-5" />
        <CarouselNext className="absolute inset-y-0 my-auto right-5" />
      </Carousel>
    </div>
  );
};
