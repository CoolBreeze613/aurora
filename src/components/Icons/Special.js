import React from "react";
import { PropTypes } from "prop-types";

const SpecialIcon = ({ size, color, children, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 27" {...props}>
    {children}
    <g fill="none" fillRule="evenodd" transform="translate(1 1.85)">
      <circle cx="12" cy="12" r="12.5" fill="#FAFAFA" stroke="#E0E0E0" />
      <path
        fill={color}
        stroke="#262626"
        strokeWidth=".2"
        d="M16 3.15c.552 0 1.072.105 1.559.316a4.026 4.026 0 0 1 2.129 2.129c.208.485.312 1.003.312 1.555a3.92 3.92 0 0 1-.313 1.559 4.014 4.014 0 0 1-.855 1.273 4.014 4.014 0 0 1-1.273.856A3.92 3.92 0 0 1 16 11.15a4.035 4.035 0 0 1-1.504-.29 3.874 3.874 0 0 1-.66-.343 4.107 4.107 0 0 1-.578-.453l-5.89 5.89 1.312 1.313a.388.388 0 0 1 .117.285.4.4 0 0 1-.68.285l-1.32-1.32-.633.633 1.32 1.32a.384.384 0 0 1 .118.282c0 .109-.04.203-.118.28a.378.378 0 0 1-.136.09.417.417 0 0 1-.297 0 .378.378 0 0 1-.137-.09L5.602 17.72l-.922.914a.313.313 0 0 1-.13.09.437.437 0 0 1-.304 0 .313.313 0 0 1-.129-.09.384.384 0 0 1-.117-.28c0-.11.04-.204.117-.282l8.61-8.617A3.963 3.963 0 0 1 12 7.15c0-.552.104-1.07.313-1.555a4.026 4.026 0 0 1 2.128-2.129A3.879 3.879 0 0 1 16 3.15zm2.266 6.266c.15-.151.283-.314.398-.489.115-.174.212-.358.293-.55a3.173 3.173 0 0 0-.293-2.997 3.26 3.26 0 0 0-.887-.89 3.022 3.022 0 0 0-.55-.293 3.365 3.365 0 0 0-.598-.18 3.16 3.16 0 0 0-1.258 0 3.365 3.365 0 0 0-.598.18 3.022 3.022 0 0 0-.55.293 3.26 3.26 0 0 0-.887.89 3.454 3.454 0 0 0-.293.547 3.078 3.078 0 0 0-.246 1.223 3.16 3.16 0 0 0 .246 1.227c.08.192.178.376.293.55.115.175.247.338.398.489.151.15.314.285.489.402.174.117.358.215.55.293.193.078.392.138.598.18a3.16 3.16 0 0 0 1.258 0c.206-.042.405-.102.598-.18.192-.078.376-.176.55-.293a3.26 3.26 0 0 0 .489-.402z"
      />
    </g>
  </svg>
);

SpecialIcon.displayName = "SpecialIcon";

SpecialIcon.defaultProps = {
  color: "currentColor",
  children: null
};

SpecialIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default SpecialIcon;