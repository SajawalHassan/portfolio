import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  isActive?: boolean;
  link: string;
  text: string;
}

export const HeaderSheetItem = ({ isActive, link, text }: Props) => {
  return (
    <Link
      href={link}
      className={cn("text-[16px] font-bold text-th-text w-max py-0.5", isActive ? "border-b-2 border-th-text" : "hover:text-th-text/50 transition")}>
      {text}
    </Link>
  );
};
