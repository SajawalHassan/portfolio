import { ProjectType } from "@/lib/types";

import Github from "@/assets/GitHub.png";
import LiveIcon from "@/assets/RFID-Signal.png";
import Image from "next/image";

export const ProjectDesktop = ({ project, imageUrl }: ProjectType) => {
  return (
    <div className="group relative h-max z-20">
      <Image
        src={imageUrl}
        alt={project.imageName}
        width={425}
        height={261}
        className="w-[425px] h-[261px] object-cover rounded-t-[5px] lg:rounded-[5px] group-hover:brightness-[0.2] transition-all duration-500"
      />

      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-0 py-10 px-5">
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
              <Image src={Github} alt="Github" width={29} height={29} className="brightness-50" />
            )}

            {project.liveLink ? (
              <>
                <a href={project.liveLink} target="_blank">
                  <Image src={LiveIcon} alt="Live" width={29} height={29} />
                </a>
              </>
            ) : (
              <Image src={LiveIcon} alt="Live" width={29} height={29} className="brightness-50" />
            )}
          </div>
        </div>
        <p className="mt-[9px] text-th-text text-[12px] font-semibold sm:text-[14px]">{project.description}</p>
      </div>
    </div>
  );
};
