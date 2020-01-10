import React from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";
import chris from "./assets/chris.jpeg";
import justine from "./assets/justine.jpeg";
import kevin from "./assets/kevin.png";
import may from "./assets/may.png";

const team = [
  {
    name: "Chris York",
    github: "https://github.com/christopherayork",
    linkedin: "https://www.linkedin.com/in/christopher-a-york/",
    photo: chris
  },
  {
    name: "Justine Lai",
    github: "https://github.com/justinelai",
    linkedin: "https://www.linkedin.com/in/justine-lai-943b02195/",
    photo: justine
  },
  {
    name: "Kevin Tou",
    github: "https://github.com/kevintou",
    linkedin: "https://linkedin.com/in/kevin-tou",
    photo: kevin
  },
  {
    name: "May Ng",
    github: "https://github.com/mngmay",
    linkedin: "https://linkedin.com/in/mngmay",
    photo: may
  }
];

const Landing = () => {
  return (
    <LandingContainer>
      <LandingHeader>Welcome to Pizza Party</LandingHeader>
      <LandingParagraph>
        Pizza Party is an adventure game that allows players to control their
        turtle adventurer to navigate sewer passages in search of pizza. Built
        in only 4 days, the team executed a successful build utilizing React and
        Django.
      </LandingParagraph>
      <GameScrnSht>SCREENSHOT OF GAMEPLAY!</GameScrnSht>
      <LandingHeader>Meet The Team!</LandingHeader>
      <TeamCardContainer>
        {team.map((member, key) => (
          <TeamCard member={member} key={key} />
        ))}
      </TeamCardContainer>
    </LandingContainer>
  );
};

export default Landing;

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.smallFont};
`;

const LandingHeader = styled.h2`
  font-size: ${({ theme }) => theme.mediumFont};
  font-family: "Press Start 2P";
  margin: 20px 0;
`;

const LandingParagraph = styled.p`
  font-family: ${({ theme }) => theme.secondaryFont};
  font-size: ${({ theme }) => theme.mediumFont};
`;

const GameScrnSht = styled.div`
  margin: 20px 0;
  height: 300px
  border: 1px solid ${({ theme }) => theme.primaryColor};
  font-family: "Press Start 2P";
  display: flex;
  align-items: center;
  justify-content: center
`;

const TeamCardContainer = styled.div`
  display: flex
  flex-direction: row;
`;
