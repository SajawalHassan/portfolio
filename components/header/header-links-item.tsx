import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  link: string;
  text: string;
}

export const HeaderLinksItem = ({ link, text }: Props) => {
  return (
    <Link href={link} className={cn("text-[16px] font-bold text-th-text w-max hover:text-th-text/50 transition")}>
      {text}
    </Link>
  );
};
