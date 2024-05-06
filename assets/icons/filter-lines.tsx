import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const FilterLines = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
      stroke={props.color || "#424242"}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default FilterLines
