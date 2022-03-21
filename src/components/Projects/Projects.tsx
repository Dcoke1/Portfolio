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
        background: `linear-gradient(195deg, 
          rgba(66, 66, 74, 0.4), 
          rgba(25, 25, 25, 0.4)),
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
