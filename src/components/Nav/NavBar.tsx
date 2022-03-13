import * as React from "react";
import { AppBar, Tabs, Tab, useMediaQuery } from "@mui/material/";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";

let path = window.location.pathname;

const currentTab = () => {
  if (path === "/react_portfolio") return 0;
  else if (path === "/projects") return 1;
};

export const NavBar = (props: any) => {
  /* Tab buttons functionality */
  const [value, setValue] = React.useState(currentTab);
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
        paddingTop: value === 1 ? "1%" : "3.5%",
      }}
    >
      <Tabs
        component={"nav"}
        value={value}
        onChange={handleChange}
        textColor="inherit"
        color="rgb(255, 255, 255)"
        aria-label="home projects"
        TabIndicatorProps={{ style: { background: "#D3935B" } }}
        sx={{
          color: "rgb(255, 255, 255)",
          fontSize: matches ? "12px" : undefined,
        }}
        centered
      >
        <Tab
          label={"Douglas Coke"}
          component={Link}
          to="/react_portfolio"
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
