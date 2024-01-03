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

export const WaterArrowUp = ({ className, onClick }: Props) => {
  return (
    <div className={className} onClick={onClick}>
      <svg width="58" height="51" viewBox="0 0 77 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_22_46)">
          <path
            d="M21.9894 54.3541L23.9561 54.6358C25.7626 54.8947 27.6877 54.4439 29.3081 53.3829C30.9284 52.3219 32.1113 50.7376 32.5963 48.9782L32.7954 48.2563C33.2804 46.4969 34.4632 44.9126 36.0836 43.8516C37.704 42.7905 39.629 42.3399 41.4356 42.5987L42.1768 42.7049C43.9835 42.9637 45.9084 42.513 47.5289 41.452C49.1493 40.3909 50.332 38.8067 50.8171 37.0472L51.0161 36.3254C51.5012 34.566 52.6839 32.9817 54.3044 31.9207C55.9248 30.8596 57.8498 30.409 59.6564 30.6678L61.623 30.9495M27.8267 63.2687L29.7933 63.5504C31.5999 63.8093 33.525 63.3585 35.1453 62.2975C36.7657 61.2365 37.9486 59.6522 38.4335 57.8928L38.6326 57.1709C39.1176 55.4116 40.3005 53.8272 41.9208 52.7662C43.5413 51.7052 45.4662 51.2545 47.2729 51.5133L48.0141 51.6195C49.8207 51.8783 51.7457 51.4277 53.3661 50.3666C54.9866 49.3055 56.1693 47.7213 56.6544 45.9619L56.8534 45.24C57.3385 43.4806 58.5212 41.8963 60.1416 40.8353C61.7621 39.7742 63.687 39.3236 65.4937 39.5824L67.4603 39.8641M37.1364 35.5201L27.7968 21.2567M27.7968 21.2567L25.2255 30.5825M27.7968 21.2567L37.3727 22.6285"
            stroke="#9D9D9D"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_46">
            <rect width="58.0785" height="51.1474" fill="white" transform="translate(0 31.8158) rotate(-33.2167)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
