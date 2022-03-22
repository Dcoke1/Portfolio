import * as React from "react";
import space from "./space1.gif";
import { section_height } from "../Home/Assets/section_style";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material/";

export const Projects = (props: any) => {
  const projects = [
    {
      img: "",
      message: "Details Matter",
    },
    {
      img: "",
      message: "Scalable",
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
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
      {projects.map((item) => {
        return <ProjectCard image={item.img} name={item.message}/>
      })}
    </div>
  );
};

const ProjectCard = (props:any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${props.image}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
