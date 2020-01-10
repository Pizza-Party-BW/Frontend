import React from "react";
import styled from "styled-components";

const Description = () => {
  return <DescriptionText>Description of what to do</DescriptionText>;
};

export default Description;

const DescriptionText = styled.div`
display: grid;
grid-column: 2/3;
grid-row: 9/10;
width: 300px
height: 200px
border: 1px solid red;
font-size: ${({ theme }) => theme.smallFont};
color: ${({ theme }) => theme.primaryColor};
font-family: ${({ theme }) => theme.secondaryFont};
`;
