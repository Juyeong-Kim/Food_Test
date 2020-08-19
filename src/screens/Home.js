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
          <Link to="/test">
            <StartButton>시작</StartButton>
          </Link>
        </ButtonContainer>
      </HomeContainer>
    );
  }
}

// HomeStyled

const HomeContainer = styled.div`
  display: flex;
  width: 33vw;
  height: 100vh;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
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
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const HomeLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15%;
  z-index: 1;
`;

const TitleText = styled.span`
  color: #ffffff;
  font-family: NotoSansKR-Light;
  font-weight: lighter;
  font-size: 50px;
`;

const TitleBorder = styled.div`
  border: solid 4 px #ffffff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15%;
  z-index: 1;
`;

const StartButton = styled.button`
  width: 100%;
  border: 0px;
  border-radius: 50px;
  background-color: #ffffff;
  font-family: NotoSansKR-Light;
  font-weight: normal;
  font-size: 35px;
  cursor: pointer;
`;
