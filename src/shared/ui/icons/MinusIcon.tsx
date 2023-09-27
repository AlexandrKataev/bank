import { FC, SVGProps } from 'react';

export const MinusIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width={'20px'}
      fill={'var(--color-text-secondary)'}
      xmlns="http://www.w3.org/2000/svg"
      id="Filled"
      viewBox="0 0 24 24">
      <path d="M7,11a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" />
    </svg>
  );
};
