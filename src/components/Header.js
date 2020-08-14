import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span className="header__logo">Wegram</span>
        <Link to="/home">
          <AiFillHome className="header__home-btn" />
        </Link>
      </div>
    );
  }
}
