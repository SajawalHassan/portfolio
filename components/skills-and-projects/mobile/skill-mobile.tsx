import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  imageUrl: string;
  imageClassName?: string;
  text: string;
}

export const SkillMobile = ({ imageUrl, text, imageClassName }: Props) => {
  return (
    <div className="rounded-[2px] bg-th-secondary flex items-center gap-x-[4px] text-white px-[6px] py-[4px]">
      <Image src={imageUrl} alt={text} width={12} height={12} className={cn("md:h-[14px] md:w-[14px]", imageClassName || "")} />
      <p className="text-[12px] sm:text-[14px] md:text-[16px] font-bold">{text}</p>
    </div>
  );
};
