import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SwitchHorizonta02 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.3335 14.1667H16.6668M16.6668 14.1667L13.3335 10.8333M16.6668 14.1667L13.3335 17.5M16.6668 5.83333H3.3335M3.3335 5.83333L6.66683 2.5M3.3335 5.83333L6.66683 9.16667"
      stroke={props.color || '#424242'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SwitchHorizonta02;
