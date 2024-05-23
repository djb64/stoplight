import React, { useState, useEffect } from "react";
import Light from "../Light/Light";
import "./StopLight.css";

// const lightConfig = { steps: [{ red: { postion: 1, duration: 2000 }}, { yellow: { position: 2, duration: 1000 }}, { green: { position: 3, duration: 5000 }}] };

const configOptions = {
  standard: {
    lights: {
      red: { position: 1, color: 'red' },
      yellow: { position: 2, color: 'yellow' },
      green: { position: 3, color: 'green' }
    },
    sequence: [
      { colors: ['green'], duration: 3000 },
      { colors: ['yellow'], duration: 1000 },
      { colors: ['red'], duration: 2000 }
    ]
  },
  emergency: {
    lights: {
      red: { position: 1, color: 'red' },
      yellow: { position: 2, color: 'yellow' },
      green: { position: 3, color: 'green' }
    },
    sequence: [
      { colors: ['red'], duration: 1000 },
      { colors: 'off', duration: 1000 }
    ]
  },
  protected: {
    lights: {
      red: { position: 1, color: 'red' },
      yellow: { position: 2, color: 'yellow' },
      green: { position: 3, color: 'green' },
      leftTurn: { position: 4, color: '#20F7B2' }
    },
    sequence: [
      { colors: ['leftTurn'], duration: 1000 },
      { colors: ['green'], duration: 1000 },
      { colors: ['yellow'], duration: 1000 },
      { colors: ['red'], duration: 1000 }
    ]
  },
  party: {
    lights: {
      red: { position: 1, color: 'red' },
      purple: { position: 2, color: 'purple' },
      green: { position: 3, color: 'green' },
      orange: { position: 4, color: 'orange' }
    },
    sequence: [
      { colors: ['red', 'orange'], duration: 500 },
      { colors: ['purple', 'green'], duration: 500 },
      { colors: ['purple', 'orange', 'green'], duration: 500 },
      { colors: ['purple', 'orange', 'green', 'red'], duration: 500 }
    ]
  }
};

const StopLight = () => {
  const [activeLights, setActiveLights] = useState([]);
  const [selectedConfig, setSelectedConfig] = useState('standard');
  const [stepIndex, setStepIndex] = useState(0);

  const config = configOptions[selectedConfig];

  // const lights = lightConfig.steps.map((light) =>
  //   <Light color={light} active={activeLight === light} />
  // );


  useEffect(() => {
    const currentStep = config.sequence[stepIndex];
    const duration = currentStep.duration;

    setActiveLights(currentStep.colors === 'off' ? [] : currentStep.colors);

    const timer = setTimeout(() => {
      setStepIndex((prevIndex) => (prevIndex + 1) % config.sequence.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [stepIndex, selectedConfig]);


  const handleChange = (event) => {
    setSelectedConfig(event.target.value);
    setStepIndex(0);
  };

  return (
    <div>
      <select value={selectedConfig} onChange={handleChange}>
        <option value="standard">Standard</option>
        <option value="emergency">Emergency</option>
        <option value="protected">Protected Turn</option>
        <option value="party">Party Time</option>
      </select>
      <div className="stoplight">
        {Object.keys(config.lights).map((light) => (
          <Light
            key={light}
            color={config.lights[light].color}
            active={activeLights.includes(light)}
            position={config.lights[light].position}
          />
        ))}
      </div>
    </div>
  );
};

export default StopLight;
