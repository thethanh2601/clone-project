import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const FileAttachment02 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.75 2H15.45C17.1302 2 17.9702 2 18.612 2.32698C19.1765 2.6146 19.6354 3.07354 19.923 3.63803C20.25 4.27976 20.25 5.11984 20.25 6.8V17.2C20.25 18.8802 20.25 19.7202 19.923 20.362C19.6354 20.9265 19.1765 21.3854 18.612 21.673C17.9702 22 17.1302 22 15.45 22H9.05C7.36984 22 6.52976 22 5.88803 21.673C5.32354 21.3854 4.8646 20.9265 4.57698 20.362C4.25 19.7202 4.25 18.8802 4.25 17.2V16.5M16.25 13H11.75M16.25 9H12.75M16.25 17H8.25M6.25 10V4.5C6.25 3.67157 6.92157 3 7.75 3C8.57843 3 9.25 3.67157 9.25 4.5V10C9.25 11.6569 7.90685 13 6.25 13C4.59315 13 3.25 11.6569 3.25 10V6"
      stroke={props.color || "#525252"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default FileAttachment02
