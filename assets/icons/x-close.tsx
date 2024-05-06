import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
import { color } from "../../screens/themes"

const Xclose = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.5893 5.58928C15.9148 5.26384 15.9148 4.7362 15.5893 4.41076C15.2639 4.08533 14.7363 4.08533 14.4108 4.41076L10.0001 8.82151L5.58934 4.41076C5.2639 4.08533 4.73626 4.08533 4.41083 4.41076C4.08539 4.7362 4.08539 5.26384 4.41083 5.58928L8.82157 10L4.41083 14.4108C4.08539 14.7362 4.08539 15.2638 4.41083 15.5893C4.73626 15.9147 5.2639 15.9147 5.58934 15.5893L10.0001 11.1785L14.4108 15.5893C14.7363 15.9147 15.2639 15.9147 15.5893 15.5893C15.9148 15.2638 15.9148 14.7362 15.5893 14.4108L11.1786 10L15.5893 5.58928Z"
      fill={props.color ||  color.black}
    />
  </Svg>
)
export default Xclose
