import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const Passcode = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.5 13.9998H14.5059M20.3334 13.9998H20.3392M8.66671 13.9998H8.67254M6.56671 8.1665H22.4334C23.7402 8.1665 24.3936 8.1665 24.8927 8.42082C25.3317 8.64453 25.6887 9.00148 25.9124 9.44053C26.1667 9.93965 26.1667 10.593 26.1667 11.8998V16.0998C26.1667 17.4066 26.1667 18.06 25.9124 18.5591C25.6887 18.9982 25.3317 19.3551 24.8927 19.5789C24.3936 19.8332 23.7402 19.8332 22.4334 19.8332H6.56671C5.25992 19.8332 4.60652 19.8332 4.1074 19.5789C3.66835 19.3551 3.3114 18.9982 3.08769 18.5591C2.83337 18.06 2.83337 17.4066 2.83337 16.0998V11.8998C2.83337 10.593 2.83337 9.93965 3.08769 9.44053C3.3114 9.00148 3.66835 8.64453 4.1074 8.42082C4.60652 8.1665 5.25992 8.1665 6.56671 8.1665ZM14.7917 13.9998C14.7917 14.1609 14.6611 14.2915 14.5 14.2915C14.339 14.2915 14.2084 14.1609 14.2084 13.9998C14.2084 13.8388 14.339 13.7082 14.5 13.7082C14.6611 13.7082 14.7917 13.8388 14.7917 13.9998ZM20.625 13.9998C20.625 14.1609 20.4945 14.2915 20.3334 14.2915C20.1723 14.2915 20.0417 14.1609 20.0417 13.9998C20.0417 13.8388 20.1723 13.7082 20.3334 13.7082C20.4945 13.7082 20.625 13.8388 20.625 13.9998ZM8.95837 13.9998C8.95837 14.1609 8.82779 14.2915 8.66671 14.2915C8.50562 14.2915 8.37504 14.1609 8.37504 13.9998C8.37504 13.8388 8.50562 13.7082 8.66671 13.7082C8.82779 13.7082 8.95837 13.8388 8.95837 13.9998Z"
      stroke={props.color || "#424242"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default Passcode
