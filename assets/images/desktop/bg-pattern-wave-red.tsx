import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface BgPatternWaveRedProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const BgPatternWaveRed = (props: BgPatternWaveRedProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={135} height={61} {...props}
  >
    <path
      fill="#F94F4F"
      d="M98.882 60.408q16.427 0 25.999-14.593 9.57-14.592 9.571-39.977h-29.19q-.95 5.159-3.8 8.28-2.852 3.123-8.283 3.123-4.887 0-10.59-2.58a355 355 0 0 1-12.354-5.905q-6.653-3.325-14.73-5.836T37.787.408q-17.378 0-27.356 14.66Q.451 29.73.452 54.843h29.19q.95-5.022 4.276-8.144 3.327-3.123 8.893-3.123 4.615 0 10.182 2.512a438 438 0 0 1 12.49 5.905q6.924 3.393 15.274 5.905 8.35 2.511 18.125 2.511z"
    />
  </svg>
);
export default BgPatternWaveRed;
