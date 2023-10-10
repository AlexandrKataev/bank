import { FC, SVGProps } from 'react';

export const ArrowUpIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width={'22px'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20L12 4M12 4L18 10M12 4L6 10"
        stroke={props.color || 'var(--color-text-black)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
