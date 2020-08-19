import React from "react";
import "./App.css";
import Home from "./screens/Home";
import Test from "./screens/Test";
import Result from "./screens/Result";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/test" exact component={Test} />
            <Route path="/result" exact component={Result} />
            <Redirect path="*" to="/" />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

// AppStyled

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ebebeb;
`;
