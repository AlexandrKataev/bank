import { FC, SVGProps } from 'react';

export const ArrowDownIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width={'22px'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4L12 20M12 20L18 14M12 20L6 14"
        stroke={props.color || 'var(--color-text-black)'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};