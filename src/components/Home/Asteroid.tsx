import * as React from "react";
import { section_, section_height } from "./Assets/section_style";
import mars from "./Assets/mars.png";
import asteroid from "./Assets/asteroid.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  Box,
  Typography,
  Chip,
  Stack,
  IconButton,
  Paper,
  useMediaQuery
} from "@mui/material/";

export const Asteroid = () => {
  const [num, setNum] = React.useState(0);
  const matches = useMediaQuery("(max-width:798px)");

  let space_color = [
    "transparent",
    "rgb(222, 184, 135, .75)",
    "rgb(47, 50, 54, .75)",
    "rgb(41, 60, 72, .75)",
  ];

  const skills = [
    "JavaScript/Es6",
    "TypeScript",
    "React",
    "Redux",
    "Context",
    "Node.JS",
    "Bootstrap",
    "JQuery",
    "LESS",
    "SASS/SCSS",
    "MVC Pattern",
    "Object Orientated Programming",
    "Command line Inteface",
    "JSON",
    "Material UI",
    "Webpack",
    "Agile",
    "Atlassian / Jira",
    "Git",
  ];

  const increment = (colors: Array<string>) => {
    num === colors.length - 1 ? setNum(0) : setNum(num + 1);
  };

  React.useEffect(() => {}, [num]);

  return (
    <Box
      component="section"
      style={{
        position: "relative",
        backgroundImage: `url(${asteroid})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundColor: `${space_color[num]}`,
        transition: "all 0.5s ease",
      }}
    >
      <Stack sx={{ ...section_, ...section_height, color: "white" }} direction="row">
        <aside style={{ marginRight: matches ? "0rem" : "1rem" }}>
          <Typography
            variant="h2"
            style={{
              textAlign: matches ? "center" : undefined,
              textShadow: "2px 2px rgb(47 50 54 / 90%)",
            }}
          >
            Skills
          </Typography>
          <div style={{ padding: ".8rem 0" }}>
            {skills.map((item, key) => (
              <Chip
                key={key}
                label={item}
                size="medium"
                style={{ fontSize: "large", fontWeight: "bolder" }}
                color="warning"
              />
            ))}
          </div>
          <Paper
            sx={{
              p: ".5rem",
              color: "white",
              backgroundColor: "rgb(0, 0, 0, .2)",
            }}
            elevation={8}
          >
            <Typography
              variant="body1"
              style={{ fontSize: "18px", fontWeight: "bolder" }}
            >
              {`4 years of Front End development translating marketing design mock ups
          into highly functional, mobile responsive, pixel perfect web
          applications. Leveraging Javascript for data processing, testing, api
          endpoints across the server and other solutions to everyday business
          needs.`}
            </Typography>
          </Paper>
        </aside>
        <aside>
          <img style={{ display: matches ? "none" : undefined}} src={mars} alt="mars_photo" />
        </aside>
      </Stack>
      <IconButton
        style={{ position: "absolute", top: ".5rem", right: ".5rem" }}
        size="small"
        onClick={() => increment(space_color)}
      >
        <LightModeIcon />
       { matches ? undefined : "Toggle Switch" }
      </IconButton>
    </Box>
  );
};
