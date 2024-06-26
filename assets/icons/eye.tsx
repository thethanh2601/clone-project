import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Eye = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.76677 10.5937C2.65328 10.414 2.59654 10.3241 2.56477 10.1855C2.54091 10.0814 2.54091 9.91727 2.56477 9.81317C2.59654 9.67458 2.65328 9.58473 2.76677 9.40503C3.70461 7.92005 6.49617 4.16602 10.7503 4.16602C15.0045 4.16602 17.7961 7.92005 18.7339 9.40503C18.8474 9.58473 18.9041 9.67458 18.9359 9.81317C18.9598 9.91727 18.9598 10.0814 18.9359 10.1855C18.9041 10.3241 18.8474 10.414 18.7339 10.5937C17.7961 12.0786 15.0045 15.8327 10.7503 15.8327C6.49617 15.8327 3.70461 12.0786 2.76677 10.5937Z"
      stroke={props.color || '#424242'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.7503 12.4993C12.131 12.4993 13.2503 11.3801 13.2503 9.99935C13.2503 8.61864 12.131 7.49935 10.7503 7.49935C9.36962 7.49935 8.25034 8.61864 8.25034 9.99935C8.25034 11.3801 9.36962 12.4993 10.7503 12.4993Z"
      stroke={props.color || '#424242'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Eye;
