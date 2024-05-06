import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const BookOpen01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.9998 28L15.8664 27.7999C14.9402 26.4106 14.4771 25.716 13.8653 25.2131C13.3236 24.7679 12.6995 24.4339 12.0286 24.2301C11.2708 24 10.436 24 8.76627 24H6.93317C5.4397 24 4.69296 24 4.12253 23.7094C3.62076 23.4537 3.21282 23.0457 2.95715 22.544C2.6665 21.9735 2.6665 21.2268 2.6665 19.7333V8.26667C2.6665 6.77319 2.6665 6.02646 2.95715 5.45603C3.21282 4.95426 3.62076 4.54631 4.12253 4.29065C4.69296 4 5.4397 4 6.93317 4H7.4665C10.4535 4 11.9469 4 13.0878 4.5813C14.0913 5.09262 14.9072 5.90852 15.4185 6.91205C15.9998 8.05291 15.9998 9.54639 15.9998 12.5333M15.9998 28V12.5333M15.9998 28L16.1332 27.7999C17.0594 26.4106 17.5225 25.716 18.1344 25.2131C18.676 24.7679 19.3002 24.4339 19.971 24.2301C20.7288 24 21.5637 24 23.2334 24H25.0665C26.56 24 27.3067 24 27.8771 23.7094C28.3789 23.4537 28.7869 23.0457 29.0425 22.544C29.3332 21.9735 29.3332 21.2268 29.3332 19.7333V8.26667C29.3332 6.77319 29.3332 6.02646 29.0425 5.45603C28.7869 4.95426 28.3789 4.54631 27.8771 4.29065C27.3067 4 26.56 4 25.0665 4H24.5332C21.5462 4 20.0528 4 18.9119 4.5813C17.9084 5.09262 17.0925 5.90852 16.5811 6.91205C15.9998 8.05291 15.9998 9.54639 15.9998 12.5333"
      stroke={props.color || "#528BFF"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default BookOpen01
