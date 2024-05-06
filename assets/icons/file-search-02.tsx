import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const FileSearch02 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.5 11H8.5M10.5 15H8.5M16.5 7H8.5M20.5 10.5V6.8C20.5 5.11984 20.5 4.27976 20.173 3.63803C19.8854 3.07354 19.4265 2.6146 18.862 2.32698C18.2202 2 17.3802 2 15.7 2H9.3C7.61984 2 6.77976 2 6.13803 2.32698C5.57354 2.6146 5.1146 3.07354 4.82698 3.63803C4.5 4.27976 4.5 5.11984 4.5 6.8V17.2C4.5 18.8802 4.5 19.7202 4.82698 20.362C5.1146 20.9265 5.57354 21.3854 6.13803 21.673C6.77976 22 7.61984 22 9.3 22H12M22.5 22L21 20.5M22 18C22 19.933 20.433 21.5 18.5 21.5C16.567 21.5 15 19.933 15 18C15 16.067 16.567 14.5 18.5 14.5C20.433 14.5 22 16.067 22 18Z"
      stroke={props.color || "#424242"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default FileSearch02
