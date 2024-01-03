import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface Props {
  link: string;
  text: string;
  setSheetIsActive: Dispatch<SetStateAction<boolean>>;
}

export const HeaderSheetItem = ({ link, text, setSheetIsActive }: Props) => {
  return (
    <Link
      href={link}
      className={cn("text-[16px] font-bold text-th-text w-max py-0.5 hover:text-th-text/50 transition")}
      onClick={() => setSheetIsActive(false)}>
      {text}
    </Link>
  );
};
