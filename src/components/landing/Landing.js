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
        Sweet roll danish donut cupcake chocolate jujubes cake. Sweet roll
        topping pudding tootsie roll sweet roll apple pie fruitcake donut.
        Cookie bonbon sweet roll carrot cake macaroon jelly cotton candy donut
        icing. Cake sesame snaps jelly-o jelly-o candy canes wafer lollipop
        tiramisu sugar plum. Jujubes marshmallow dessert cotton candy macaroon
        tart. Chocolate sugar plum sweet brownie chocolate icing. Cheesecake
        wafer donut gingerbread wafer croissant. Oat cake candy bonbon chocolate
        macaroon danish. Macaroon donut marzipan cotton candy tart sweet roll
        macaroon muffin. Macaroon jelly beans oat cake jujubes brownie pastry
        cheesecake.
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
