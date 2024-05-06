import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const ArrowLeft01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.8334 10.0013H4.16675M4.16675 10.0013L10.0001 15.8346M4.16675 10.0013L10.0001 4.16797"
      stroke={props.color || "#424242"}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowLeft01
