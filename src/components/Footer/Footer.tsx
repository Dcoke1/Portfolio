import * as React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import logo from "./logo.svg";

export const Footer = () => {

  const matches = useMediaQuery("(max-width:798px)");

  return (
    <Typography
      component={"footer"}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 2rem",
        background: "rgba(211,217,214,0.23715423669467783)",
        height: "10vh",
        borderTop: ".5px solid grey",
      }}
    >
      <span
        style={{
          display: matches ? "none" : "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {`Created with React`}
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          {`2022 Powered by `}
          <a
            className="nasa_link"
            href="https://api.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >{`${"Nasa Api"}`}</a>
        </span>
      </span>
      <a
        href="https://www.linkedin.com/in/douglascoke/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact Me
      </a>
    </Typography>
  );
};
