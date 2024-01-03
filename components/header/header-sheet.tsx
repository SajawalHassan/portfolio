import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "@/components/ui/icons";
import { HeaderSheetItem } from "./header-sheet-item";

import YoutubeImg from "@/assets/YouTube.png";
import GithubImg from "@/assets/GitHub.png";
import TwitterImg from "@/assets/Twitter.png";
import Image from "next/image";

export const HeaderSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent className="bg-th-secondary border-none text-white flex flex-col justify-between">
        <SheetHeader className="mt-[0.7rem]">
          <SheetTitle className="text-[18px] font-bold text-th-text">Sajawal Hassan</SheetTitle>
        </SheetHeader>

        <section className="text-center flex flex-col items-center gap-y-2">
          <HeaderSheetItem link="#hero" text="Home" isActive={true} />
          <HeaderSheetItem link="#about" text="About" isActive={false} />
          <HeaderSheetItem link="#projects" text="Projects" isActive={false} />
          <HeaderSheetItem link="#contact" text="Contact" isActive={false} />
        </section>

        <section className="flex items-center justify-center gap-x-2 h-[2rem]">
          <Image src={YoutubeImg} alt="Youtube" width={32} height={32} className="cursor-pointer hover:w-[36px] hover:h-[36px] transition-all" />
          <Image src={GithubImg} alt="Github" width={32} height={32} className="cursor-pointer hover:w-[36px] hover:h-[36px] transition-all" />
          <Image src={TwitterImg} alt="Twitter" width={32} height={32} className="cursor-pointer hover:w-[36px] hover:h-[36px] transition-all" />
        </section>
      </SheetContent>
    </Sheet>
  );
};