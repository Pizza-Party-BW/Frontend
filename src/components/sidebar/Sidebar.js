import React from "react";
import DirectionPad from "./direction/DirectionPad";

import styled from "styled-components";

const Sidebar = () => {
  return (
    <SideBarContainer>
      <DirectionPad />
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled.div`
  display: grid;
  grid-column: 6/9;
  justify-self: end;
  width: 350px;
  height: 640px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 15px;
`;
