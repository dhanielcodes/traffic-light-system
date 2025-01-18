import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TrafficLightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px;
`;

const TrafficLight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Light = styled.div<{ color: string; isActive: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};
  margin: 5px 0;
`;

const StreetLabel = styled.h2`
  margin-top: 10px;
  font-size: 1.2rem;
`;

const ResetButton = styled.button`
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

type LightState = "green" | "yellow" | "red";

interface TrafficLightProps {
  street: string;
  green: boolean;
  yellow: boolean;
  red: boolean;
}

const TrafficLightComponent: React.FC<TrafficLightProps> = ({
  street,
  green,
  yellow,
  red,
}) => (
  <TrafficLight>
    <Light color="green" isActive={green} />
    <Light color="yellow" isActive={yellow} />
    <Light color="red" isActive={red} />
    <StreetLabel>{street}</StreetLabel>
  </TrafficLight>
);

const App: React.FC = () => {
  const [lightState, setLightState] = useState<{
    streetA: LightState;
    streetB: LightState;
  }>({
    streetA: "green",
    streetB: "red",
  });

  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    let cycle: number;
    if (!reset) {
      if (lightState.streetA === "green") {
        cycle = window.setTimeout(
          () => setLightState({ streetA: "yellow", streetB: "red" }),
          5000
        );
      } else if (lightState.streetA === "yellow") {
        cycle = window.setTimeout(
          () => setLightState({ streetA: "red", streetB: "green" }),
          2000
        );
      } else if (lightState.streetB === "green") {
        cycle = window.setTimeout(
          () => setLightState({ streetA: "red", streetB: "yellow" }),
          5000
        );
      } else if (lightState.streetB === "yellow") {
        cycle = window.setTimeout(
          () => setLightState({ streetA: "green", streetB: "red" }),
          2000
        );
      }
    }
    return () => clearTimeout(cycle);
  }, [lightState, reset]);

  const handleReset = () => {
    setReset(true);
    setLightState({ streetA: "green", streetB: "red" });
    setTimeout(() => setReset(false), 100);
  };

  return (
    <div>
      <TrafficLightContainer>
        <TrafficLightComponent
          street="Street A"
          green={lightState.streetA === "green"}
          yellow={lightState.streetA === "yellow"}
          red={lightState.streetA === "red"}
        />
        <TrafficLightComponent
          street="Street B"
          green={lightState.streetB === "green"}
          yellow={lightState.streetB === "yellow"}
          red={lightState.streetB === "red"}
        />
      </TrafficLightContainer>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
    </div>
  );
};

export default App;
