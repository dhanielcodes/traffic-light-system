import React, { useState, useEffect } from "react";
import TrafficLight from "./components/TrafficLight";
import styled from "styled-components";

const Button = styled.button`
  margin: 20px auto;
  display: block;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const App: React.FC = () => {
  const [lightState, setLightState] = useState({
    streetA: "green",
    streetB: "red",
  });

  const [reset, setReset] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    let cycle: number;
    if (isStarted && !reset) {
      if (lightState.streetA === "green") {
        cycle = window.setTimeout(
          () => setLightState({ streetA: "yellow", streetB: "yellow" }),
          10000
        );
      } else if (
        lightState.streetA === "yellow" &&
        lightState.streetB === "yellow"
      ) {
        cycle = window.setTimeout(
          () => setLightState({ streetA: "red", streetB: "green" }),
          5000
        );
      } else if (lightState.streetB === "green") {
        cycle = window.setTimeout(
          () => setLightState({ streetA: "yellow", streetB: "yellow" }),
          10000
        );
      }
    }

    return () => clearTimeout(cycle);
  }, [lightState, reset, isStarted]);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleReset = () => {
    setReset(true);
    setLightState({ streetA: "green", streetB: "red" });
    setTimeout(() => setReset(false), 100);
    setIsStarted(false);
  };

  return (
    <div>
      <TrafficLight
        streetA={{ lightState: lightState.streetA }}
        streetB={{ lightState: lightState.streetB }}
      />

      {!isStarted && <Button onClick={handleStart}>Start</Button>}
      {isStarted && <Button onClick={handleReset}>Reset</Button>}
    </div>
  );
};

export default App;
