import { FC, SVGProps } from 'react';

export const PlusIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      fill={props.color || 'var(--color-text-black)'}
      width={'15px'}
      viewBox="0 0 52 52"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M50,24H28V2a2,2,0,0,0-4,0V24H2a2,2,0,0,0,0,4H24V50a2,2,0,0,0,4,0V28H50a2,2,0,0,0,0-4Z" />
    </svg>
  );
};
