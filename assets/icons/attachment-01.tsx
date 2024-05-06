import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const Attachment01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.1015 7.26598L8.09108 13.2764C6.72425 14.6432 4.50817 14.6432 3.14134 13.2764C1.7745 11.9095 1.7745 9.69347 3.14134 8.32664L9.15174 2.31623C10.063 1.40501 11.5404 1.40501 12.4516 2.31623C13.3628 3.22745 13.3628 4.70484 12.4516 5.61606L6.67687 11.3908C6.22126 11.8464 5.48257 11.8464 5.02695 11.3908C4.57134 10.9352 4.57134 10.1965 5.02695 9.74085L10.0946 4.67325"
      stroke={props.color || "#737373"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default Attachment01
