import React from "react";
import PropTypes from "prop-types";
import "./Light.css";

const Light = ({ color, active }) => {
  return <div className={`light ${color} ${active ? "active" : ""}`}></div>;
};

Light.propTypes = {
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Light;
