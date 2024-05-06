import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const TrendUp02 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.33337 14.1663L14.6667 5.83301M14.6667 5.83301H6.33337M14.6667 5.83301V14.1663"
      stroke={props.color || "white"}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default TrendUp02
