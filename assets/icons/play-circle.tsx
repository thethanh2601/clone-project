import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const PlayCircle = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.9998 29.3332C23.3636 29.3332 29.3332 23.3636 29.3332 15.9998C29.3332 8.63604 23.3636 2.6665 15.9998 2.6665C8.63604 2.6665 2.6665 8.63604 2.6665 15.9998C2.6665 23.3636 8.63604 29.3332 15.9998 29.3332Z"
      stroke={props.color || "#528BFF"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.6665 11.9536C12.6665 11.3172 12.6665 10.999 12.7995 10.8214C12.9154 10.6666 13.0928 10.5698 13.2857 10.556C13.507 10.5402 13.7747 10.7122 14.31 11.0564L20.6041 15.1026C21.0686 15.4012 21.3009 15.5505 21.3811 15.7404C21.4512 15.9062 21.4512 16.0934 21.3811 16.2593C21.3009 16.4492 21.0686 16.5985 20.6041 16.8971L14.31 20.9433C13.7747 21.2874 13.507 21.4595 13.2857 21.4437C13.0928 21.4299 12.9154 21.3331 12.7995 21.1783C12.6665 21.0006 12.6665 20.6824 12.6665 20.0461V11.9536Z"
      stroke={props.color || "#528BFF"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PlayCircle
