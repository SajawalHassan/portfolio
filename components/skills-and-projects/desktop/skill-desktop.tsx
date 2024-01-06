import { cn } from "@/lib/utils";

interface Props {
  text: string;
  theme: "default" | "alt";
}

export const SkillDesktop = ({ text, theme }: Props) => {
  return (
    <div className={cn("flex items-center gap-x-[2px]", theme === "alt" && "justify-end gap-x-2")}>
      <div className={cn("w-[20px] h-[6px] rounded-r-full bg-gradient-to-b from-th-primary to-th-text", theme === "default" ? "block" : "hidden")} />
      <p className="text-[16px] xl:text-[18px] bg-gradient-to-b from-th-primary to-th-text bg-clip-text text-transparent">{text}</p>
      <div className={cn("w-[20px] h-[6px] rounded-l-full bg-gradient-to-b from-th-primary to-th-text", theme === "alt" ? "block" : "hidden")} />
    </div>
  );
};
