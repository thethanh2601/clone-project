import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"
const CheckboxBaseChecked = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.5} y={0.5} width={15} height={15} rx={3.5} fill={props.fill || "#155EEF"} />
    <Rect x={0.5} y={0.5} width={15} height={15} rx={3.5} stroke={props.stroke || "#155EEF"} />
    <Path
      d="M12 5L6.5 10.5L4 8"
      stroke="white"
      strokeWidth={1.6666}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default CheckboxBaseChecked
