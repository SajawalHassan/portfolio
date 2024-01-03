import { MouseEvent } from "react";

interface Props {
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export const MenuIcon = ({ className, onClick }: Props) => {
  return (
    <div className={className} onClick={onClick}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_14_23)">
          <path d="M4 24H28V21.3333H4V24ZM4 17.3333H28V14.6667H4V17.3333ZM4 8V10.6667H28V8H4Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_14_23">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
