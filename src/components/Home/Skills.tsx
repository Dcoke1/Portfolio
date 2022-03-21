import * as React from "react";
import { Box, Typography, Stack, useMediaQuery } from "@mui/material/";
import { icons } from "./Assets/skills_section/icons";
import Fade from "react-reveal/Fade";

type subSection = {
  heading: string;
  subHeading: string;
  body: string;
};

const skills_icons = [...icons];

const sub_skills = [
  {
    heading: "5 Years",
    subtitle: "Experience",
    body: "Front-end development using HTML, CSS, Javascript and Javascript frameworks ",
  },
  {
    heading: "20+",
    subtitle: "App Features",
    body: "Deployed many web based features meeting and exceeding marketing team's expectations",
  },
  {
    heading: "10+",
    subtitle: "Javascript Libraries",
    body: "Including Material UI, Bootstrap, Moment.Js, Leaflet.Js, Chart.Js, Stencil.Js and more",
  },
];

export const Skills = () => {
  const med = useMediaQuery("(max-width:798px)");
  const sm = useMediaQuery("(max-width:450px)");

  React.useEffect(() => {}, []);

  return (
    <Fade>
      <Stack
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: med ? "2rem 2rem 6rem" : "1rem 6rem 6rem",
        }}
        direction={"column"}
      >
        <Stack
          component="div"
          style={{
            justifyContent: "space-around",
            flexFlow: "wrap",
            marginBottom: "6rem",
          }}
          direction={"row"}
        >
          {skills_icons.map((item: string, key: number) => (
            <img
              key={key}
              src={item}
              alt="skills_section"
              style={{
                maxWidth: sm ? "100px" : "250px",
                height: "50px",
                flex: "1 1 45px",
                padding: "1rem",
              }}
            />
          ))}
        </Stack>
        <Stack
          component="div"
          style={{ justifyContent: "space-around" }}
          direction={med ? "column" : "row"}
        >
          {sub_skills.map((item: any, key: number) => (
            <SubSection
              key={key}
              heading={item.heading}
              subHeading={item.subtitle}
              body={item.body}
            />
          ))}
        </Stack>
      </Stack>
    </Fade>
  );
};

const SubSection = ({ heading, subHeading, body }: subSection) => {

  return (
    <Box
      style={{ textAlign: "center", margin: "2.5rem 0", padding: "0 .5rem" }}
    >
      <Typography variant="h3" style={{ color: "#ed6c02", fontSize: "2.6rem" }}>
        {heading}
      </Typography>
      <Typography
        variant="h5"
        className="darktheme"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          margin: "1rem 0 .5rem",
        }}
      >
        {subHeading}
      </Typography>
      <Typography
        variant="body1"
        className="darktheme"
        color="text.secondary"
        style={{ fontSize: ".9rem" }}
      >
        {body}
      </Typography>
    </Box>
  );
};
