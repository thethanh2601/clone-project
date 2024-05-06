import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Key01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.3333 10.4999C20.3333 9.9028 20.1055 9.30568 19.6499 8.85008C19.1943 8.39447 18.5972 8.16667 18 8.16667M18 17.5C21.866 17.5 25 14.366 25 10.5C25 6.63401 21.866 3.5 18 3.5C14.134 3.5 11 6.63401 11 10.5C11 10.8193 11.0214 11.1336 11.0628 11.4415C11.1309 11.948 11.1649 12.2013 11.142 12.3615C11.1181 12.5284 11.0877 12.6184 11.0055 12.7655C10.9265 12.9068 10.7873 13.046 10.509 13.3243L4.54673 19.2866C4.34496 19.4884 4.24407 19.5893 4.17192 19.707C4.10795 19.8114 4.06081 19.9252 4.03224 20.0442C4 20.1785 4 20.3212 4 20.6065V22.6333C4 23.2867 4 23.6134 4.12716 23.863C4.23901 24.0825 4.41749 24.261 4.63701 24.3728C4.88657 24.5 5.21327 24.5 5.86667 24.5H8.66667V22.1667H11V19.8333H13.3333L15.1757 17.991C15.454 17.7127 15.5932 17.5735 15.7345 17.4945C15.8816 17.4123 15.9716 17.3819 16.1385 17.358C16.2987 17.3351 16.552 17.3691 17.0585 17.4372C17.3664 17.4786 17.6807 17.5 18 17.5Z"
      stroke={props.color || '#424242'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Key01;