import * as React from "react";
import { section_img, styles } from "./Assets/section_style";
import { Nasa } from "./Nasa";
import { Mars } from "./Mars";
import { Search } from "./Search";
import { Asteroid } from "./Asteroid";
import image from "./Assets/img1.jpeg";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Stack, Typography, useMediaQuery } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const Home = (props: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Hero />
        <Asteroid />
        <Nasa />
        <Search />
        <Mars />
      </ThemeProvider>
    </>
  );
};

const Hero = () => {
  const matches = useMediaQuery("(max-width:798px)");

  return (
    <Stack
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${image})`,
        ...section_img,
        height: matches ? "110vh" : "135vh",
        backgroundPosition: matches ? "66%" : "center",
        margin: "2% 2% 1%",
        borderRadius: "2%",
        boxShadow: "0 30px 40px rgba(0,0,0,.1)",
      }}
    >
      <Stack
        style={{ ...styles.text, marginBottom: matches ? "10vh" : "35vh" }}
        direction={matches ? "column" : "row"}
      >
        <Stack
          style={{ textAlign: matches ? "center" : undefined }}
          direction="column"
        >
          <Typography variant="h1" fontFamily={"Gothic A1"}>
            Douglas
            <br />
            <span
              style={{
                textDecoration: "underline #D3935B",
                textUnderlinePosition: "under",
                textDecorationThickness: "from-font",
              }}
            >
              Coke
            </span>
          </Typography>
          <Typography variant="h5" letterSpacing="0.1em" paddingTop="0.8rem">
            Front-End Web Developer
          </Typography>
        </Stack>
        <Typography
          variant="h2"
          style={{
            textShadow:
              "0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00",
              marginTop: matches ? "1.5vh" : undefined, 
          }}
          fontWeight="400"
        >
          Mars Portfolio
        </Typography>
      </Stack>
    </Stack>
  );
};