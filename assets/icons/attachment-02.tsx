import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Attachment02 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.5832 4.37993V13.7501C14.5832 16.2814 12.5311 18.3334 9.99984 18.3334C7.46853 18.3334 5.4165 16.2814 5.4165 13.7501V4.7223C5.4165 3.03477 6.78452 1.66675 8.47206 1.66675C10.1596 1.66675 11.5276 3.03477 11.5276 4.7223V13.7049C11.5276 14.5486 10.8436 15.2326 9.99984 15.2326C9.15607 15.2326 8.47206 14.5486 8.47206 13.7049V5.54272"
      stroke={props.color || '#004EEB'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Attachment02;
