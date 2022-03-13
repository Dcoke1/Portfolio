import * as React from "react";
import {
  ImageList,
  ImageListItem,
  Stack,
  Button,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material/";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { section_ } from "./Assets/section_style";
import rover from "./Assets/rover.png";
const nasa_key = process.env.REACT_APP_NASA_API_KEY;

type MarsButtonProps = {
  setInput: Function;
  cameras: Array<object>;
};

type MarsListProps = {
  data: any;
  view: string;
};

type MarsContainerProps = {
  title: string;
  subtitle: string;
  length: number;
  date: string;
  decrement: JSX.Element;
  increment: JSX.Element;
  btns: JSX.Element;
  list: JSX.Element;
};

export const Mars = () => {
  const [data, setData] = React.useState(Array);
  const [view, setView] = React.useState("navcam");
  const [day, setDay] = React.useState(1);

  const cams = [
    { fhaz: "Front Camera" },
    { rhaz: "Rear Camera" },
    { navcam: "Navigation Camera" },
    { mardi: "Mars Descent Imager" },
    { mahli: "Mars Hand Lens Imager" },
    { mast: "Mast Camera" },
    { chemcam: "Chemistry and Camera Complex" },
  ];

  React.useEffect(() => {
    setData([]);
    const url = {
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=`,
      date: getYesterday(day).toLocaleDateString("fr-CA"),
      camurl: `&camera=${view}`,
      apiurl: `&api_key=${nasa_key}`,
    };
    fetch(url.url + url.date + url.camurl + url.apiurl)
      .then((res) => res.json())
      .then((obj) => setData(obj.photos))
      .catch((e) => console.log(e));
  }, [view, day]);

  const getYesterday = (props: number) => {
    const today = new Date();
    const yest = new Date(today);

    yest.setDate(yest.getDate() - props);
    return yest;
  };

  return (
    <MarsContainer
      title={"Mars Curiosity Rover Photos"}
      subtitle={
        "Choose a camera, each has a unique function and perspective, and they are named as follows:"
      }
      length={data.length}
      date={getYesterday(day).toDateString()}
      decrement={
        <IconButton
          color="error"
          onClick={() => setDay(day < 30 ? day + 1 : day)}
          sx={{ padding: "0" }}
        >
          <ArrowCircleLeftIcon fontSize="large" />
        </IconButton>
      }
      increment={
        <IconButton
          color="error"
          onClick={() => setDay(day > 1 ? day - 1 : day)}
          sx={{ padding: "0" }}
        >
          <ArrowCircleRightIcon fontSize="large" />
        </IconButton>
      }
      btns={<MarsButton cameras={cams} setInput={setView} />}
      list={<MarsList data={data} view={view} />}
    />
  );
};

const MarsButton = ({ setInput, cameras }: MarsButtonProps) => {
  const handleChange = (e: string) => {
    setInput(e);
  };

  return (
    <Stack style={{ flexWrap: "wrap", gap: "5px" }} direction="row">
      {cameras.map((item: any, key: number) => {
        return (
          <Button
            key={key}
            onClick={() => handleChange(Object.keys(item).toString())}
            color="inherit"
            variant="contained"
            sx={{
              color: "white",
              fontWeight: "bolder",
              background: "#d17e3a",
              flex: "1 1 135px",
            }}
          >
            {Object.values(item)}
          </Button>
        );
      })}
    </Stack>
  );
};

const MarsList = ({ data, view }: MarsListProps) => {
  return data.length > 0 ? (
    <ImageList
      sx={{
        width: "100%",
        height: 400,
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr)) !important",
        gridColumnGap: "6px",
        gridRowGap: "6px",
      }}
      rowHeight={400}
    >
      {data.map((item: any) => (
        <ImageListItem key={item.id}>
          <img
            src={item.img_src}
            srcSet={item.img_src}
            alt={"camera_images"}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  ) : (
    <Stack
      style={{
        margin: "1rem",
        height: "400px",
        justifyContent: "center",
        color: "red",
      }}
    >
      {`No ${view.toUpperCase()} Images Found`}
    </Stack>
  );
};

const MarsContainer = ({
  title,
  subtitle,
  length,
  date,
  decrement,
  increment,
  btns,
  list,
}: MarsContainerProps) => {
  
  const matches = useMediaQuery("(max-width:798px)");

  return (
    <Box
      component="section"
      style={{
        background: "rgb(41, 60, 72, .95)",
        margin: "2% 2% 0",
        borderRadius: "2% 2% 0 0",
        color: `white`,
        boxShadow: "1px 3px 5px rgba(0,0,0,.05)",
      }}
    >
      <Stack
        sx={{
          ...section_,
          padding: "7.5vh auto 0",
        }}
        direction="column"
      >
        <Typography
          variant="h2"
          style={{
            marginTop: "10vh",
            marginBottom: "0.5em",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <img
          style={{ display: matches ? "none" : undefined }}
          src={rover}
          alt="mars_rover"
        />
        <Stack
          style={{
            alignItems: "center",
          }}
          direction={`${matches ? "column" : "row"}`}
        >
          <Typography
            variant="h6"
            style={{ margin: ".5rem auto", fontWeight: "bolder" }}
          >{`Earth Day ${date}`}</Typography>
          <Stack direction="column">
            <Stack style={{ justifyContent: "center" }} direction="row">
              {decrement}
              {increment}
            </Stack>
            <i style={{ marginLeft: ".5rem", color: "red" }}>Select Day</i>
          </Stack>
          <Typography
            style={{ fontWeight: "bolder" }}
            variant="h6"
          >{`${length} photos available`}</Typography>
        </Stack>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: matches ? ".8rem" : undefined }}
        >
          {subtitle}
        </Typography>
        {btns}
        {list}
      </Stack>
    </Box>
  );
};
