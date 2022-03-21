import * as React from "react";
import { Typography, Stack, useMediaQuery } from "@mui/material";

export const Footer = () => {

  return (
    <Stack direction={"column"}>
      <Typography
        component={"footer"}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0 2rem",
          height: "20vh",
          fontFamily: "gemunu libre",
        }}
      >
        <Stack style={{ alignItems: "center" }} direction="row">
          <a
            className="nasa_link"
            href="https://api.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              fontFamily: "gemunu libre",
              color: "red",
              marginLeft: "5px",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "3.5rem" }}
              src="https://api.nasa.gov/assets/footer/img/favicon-192.png"
              alt="nasa_logo"
            />
            Nasa Api
          </a>
        </Stack>
        <a
          href="https://www.linkedin.com/in/douglascoke/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "gemunu libre" }}
        >
          Contact Me
        </a>
      </Typography>
    </Stack>
  );
};
