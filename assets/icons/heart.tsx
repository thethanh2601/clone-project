import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Heart = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99413 4.27985C8.328 2.332 5.54963 1.80804 3.46208 3.59168C1.37454 5.37532 1.08064 8.35748 2.72 10.467C4.08302 12.2209 8.20798 15.9201 9.55992 17.1174C9.71117 17.2513 9.7868 17.3183 9.87502 17.3446C9.95201 17.3676 10.0363 17.3676 10.1132 17.3446C10.2015 17.3183 10.2771 17.2513 10.4283 17.1174C11.7803 15.9201 15.9052 12.2209 17.2683 10.467C18.9076 8.35748 18.6496 5.35656 16.5262 3.59168C14.4028 1.8268 11.6603 2.332 9.99413 4.27985Z"
      stroke={props.color || '#737373'}
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Heart;
