interface Props {
  text: string;
}

export const SkillDesktop = ({ text }: Props) => {
  return (
    <div className="flex items-center gap-x-[2px]">
      <div className="w-[20px] h-[6px] rounded-r-full bg-gradient-to-b from-th-primary to-th-text" />
      <p className="text-[16px] xl:text-[18px] bg-gradient-to-b from-th-primary to-th-text bg-clip-text text-transparent">{text}</p>
    </div>
  );
};
