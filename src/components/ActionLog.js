import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getLocation } from "../actions";

// Styles
import styled from "styled-components";

const ActionLog = () => {
  const [{ gameState }, dispatch] = useStateValue();
  let errorMsg = gameState.location.error_msg;

  console.log("game state", gameState);
  useEffect(() => {
    getLocation(dispatch);
  }, [dispatch]);

  return (
    <ActionLogContainer>
      <GameError>{errorMsg && `WARNING: ${errorMsg}`}</GameError>
      <ActionLogText>
        {gameState.actionLog.map((action, i) => (
          <p>
            {i} {action.title} {action.description}
          </p>
        ))}
      </ActionLogText>
    </ActionLogContainer>
  );
};

export default ActionLog;

export const ActionLogContainer = styled.div`
  font-size: ${({ theme }) => theme.smallFont};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 15px;
  margin: 20px 0;
  color: ${({ theme }) => theme.primaryColor};
`;

const ActionLogText = styled.div`
  padding: 2%;
`;

const GameError = styled.div`
  color: red;
  padding: 1% 2%;
  height: ${({ theme }) => theme.smallFont};
`;
