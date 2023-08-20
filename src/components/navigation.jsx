import React from "react";
import logo from "../assets/logo.png";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container serass-logo-pos">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <img className="navbar-brand page-scroll" src={logo} alt="logo"></img>
        </div>

        {/* <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#contact" className="page-scroll">
                Contact Us
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};
