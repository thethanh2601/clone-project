import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const ClockStopwatch = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.00016 6.33203V8.9987L9.66683 9.9987M8.00016 3.33203C4.87055 3.33203 2.3335 5.86908 2.3335 8.9987C2.3335 12.1283 4.87055 14.6654 8.00016 14.6654C11.1298 14.6654 13.6668 12.1283 13.6668 8.9987C13.6668 5.86908 11.1298 3.33203 8.00016 3.33203ZM8.00016 3.33203V1.33203M6.66683 1.33203H9.3335M13.5528 3.72673L12.5528 2.72673L13.0528 3.22673M2.44751 3.72673L3.44751 2.72673L2.94751 3.22673"
      stroke={props.color || "#737373"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ClockStopwatch
