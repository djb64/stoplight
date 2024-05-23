import React, { useState, useEffect } from "react";
import Light from "../Light/Light";
import "./StopLight.css";

const lightConfig = { steps: [{ red: { postion: 1, duration: 2000 }}, { yellow: { position: 2, duration: 1000 }}, { green: { position: 3, duration: 5000 }}] };


const StopLight = () => {
  const [activeLight, setActiveLight] = useState("green");
  const [stepIndex, setStepIndex] = useState(0);

  const lights = lightConfig.steps.map((light) =>
    <Light color={light} active={activeLight === light} />
  );


  useEffect(() => {
    const currentStep = lightConfig.steps[stepIndex];
    const currentColor = Object.keys(currentStep)[0];
    const duration = currentStep[currentColor].duration;

    setActiveLight(currentColor);

    const timer = setTimeout(() => {
      setStepIndex((prevIndex) => (prevIndex + 1) % lightConfig.steps.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [stepIndex]);


  return (
    <div className="stoplight">
      { lights }
    </div>
  );
};

export default StopLight;
