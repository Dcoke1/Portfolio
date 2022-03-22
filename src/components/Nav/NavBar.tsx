import * as React from "react";
import { AppBar, Tabs, Tab, useMediaQuery } from "@mui/material/";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";

const currentTab = () => {
  let path = window.location.pathname;
  if (path === "/" || "#/") return 0;
  else if (path === "/projects" || "#/projects") return 1;
};

export const NavBar = (props: any) => {
  /* Tab buttons functionality */
  const [value, setValue] = React.useState(Number);
  const matches = useMediaQuery("(max-width:450px)");


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {}, [value]);

  return (
    <AppBar
      position="absolute"
      color="transparent"
      sx={{
        boxShadow: "none",
        paddingTop: "1%",
      }}
    >
      <Tabs
        component={"nav"}
        value={null}
        onChange={handleChange}
        textColor="inherit"
        color="rgb(255, 255, 255)"
        aria-label="home projects"
        TabIndicatorProps={{ style: { display: "none", background: "#D3935B" } }}
        sx={{
          color: "rgb(255, 255, 255)",
          fontSize: matches ? "12px" : "12px",
        }}
        centered
      >
        <Tab
          label={"Douglas Coke"}
          component={Link}
          to="/"
          sx={{ fontSize: "larger" }}
        />
        <Tab
          label={"Projects"}
          component={Link}
          to="/projects"
          sx={{ fontSize: "larger" }}
        />
        <a
          style={{ marginRight: ".8rem" }}
          href="https://github.com/Dcoke1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ color: "white" }} fontSize={"medium"} />
        </a>
        <a
          href="https://www.linkedin.com/in/douglascoke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn sx={{ color: "white" }} fontSize={"medium"} />
        </a>
      </Tabs>
    </AppBar>
  );
};
