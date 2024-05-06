import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const Square = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.75 6.5C2.75 5.09987 2.75 4.3998 3.02248 3.86502C3.26217 3.39462 3.64462 3.01217 4.11502 2.77248C4.6498 2.5 5.34987 2.5 6.75 2.5H13.75C15.1501 2.5 15.8502 2.5 16.385 2.77248C16.8554 3.01217 17.2378 3.39462 17.4775 3.86502C17.75 4.3998 17.75 5.09987 17.75 6.5V13.5C17.75 14.9001 17.75 15.6002 17.4775 16.135C17.2378 16.6054 16.8554 16.9878 16.385 17.2275C15.8502 17.5 15.1501 17.5 13.75 17.5H6.75C5.34987 17.5 4.6498 17.5 4.11502 17.2275C3.64462 16.9878 3.26217 16.6054 3.02248 16.135C2.75 15.6002 2.75 14.9001 2.75 13.5V6.5Z"
      stroke={props.color || "#424242"}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default Square
