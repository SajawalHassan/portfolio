import { CarouselItem } from "@/components/ui/carousel";

import Github from "@/assets/GitHub.png";
import LiveIcon from "@/assets/RFID-Signal.png";
import Image from "next/image";

interface Props {
  project: {
    imageName: string;
    name: string;
    description: string;
    githubLink: string | null;
    liveLink: string | null;
  };
  imageUrl: string;
}

export const Project = ({ project, imageUrl }: Props) => {
  return (
    <CarouselItem className="bg-th-secondary rounded-[5px] relative pb-2">
      <Image src={imageUrl} alt={project.imageName} width={315} height={183} className="w-full h-[183px] object-cover" />
      <div className="px-[10px]">
        <div className="flex items-center justify-between">
          <h4 className="text-[24px] font-bold text-th-text mt-[5px]">{project.name}</h4>

          <div className="flex items-center gap-x-[9px]">
            {project.githubLink ? (
              <>
                <a href={project.githubLink} target="_blank">
                  <Image src={Github} alt="Github" width={29} height={29} />
                </a>
              </>
            ) : (
              <Image src={Github} alt="Github" width={29} height={29} className="" />
            )}

            {project.liveLink ? (
              <>
                <a href={project.liveLink} target="_blank">
                  <Image src={LiveIcon} alt="Live" width={29} height={29} />
                </a>
              </>
            ) : (
              <Image src={LiveIcon} alt="Live" width={29} height={29} className="" />
            )}
          </div>
        </div>

        <p className="mt-[9px] text-th-text text-[12px] font-semibold">{project.description}</p>
      </div>
    </CarouselItem>
  );
};
