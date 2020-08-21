import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <GrayScale />
        <HomeLogoContainer>
          <HomeLogo>Wegram</HomeLogo>
        </HomeLogoContainer>
        <TitleContainer>
          <TitleBorder></TitleBorder>
          <TitleText>영양 관리 테스트</TitleText>
          <TitleBorder></TitleBorder>
        </TitleContainer>
        <ButtonContainer>
          <Link style={linkStyle} to="/test">
            <StartButton>시작</StartButton>
          </Link>
        </ButtonContainer>
      </HomeContainer>
    );
  }
}

const linkStyle = {
  width: "250px",
  height: "80px",
};

// HomeStyled

const HomeContainer = styled.div`
  display: flex;
  width: 600px;
  height: 1080px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${require("../assets/images/homeImage.jpg")});
  background-size: cover;
  background-repeat: no-repeat;
`;

const GrayScale = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.2;
  width: 600px;
  height: 1080px;
  z-index: 0;
`;

const HomeLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 216px;
  z-index: 1;
`;

const HomeLogo = styled.span`
  color: #ffffff;
  font-family: NotoSansKR-Bold;
  font-weight: bold;
  font-size: 60px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 216px;
  z-index: 1;
`;

const TitleText = styled.span`
  color: #ffffff;
  font-family: NotoSansKR-Light;
  font-weight: lighter;
  font-size: 40px;
`;

const TitleBorder = styled.div`
  width: 420px;
  border: solid 3px #ffffff;
  margin: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 216px;
  z-index: 1;
`;

const StartButton = styled.button`
  width: 250px;
  height: 80px;
  border: 0px;
  border-radius: 50px;
  background-color: #ffffff;
  font-family: NotoSansKR-Light;
  font-weight: normal;
  font-size: 35px;
  color: #bcc0c2;
  cursor: pointer;
`;
