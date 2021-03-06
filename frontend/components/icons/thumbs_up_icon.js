// https://fontawesome.com/license
import React from "react";

const ThumbsUpSVG = ({
  fill = "none", width = "17", className = "github-icon", focusable = "false", viewBox = "0 0 16 17", ariaHidden = "true" }) => (
    <svg
      width={width}
      className={className}
      focusable={focusable}
      viewBox={viewBox}
      aria-hidden={ariaHidden}
      data-prefix="fab"
      data-icon="thumbs-up"
    >
      <g fill={fill} fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path fill={fill} d="M11 10h3M11 13h3M1 16h11s1.634-.227 2-1c.492-1.038 1-2.851 1-4 0-2-1-4-3-4H8V3c0-1 0-2-1-2S5 1 5 3 4 9 1 9" />
      </g>
    </svg>
  );

export default ThumbsUpSVG;