import * as React from "react";
import space from "./space1.gif";
import { section_height } from "../Home/Assets/section_style";

export const Projects = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(0deg, rgb(41, 60, 72, 0.8), rgb(41, 60, 72, 0.85)),
        url(${space})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...section_height,
      }}
    >
      <h1 style={{color: "white"}}>Projects</h1>
    </div>
  );
};
