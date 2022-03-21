import * as React from "react";
import { icons } from "./Assets/about_section/icons";
import mars from "./Assets/mars.png";
import { Typography, Stack, useMediaQuery } from "@mui/material/";
import Zoom from 'react-reveal/Zoom';

export const About = () => {
  const med = useMediaQuery("(max-width:798px)");

  const array = [
    {
      icon: icons[0],
      subTitle: "Details Matter",
      body: "Translating mockups to state-of-the-art, easy to use, mobile responsive, user-friendly, stateful websites and applications",
    },
    {
      icon: icons[1],
      subTitle: "Scalable",
      body: "Delivering apps that scale using modular, reusable, component based UI design",
    },
    {
      icon: icons[2],
      subTitle: "Data Driven",
      body: "Data driven development leveraging functional, asynchronous programming to deliver JSON content",
    },
    {
      icon: icons[3],
      subTitle: "Agile",
      body: "Agile methodology deploying products rapidly to production with constant revision",
    },
  ];

  React.useEffect(() => {}, []);

  return (
    <Stack
      component={"section"}
      sx={{
        display: med ? "block" : undefined,
        maxWidth: "1400px",
        margin: "0 auto",
        padding: med ? "6rem 2rem" : "6rem",
      }}
      direction={"column"}
    >
      <Typography
        variant="h3"
        className="darktheme"
        style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}
      >
        About
      </Typography>
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
        direction="row"
      >
        <aside
          style={{
            width: "auto",
            display: med ? undefined : "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gridColumnGap: "0px",
            gridRowGap: "0px",
          }}
        >
          {array.map((item: any, key: number) => (
            <Stack key={key} style={{ margin: "1rem 0" }}>
              <span>{item.icon}</span>
              <Typography
                component="span"
                className="darktheme"
                style={{
                  font: "bolder",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  margin: "1rem 0",
                }}
              >
                {item.subTitle}
              </Typography>
              <Typography
                variant="body2"
                className="darktheme"
                color="text.secondary"
                style={{ fontSize: ".9rem", paddingRight: "1rem" }}
              >
                {item.body}
              </Typography>
            </Stack>
          ))}
        </aside>
        <aside style={{ width: med ? "0" : "100%", textAlign: "right" }}>
        <Zoom>
          <img
            style={{ display: med ? "none" : "undefined", maxWidth: "275px" }}
            src={mars}
            alt="mars_photo"
          />
          </Zoom>
        </aside>
        
      </Stack>
    </Stack>
  );
};
