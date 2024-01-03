import PlusIcon from "@/assets/Plus.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  text: string;
  className?: string;
}

export const HeroSkillsCards = ({ text, className }: Props) => {
  return (
    <div
      className={cn(
        "w-[250px] h-[86px] md:w-[194px] md:h-[65px] lg:w-[250px] lg:h-[86px] rounded-[8px] bg-th-secondary flex items-center gap-x-[13px] pl-[12px] pr-[30px]",
        className
      )}>
      <Image src={PlusIcon} alt="Plus" width={50} height={50} className="w-[50px] h-[50px] md:w-[36px] md:h-[36px] lg:w-[50px] lg:h-[50px]" />
      <h3 className="text-th-text font-bold text-[22px] md:text-[16px] lg:text-[22px]">{text}</h3>
    </div>
  );
};
