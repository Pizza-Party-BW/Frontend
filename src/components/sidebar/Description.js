import React from "react";
import styled from "styled-components";

const Description = () => {
  return <DescriptionText>Description of what to do</DescriptionText>;
};

export default Description;

const DescriptionText = styled.div`
  display: grid;
  grid-column: 1/6;
  grid-row: 10/11;
  width: 300px
  height: 200px
  font-size: ${({ theme }) => theme.smallFont};
  color: ${({ theme }) => theme.primaryColor};
  font-family: ${({ theme }) => theme.secondaryFont};
  justify-self: center
`;
