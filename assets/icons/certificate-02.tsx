import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const Certificate02 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 24.6665H20M9.33333 19.9998H22.6667M6.66667 2.6665H25.3333C26.8061 2.6665 28 3.99307 28 5.62947V26.3702C28 28.0066 26.8061 29.3332 25.3333 29.3332H6.66667C5.19391 29.3332 4 28.0066 4 26.3702V5.62947C4 3.99307 5.19391 2.6665 6.66667 2.6665ZM15.9968 8.28242C15.0638 7.24357 13.5079 6.96412 12.3389 7.9154C11.1698 8.86667 11.0053 10.4572 11.9233 11.5822C12.8413 12.7073 15.9968 15.3332 15.9968 15.3332C15.9968 15.3332 19.1523 12.7073 20.0703 11.5822C20.9884 10.4572 20.8439 8.85667 19.6548 7.9154C18.4656 6.97413 16.9298 7.24357 15.9968 8.28242Z"
      stroke={props.color || "#528BFF"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default Certificate02
