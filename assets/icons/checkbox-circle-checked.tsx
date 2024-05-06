import * as React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';
const CheckboxCircleChecked = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={0.5}
      y={0.5}
      width={19}
      height={19}
      rx={9.5}
      fill={props.color || '#155EEF'}
    />
    <Rect
      x={0.5}
      y={0.5}
      width={19}
      height={19}
      rx={9.5}
      stroke={props.color || '#155EEF'}
    />
    <Rect x={6} y={6} width={8} height={8} rx={4} fill="white" />
  </Svg>
);
export default CheckboxCircleChecked;
