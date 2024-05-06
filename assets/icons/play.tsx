import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Play = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.5 2.49378C2.5 2.0082 2.5 1.76541 2.60125 1.63157C2.68945 1.51498 2.82426 1.44283 2.9702 1.43411C3.13772 1.42411 3.33973 1.55879 3.74376 1.82814L9.00154 5.33333C9.33538 5.55589 9.5023 5.66717 9.56047 5.80743C9.61133 5.93006 9.61133 6.06787 9.56047 6.1905C9.5023 6.33076 9.33538 6.44204 9.00154 6.66461L3.74376 10.1698C3.33973 10.4391 3.13772 10.5738 2.9702 10.5638C2.82426 10.5551 2.68945 10.483 2.60125 10.3664C2.5 10.2325 2.5 9.98973 2.5 9.50415V2.49378Z"
      stroke={props.color || '#2970FF'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Play;
