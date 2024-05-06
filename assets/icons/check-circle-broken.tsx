import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const CheckCircleBroken = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M26.1668 12.9333V14.0066C26.1654 16.5224 25.3507 18.9704 23.8444 20.9854C22.338 23.0004 20.2207 24.4745 17.8081 25.1878C15.3955 25.9011 12.817 25.8155 10.457 24.9436C8.09712 24.0717 6.08226 22.4604 4.71295 20.3498C3.34364 18.2393 2.69325 15.7427 2.85879 13.2323C3.02432 10.7219 3.9969 8.33231 5.63149 6.41985C7.26607 4.50739 9.47508 3.17454 11.929 2.6201C14.383 2.06566 16.9505 2.31932 19.2485 3.34326M26.1668 4.66659L14.5002 16.3449L11.0002 12.8449"
      stroke={props.color || "#099250"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default CheckCircleBroken
