import * as React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { styles } from "./Assets/section_style";
import { Nasa } from "./Nasa";
import { Skills } from "./Skills";
import { Mars } from "./Mars";
import { About } from "./About";
import { Footer } from "../Footer/Footer";
import image from "./Assets/spacexxxx.jpeg";
import Pulse from "react-reveal/Pulse";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import {
  Box,
  Stack,
  Typography,
  Paper,
  IconButton,
  useMediaQuery,
} from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

type ContainerProps = {
  sections: Array<JSX.Element>;
};

export const Home = () => {
  const elements = [<About />, <Nasa />, <Skills />, <Mars />];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Hero />
        <Container sections={elements} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

const Container = ({ sections }: ContainerProps) => {
  const [num, setNum] = React.useState(0);
  const med = useMediaQuery("(max-width:798px)");
  const sm = useMediaQuery("(max-width:450px)");

  let section_colors = ["rgb(255, 255, 255, .99)", "rgb(47, 50, 54, .98)"];

  React.useEffect(() => {}, [num]);

  const increment = () => {
    num === section_colors.length - 1 ? setNum(0) : setNum(num + 1);
  };

  const Toggle = () => {
    return (
      <IconButton
        style={{ position: "absolute", top: ".5rem", right: ".5rem" }}
        size="small"
        onClick={() => increment()}
      >
        <LightModeIcon />
        {med ? undefined : "Toggle"}
      </IconButton>
    );
  };

  return (
    <Paper
      style={{
        color: "rgba(0, 0, 0, 0.87)",
        transition: "all 0.5s ease",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minWidth: "0px",
        overflowWrap: "break-word",
        backgroundColor: `${section_colors[num]}`,
        border: "0px solid rgba(0, 0, 0, 0.125)",
        borderRadius: "1rem",
        overflow: "visible",
        margin: "-64px 1.5rem 0 32px",
        boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
      }}
      elevation={5}
    >
      <Toggle />
      {sections.map((section: JSX.Element, key: number) => (
        <section key={key} id={num === 0 ? "lightmode" : "darkmode"}>
          {section}
        </section>
      ))}
    </Paper>
  );
};

const Hero = () => {
  const med = useMediaQuery("(max-width:798px)");
  const sm = useMediaQuery("(max-width:450px)");

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(195deg, 
                          rgba(66, 66, 74, 0.5), 
                          rgba(25, 25, 25, 0.8)), 
                          url(${image}) transparent`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: sm ? "bottom" : undefined,
        minHeight: "75vh",
        width: "100%",
        opacity: "1",
        color: "rgb(52, 71, 103)",
        boxShadow: "none",
      }}
    >
      <Stack style={{ ...styles.text }} direction={med ? "column" : "row"}>
        <Stack
          style={{ textAlign: med ? "center" : undefined }}
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
        <Pulse>
          <Typography
            variant="h2"
            style={{
              textShadow:
                "0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00",
              marginTop: med ? "1.5vh" : undefined,
            }}
            fontWeight="400"
          >
            Mars Portfolio
          </Typography>
        </Pulse>
      </Stack>
    </Box>
  );
};
