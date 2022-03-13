import * as React from "react";
import { Typography, useMediaQuery } from "@mui/material";

export const Footer = () => {

  const matches = useMediaQuery("(max-width:798px)");

  return (
    <Typography
      component={"footer"}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0 2rem",
        background: "rgba(211, 217, 214, 0.2)",
        height: "10vh",
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
        {`Created with React 2022`}
        </span>
        <span>
          {`Powered by `}
          <a
            className="nasa_link"
            href="https://api.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >{`${"Nasa Api"}`}</a>
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
