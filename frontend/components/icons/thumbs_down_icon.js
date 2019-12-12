// https://fontawesome.com/license
import React from "react";

const ThumbsDownSVG = ({
  fill = "none", width = "17", className = "github-icon", focusable = "false", viewBox = "0 0 16 17", ariaHidden = "true" }) => (
    <svg
      width={width}
      className={className}
      focusable={focusable}
      viewBox={viewBox}
      aria-hidden={ariaHidden}
      data-prefix="fab"
      data-icon="thumbs-down"
    >
      <g fill={fill} fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path fill={fill} d="M5 7H2M5 4H2M15 1H4s-1.634.227-2 1c-.492 1.038-1 2.851-1 4 0 2 1 4 3 4h4v4c0 1 0 2 1 2s2 0 2-2 1-6 4-6" />
      </g>
    </svg>
  );

export default ThumbsDownSVG;