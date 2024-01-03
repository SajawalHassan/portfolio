import { HeaderLinksItem } from "./header-links-item";

export const HeaderLinks = () => {
  return (
    <div className="hidden md:flex items-center gap-x-[31px]">
      <HeaderLinksItem link="#hero" text="Home" />
      <HeaderLinksItem link="#about" text="About" />
      <HeaderLinksItem link="#projects" text="Projects" />
      <HeaderLinksItem link="#contact" text="Contact" />
    </div>
  );
};
