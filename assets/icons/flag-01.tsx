import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Flag01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.3335 12.5013C3.3335 12.5013 4.16683 11.668 6.66683 11.668C9.16683 11.668 10.8335 13.3346 13.3335 13.3346C15.8335 13.3346 16.6668 12.5013 16.6668 12.5013V2.5013C16.6668 2.5013 15.8335 3.33464 13.3335 3.33464C10.8335 3.33464 9.16683 1.66797 6.66683 1.66797C4.16683 1.66797 3.3335 2.5013 3.3335 2.5013L3.3335 18.3346"
      stroke={props.color || '#525252'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Flag01;
