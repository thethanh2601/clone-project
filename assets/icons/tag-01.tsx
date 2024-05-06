import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const Tag01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.6665 6.66602H6.67484M1.6665 4.33268L1.6665 8.06144C1.6665 8.4691 1.6665 8.67292 1.71255 8.86473C1.75338 9.03479 1.82072 9.19737 1.9121 9.34649C2.01517 9.51468 2.1593 9.65881 2.44755 9.94706L8.83808 16.3376C9.82812 17.3276 10.3231 17.8226 10.894 18.0081C11.3961 18.1713 11.9369 18.1713 12.439 18.0081C13.0099 17.8226 13.5049 17.3276 14.4949 16.3376L16.3381 14.4944C17.3281 13.5044 17.8231 13.0094 18.0086 12.4386C18.1718 11.9364 18.1718 11.3956 18.0086 10.8935C17.8231 10.3227 17.3281 9.82763 16.3381 8.83759L9.94755 2.44706C9.6593 2.15881 9.51517 2.01468 9.34698 1.91162C9.19786 1.82023 9.03528 1.75289 8.86522 1.71207C8.67341 1.66602 8.46958 1.66602 8.06193 1.66602L4.33317 1.66602C3.39975 1.66602 2.93304 1.66602 2.57652 1.84767C2.26292 2.00746 2.00795 2.26243 1.84816 2.57603C1.6665 2.93255 1.6665 3.39926 1.6665 4.33268ZM7.08317 6.66602C7.08317 6.89613 6.89662 7.08268 6.6665 7.08268C6.43639 7.08268 6.24984 6.89613 6.24984 6.66602C6.24984 6.4359 6.43639 6.24935 6.6665 6.24935C6.89662 6.24935 7.08317 6.4359 7.08317 6.66602Z"
      stroke={props.color || "#525252"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default Tag01
