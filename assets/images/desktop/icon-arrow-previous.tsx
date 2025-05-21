import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconArrowPreviousProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconArrowPrevious = (props: IconArrowPreviousProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#F94F4F"
      transform="matrix(-1 0 0 1 40 0)"
    >
      <circle cx={20} cy={20} r={19.5} />
      <path strokeWidth={2} d="m17.5 15 5 5-5 5" />
    </g>
  </svg>
);
export default IconArrowPrevious;

