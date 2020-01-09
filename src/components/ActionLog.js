import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getLocation } from "../actions";

// Styles
import styled from "styled-components";

const ActionLog = () => {
  const [{ gameState }, dispatch] = useStateValue();
  let errorMsg = gameState.location.error_msg;

  console.log(gameState.location);

  console.log("game state", gameState);
  useEffect(() => {
    getLocation(dispatch);
  }, [dispatch]);

  return (
    <ActionLogContainer>
      <GameError>{errorMsg && `WARNING: ${errorMsg}`}</GameError>
      <ActionLogText>
        {gameState.actionLog.map((action, i) =>
          i === gameState.actionLog.length - 1 ? (
            <CurrentActionLine>
              <ActionTitle>{action.title}:</ActionTitle>{" "}
              <ActionDescription>{action.description}</ActionDescription>
            </CurrentActionLine>
          ) : (
            <ActionLine>
              <ActionTitle>{action.title}:</ActionTitle>{" "}
              <ActionDescription>{action.description}</ActionDescription>
            </ActionLine>
          )
        )}
      </ActionLogText>
    </ActionLogContainer>
  );
};

export default ActionLog;

export const ActionLogContainer = styled.div`
  font-size: ${({ theme }) => theme.smallFont};
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 20rem;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 15px;
  margin: 20px 0;
  color: ${({ theme }) => theme.primaryColor};
  overflow-y: auto;
  grid-column: 1 / span 9;
  grid-row: 6 / 8;
  align-self: end;
`;

const ActionLogText = styled.div`
  padding: 0 2%;
  font-family: ${({ theme }) => theme.secondaryFont};
`;

const GameError = styled.div`
  color: red;
  padding: 1% 2% 2% 2%;
  height: ${({ theme }) => theme.tinyFont};
  font-size: ${({ theme }) => theme.tinyFont};
  font-family: "Press Start 2P";
`;

const ActionLine = styled.div`
  margin-bottom: 1%;
  opacity: 0.35;
`;

const CurrentActionLine = styled.div`
  margin-bottom: 1%;
  opacity: 1;
`;

const ActionTitle = styled.span`
  font-family: "Press Start 2P";
  font-size: ${({ theme }) => theme.tinyFont};
`;

const ActionDescription = styled.span``;
