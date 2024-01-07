import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ProjectType } from "@/lib/types";

import Github from "@/assets/svgs/GitHub.svg";
import LiveIcon from "@/assets/RFID-Signal.png";
import Image from "next/image";

type Props = ProjectType & {
  theme: "default" | "alt";
};

export const ProjectMobile = ({ project, imageUrl, theme }: Props) => {
  return (
    <CarouselItem className={cn("rounded-[5px] relative pb-2", theme === "default" ? "bg-th-secondary" : "bg-th-background/50")}>
      <Image src={imageUrl} alt={project.imageName} width={315} height={183} className="w-full h-[183px] object-cover rounded-t-[5px]" />
      <div className="px-[10px]">
        <div className="flex items-center justify-between">
          <h4 className="text-[24px] md:text-[26px] font-bold text-th-text mt-[5px]">{project.name}</h4>

          <div className="flex items-center gap-x-[9px]">
            {project.githubLink ? (
              <>
                <a href={project.githubLink} target="_blank">
                  <Image src={Github} alt="Github" width={29} height={29} className="md:h-[34px] md:w-[34px]" />
                </a>
              </>
            ) : (
              <Image src={Github} alt="Github" width={29} height={29} className="brightness-50 md:h-[34px] md:w-[34px]" />
            )}

            {project.liveLink ? (
              <>
                <a href={project.liveLink} target="_blank">
                  <Image src={LiveIcon} alt="Live" width={29} height={29} className="md:h-[34px] md:w-[34px]" />
                </a>
              </>
            ) : (
              <Image src={LiveIcon} alt="Live" width={29} height={29} className="brightness-50 md:h-[34px] md:w-[34px]" />
            )}
          </div>
        </div>

        <p className="mt-[9px] text-th-text text-[12px] sm:text-[14px] md:text-[16px] font-semibold">{project.description}</p>
      </div>
    </CarouselItem>
  );
};
