interface Props {
  text: string;
  subText: string;
}

export const AboutInfoItem = ({ text, subText }: Props) => {
  return (
    <div>
      <p className="text-th-accent font-bold text-[20px] th-md:text-[20px] lg:text-[26px]">{text}</p>
      <p className="text-th-accent font-bold text-[11px] th-md:text-[12px] lg:text-[17px]">{subText}</p>
    </div>
  );
};
