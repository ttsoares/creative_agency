import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface BgPatternWavyWhiteProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const BgPatternWavyWhite = (props: BgPatternWavyWhiteProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={134} height={60} {...props}>
    <path
      fill="#FFF"
      d="M98.43 0q16.427 0 25.999 14.593 9.57 14.592 9.571 39.977h-29.19q-.95-5.158-3.8-8.28-2.852-3.123-8.283-3.123-4.887 0-10.59 2.58a355 355 0 0 0-12.354 5.905q-6.653 3.325-14.73 5.837T37.335 60Q19.957 60 9.98 45.34 0 30.678 0 5.565h29.19q.95 5.022 4.276 8.144 3.327 3.123 8.893 3.123 4.615 0 10.182-2.512a438 438 0 0 0 12.49-5.905q6.924-3.393 15.274-5.905Q88.655 0 98.43 0"
    />
  </svg>
);
export default BgPatternWavyWhite;
