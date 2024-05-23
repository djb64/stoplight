import React from "react";
import PropTypes from "prop-types";
import "./Light.css";

const Light = ({ color, active, position }) => {
  const style = {
    order: position,
    backgroundColor: color,
  };

  return (
    <div className={`light ${active ? "active" : ""}`} style={style}></div>
  );
};

Light.propTypes = {
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
};

export default Light;
