import React from "react";
import styled from "styled-components";

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

interface TrafficLightComponentProps {
  street: string;
  green: boolean;
  yellow: boolean;
  red: boolean;
}

const TrafficLightComponent: React.FC<TrafficLightComponentProps> = ({
  street,
  green,
  yellow,
  red,
}) => (
  <div>
    <Light color="green" isActive={green} />
    <Light color="yellow" isActive={yellow} />
    <Light color="red" isActive={red} />
    <StreetLabel>{street}</StreetLabel>
  </div>
);

export default TrafficLightComponent;
