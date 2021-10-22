import React from "react";
import PropTypes from "prop-types";

const ArrowUpIcon = (props) => {
  let { className, height, width, fill, stroke, strokeWidth, onClick, size } =
    props;
  if (size) {
    height = size;
    width = size;
  }
  return (
    <svg
      viewBox="3.8 26.9 120.4 74.2"
      className={className}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      onClick={onClick}
    >
      <g id="Arrow" transform="matrix(0, -1, 1, 0, 0, 127.999992)">
        <path
          id="path_3_"
          d="M40.9 3.8L101.1 64l-60.2 60.2-14-14L73 64 26.9 17.9l14-14.1z"
        ></path>
      </g>
    </svg>
  );
};

ArrowUpIcon.defaultProps = {
  fill1: "#1d2c5e",
  height: "30px",
  width: undefined,
  className: undefined,
  stroke: "black",
  strokeWidth: "0",
  size: undefined,
  onClick: () => {},
};

ArrowUpIcon.prototype = {
  fill1: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default ArrowUpIcon;
