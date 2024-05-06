import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Edit01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.39686 15.0963C2.43515 14.7517 2.45429 14.5794 2.50642 14.4184C2.55268 14.2755 2.61802 14.1396 2.70069 14.0142C2.79388 13.8729 2.91645 13.7503 3.1616 13.5052L14.1669 2.49992C15.0873 1.57945 16.5797 1.57945 17.5002 2.49993C18.4207 3.4204 18.4207 4.91279 17.5002 5.83326L6.49493 16.8385C6.24978 17.0836 6.12721 17.2062 5.9859 17.2994C5.86054 17.3821 5.72457 17.4474 5.5817 17.4937C5.42067 17.5458 5.24838 17.5649 4.9038 17.6032L2.0835 17.9166L2.39686 15.0963Z"
      stroke={props.color || '#004EEB'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Edit01;
