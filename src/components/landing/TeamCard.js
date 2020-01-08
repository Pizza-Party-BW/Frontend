import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ member }) => {
  return (
    <StyledTeamCard>
      <TeamCardImg src={member.photo} />
      <TeamCardHeading>{member.name}</TeamCardHeading>
      <TeamCardLinks>
        <TeamCardLink href={member.github} className="memberGithub">
          <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
        </TeamCardLink>
        <TeamCardLink href={member.linkedin} className="memberLinkedin">
          <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
        </TeamCardLink>
      </TeamCardLinks>
    </StyledTeamCard>
  );
};

export default TeamCard;

const StyledTeamCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  font-size: ${({ theme }) => theme.smallFont};
  font-family: "Press Start 2P";
  color: ${({ theme }) => theme.primaryColor};
`;

const TeamCardImg = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.primaryColor};
  margin: 10px;
`;

const TeamCardLink = styled.a`
  font-size: ${({ theme }) => theme.smallFont};
  color: ${({ theme }) => theme.primaryColor};
  font-family: ${({ theme }) => theme.secondaryFont};
  text-decoration: none;
`;

const TeamCardLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const TeamCardHeading = styled.div`
  margin: 5px;
`;
