import { FC, SVGProps } from 'react';

export const MasterCardIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} width={'30px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 88.78">
      <title>Mastercard logo</title>
      <polygon points="52.16 79.29 90.83 79.29 90.83 9.49 52.16 9.49 52.16 79.29" fill="#ff5f00" />
      <path
        d="M495.12,512A44.38,44.38,0,0,1,512,477.1a44.39,44.39,0,1,0,0,69.8A44.39,44.39,0,0,1,495.12,512"
        transform="translate(-440.5 -467.61)"
        fill="#eb001b"
      />
      <path
        d="M583.5,512A44.15,44.15,0,0,1,512,546.9a44.52,44.52,0,0,0,0-69.8A44.15,44.15,0,0,1,583.5,512Z"
        transform="translate(-440.5 -467.61)"
        fill="#f79e1b"
      />
    </svg>
  );
};
