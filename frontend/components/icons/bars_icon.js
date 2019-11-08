// https://fontawesome.com/license
import React from "react";

const BarsSVG = ({
  fill = "#FFFFFF", width = "26", className = "icon bars", focusable = "false", viewBox = "0 0 448 512", ariaHidden = "true" }) => (
    <svg
      width={width}
      className={className}
      focusable={focusable}
      viewBox={viewBox}
      aria-hidden={ariaHidden}
    >
      <path fill={fill} d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
    </svg>
  );

export default BarsSVG;