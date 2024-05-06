import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const CheckCircleFill = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={20} height={20} rx={10} fill={props.color || '#D0D5DD'} />
    <Path
      d="M6.25 10L8.75 12.5L13.75 7.5"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckCircleFill;
