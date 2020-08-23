import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderLogo>Wegram</HeaderLogo>
        <HomeButton>
          <Link to="/">
            <AiFillHome
              size={40}
              style={{
                color: "#ffffff",
                cursor: "pointer",
              }}
            />
          </Link>
        </HomeButton>
      </HeaderContainer>
    );
  }
}

// HeaderStyled

const HeaderContainer = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 3;
`;

const HeaderLogo = styled.span`
  font-size: 35px;
  color: #ffffff;
  padding-left: 20px;
  padding-top: 20px;
`;

const HomeButton = styled.div`
  border-width: 0;
  padding-right: 20px;
  padding-top: 20px;
  background-color: transparent;
`;
