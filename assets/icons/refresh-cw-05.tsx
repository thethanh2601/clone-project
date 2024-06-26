import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RefreshCw05 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.0443 10.7441C16.8128 12.9191 15.5805 14.9572 13.5413 16.1345C10.1534 18.0905 5.82132 16.9297 3.86531 13.5418L3.65698 13.1809M2.95527 9.25578C3.18677 7.08086 4.4191 5.04276 6.45825 3.86545C9.84616 1.90944 14.1783 3.07023 16.1343 6.45813L16.3426 6.81898M2.91113 15.055L3.52118 12.7783L5.79788 13.3883M14.2022 6.61161L16.4789 7.22165L17.0889 4.94495"
      stroke={props.color || '#525252'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default RefreshCw05;
