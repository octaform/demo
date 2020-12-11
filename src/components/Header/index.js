import React from "react";
import Icon from "../Icon";

const Header = ({ title, subTitle }) => {
  return (
    <header className="header">
      <div className="container">
        <a className="logo" href="https://github.com/octaform/octaform" rel="noopener noreferrer" target="_blank">
          <Icon slug="logo" className="logo__icon" />
          <p className="logo__content">
            <span className="logo__title">{title}</span>
            <span className="logo__description">{subTitle}</span>
          </p>
        </a>
      </div>
    </header>
  )
}

export default Header;
