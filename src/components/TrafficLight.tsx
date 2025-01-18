import React from "react";
import styled from "styled-components";
import TrafficLightComponent from "./TrafficLightComponent";

const TrafficLightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px;
`;

interface TrafficLightProps {
  streetA: {
    lightState: "green" | "yellow" | "red" | string;
  };
  streetB: {
    lightState: "green" | "yellow" | "red" | string;
  };
}

const TrafficLight: React.FC<TrafficLightProps> = ({ streetA, streetB }) => (
  <TrafficLightContainer>
    <TrafficLightComponent
      street="Street A"
      green={streetA.lightState === "green"}
      yellow={streetA.lightState === "yellow"}
      red={streetA.lightState === "red"}
    />
    <TrafficLightComponent
      street="Street B"
      green={streetB.lightState === "green"}
      yellow={streetB.lightState === "yellow"}
      red={streetB.lightState === "red"}
    />
  </TrafficLightContainer>
);

export default TrafficLight;
