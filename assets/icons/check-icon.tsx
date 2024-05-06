import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const CheckIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={24} height={24} rx={12} fill="#F5F5F5" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0964 7.38967L9.93638 14.2997L8.03638 12.2697C7.68638 11.9397 7.13638 11.9197 6.73638 12.1997C6.34638 12.4897 6.23638 12.9997 6.47638 13.4097L8.72638 17.0697C8.94638 17.4097 9.32638 17.6197 9.75638 17.6197C10.1664 17.6197 10.5564 17.4097 10.7764 17.0697C11.1364 16.5997 18.0064 8.40967 18.0064 8.40967C18.9064 7.48967 17.8164 6.67967 17.0964 7.37967V7.38967Z"
      fill={props.color || '#155EEF'}
    />
  </Svg>
);
export default CheckIcon;
