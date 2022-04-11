import space from "./space1.jpeg";
import Zoom from "react-reveal/Zoom";
import img1 from "../Projects/assets/image1.png";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material/";

type projectsProps = {
  image: String;
  title: String;
  description: String;
  link: String;
};

export const Projects = (props: any) => {
  const projects = [
    {
      img: img1,
      title: "Jeremiahs (E-Commerce Website)",
      description: `MERN CRUD e-commerce web application utilizing 
      Redux for state management, user authentication & authorization, 
      JWT for security, and React-Router for route switch. Hosted on Heroku.
      Shop designer mens wear @ Jeremiahs!
      `,
      url: "https://jeremiahs.herokuapp.com/",
    },
    {
      img: "https://slp-statics.astockcdn.net/static_assets/staging/21fall/free/browse-paid-asset-collections/card-2.jpg?width=580",
      title: "Coming Soon",
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
      url: "",
    },
    {
      img: "https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg",
      title: "Coming Soon",
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
      url: "",
    },
    {
      img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/21/860915-freedom-financial-istock-082119.jpg",
      title: "Coming Soon",
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
      url: "",
    },
  ];

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          background: `linear-gradient(195deg, 
          rgba(66, 66, 74, 0.4), 
          rgba(25, 25, 25, 0.7)),
        url(${space})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {projects.map((item, key: number) => {
          return (
            <ProjectCard
              image={item.img}
              title={item.title}
              description={item.description}
              link={item.url}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, description, link }: projectsProps) => {
  return (
    <Zoom>
      <Card sx={{ margin: "6rem 1rem 1rem", maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={`${image}`}
          alt="projects"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={`${link}`} target="_blank" rel="noopener noreferrer">
            <Button size="small">See More</Button>
          </a>
        </CardActions>
      </Card>
    </Zoom>
  );
};
