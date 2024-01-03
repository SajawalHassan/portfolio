import { HeaderLinksItem } from "./header-links-item";

export const HeaderLinks = () => {
  return (
    <div className="hidden md:flex items-center gap-x-[31px]">
      <HeaderLinksItem link="#home" text="Home" isActive={true} />
      <HeaderLinksItem link="#about" text="About" isActive={false} />
      <HeaderLinksItem link="#projects" text="Projects" isActive={false} />
      <HeaderLinksItem link="#contact" text="Contact" isActive={false} />
    </div>
  );
};
