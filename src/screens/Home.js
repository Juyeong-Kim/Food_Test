import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__logo">
          <span className="home__logo__text">Wegram</span>
        </div>
        <div className="home__title">
          <div className="home__title__topLine"></div>
          <span className="home__title__text"></span>
          <div className="home__title__bottomLine"></div>
        </div>
        <Link to="/test">
          <button>시작</button>
        </Link>
      </div>
    );
  }
}
