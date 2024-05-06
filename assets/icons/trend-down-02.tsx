import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const TrendDown02 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.8335 5.83301L14.1668 14.1663M14.1668 14.1663V5.83301M14.1668 14.1663H5.8335"
      stroke={props.color || "#004EEB"}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default TrendDown02
