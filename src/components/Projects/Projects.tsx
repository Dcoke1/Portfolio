import space from "./space1.jpeg";
import Zoom from "react-reveal/Zoom";
import img1 from "../Projects/assets/image1.png";
import img2 from "../Projects/assets/image2.png";
import img3 from "../Projects/assets/image3.png";
import img4 from "../Projects/assets/image4.png";
import img5 from "../Projects/assets/image5.png";
import img6 from "../Projects/assets/image6.png";

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
      title: "Jeremiahs ( E-Commerce )",
      description: `MERN CRUD e-commerce web application utilizing 
      Redux for state management, user authentication & authorization, 
      JWT for security, and React-Router for route switch. Hosted on Heroku.
      Shop designer mens wear @ Jeremiahs!
      `,
      url: "https://jeremiahs.herokuapp.com/",
    },
    {
      img: img2,
      title: "Realtor App",
      description: `Created with React & Next.JS utilizing Rapid Api for property details. Search and Sort through properties For-Sale and For-Rent!`,
      url: "https://realtor-app-khaki.vercel.app/",
    },
    {
      img: img3,
      title: "Crypto News App",
      description: `Created with React/Redux, Rapid API, Ant Design & Chart.JS`,
      url: "https://dcoke1.github.io/crypto-news/",
    },
    {
      img: img4,
      title: "Westgate Resorts Las Vegas Landing Page",
      description: `Created with HTML, SCSS, Javascript, Java Server Pages`,
      url: "https://www.westgateresorts.com/hotels/nevada/las-vegas/westgate-las-vegas-resort-casino/",
    },
    {
      img: img5,
      title: "Sample Landing Page",
      description: `Created with SASS and Vue.js for Udundi`,
      url: "https://sample-site-udundi.vercel.app/",
    },
    {
      img: img6,
      title: "Sample Landing Page 2",
      description: `Created with Html & Css for PSCU`,
      url: "https://dcoke1.github.io/pscu-landing-page/",
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
