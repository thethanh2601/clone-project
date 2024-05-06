import * as React from "react"
import Svg, { Rect, SvgProps } from "react-native-svg"
const CheckboxBase = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.5} y={0.5} width={15} height={15} rx={3.5} fill={"white"} />
    <Rect x={0.5} y={0.5} width={15} height={15} rx={3.5} stroke={props.stroke || "#D6D6D6"} />
  </Svg>
)
export default CheckboxBase
