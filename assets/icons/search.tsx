import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const Search = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L20 22L22 20L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z"
      fill={props.color || "#FF9900"}
    />
  </Svg>
)
export default Search
