import * as React from "react";
import {
  ImageList,
  ImageListItem,
  Stack,
  Button,
  Paper,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material/";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { section_ } from "./Assets/section_style";
import rover from "./Assets/rover.png";
import Zoom from "react-reveal/Zoom";
import BasicModal from "./Modal";
const nasa_key = process.env.REACT_APP_NASA_API_KEY;

type MarsButtonProps = {
  cameras: Array<object>;
  setInput: Function;
};

type MarsListProps = {
  data: Array<unknown>;
  view: string;
  value: boolean;
};

type MarsContainerProps = {
  title: string;
  subtitle: string;
  date: string;
  length: number;
  decrement: JSX.Element;
  increment: JSX.Element;
  btns: JSX.Element;
  list: JSX.Element;
  btnToggle: any;
};

export const Mars = () => {
  const [data, setData] = React.useState(Array);
  const [view, setView] = React.useState("navcam");
  const [day, setDay] = React.useState(1);
  const [toggle, setToggle] = React.useState(false);

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

  const btnClick = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
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
      list={<MarsList data={data} view={view} value={toggle} />}
      btnToggle={() => btnClick()}
    />
  );
};

const MarsButton = ({ setInput, cameras }: MarsButtonProps) => {
  const handleChange = (e: string) => {
    setInput(e);
  };

  return (
    <Stack
      style={{ flexWrap: "wrap", gap: "5px", maxWidth: "1400px" }}
      direction="row"
    >
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

const MarsList = ({ data, view, value }: MarsListProps) => {
  return data.length > 0 ? (
    <ImageList
      sx={{
        width: "100%",
        height: !value ? 300 : 650,
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr)) !important",
        gridColumnGap: "6px",
        gridRowGap: "6px",
      }}
      rowHeight={300}
    >
      {data.map((item: any) => (
        <ImageListItem key={item.id}>
          <img
            src={item.img_src}
            srcSet={item.img_src}
            alt={"camera_images"}
            loading="lazy"
          />
          <BasicModal image={item.img_src} />
        </ImageListItem>
      ))}
    </ImageList>
  ) : (
    <Stack
      style={{
        margin: "1rem",
        height: "300px",
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
  btnToggle,
}: MarsContainerProps) => {
  const med = useMediaQuery("(max-width:798px)");
  const sm = useMediaQuery("(max-width:450px)");

  return (
    <Paper
      component="section"
      style={{
        margin: med ? "0" : "5%",
        padding: med ? "1.5rem" : "1.5rem 6rem",
        borderRadius: "1rem",
        position: "relative",
        backgroundColor: "rgb(255, 255, 255, .1)",
      }}
      elevation={2}
    >
      <Stack
        sx={{
          ...section_,
          padding: "7.5vh auto 0",
          maxWidth: "1200px",
        }}
        direction="column"
      >
        <Typography
          variant="h3"
          className="darkthemeSection"
          style={{
            display: "flex",
            flexDirection: med ? "column" : "row",
            alignItems: "center",
            fontSize: sm ? "2rem" : "2.5rem",
            marginTop: "5vh",
            marginBottom: med ? "0" : "0.5em",
            textAlign: "center",
          }}
        >
          {title}
          <img
            style={{ width: "4rem", marginLeft: "5px" }}
            src="https://api.nasa.gov/assets/footer/img/favicon-192.png"
            alt="nasa_logo"
          />
        </Typography>
        <Zoom>
          <img
            style={{ maxWidth: "300px", display: med ? "none" : undefined }}
            src={rover}
            alt="mars_rover"
          />
        </Zoom>
        <Stack
          style={{
            alignItems: "center",
          }}
          direction={`${med ? "column" : "row"}`}
        >
          <Typography
            variant="h6"
            className="darkthemeSection"
            style={{ margin: ".5rem auto", fontWeight: "bolder" }}
          >{`Earth Day ${date}`}</Typography>
          <Stack direction="column">
            <Stack style={{ justifyContent: "center" }} direction="row">
              {decrement}
              {increment}
            </Stack>
            <i style={{ marginLeft: ".5rem", color: "red" }}>Select Date</i>
          </Stack>
          <Typography
            variant="h6"
            className="darkthemeSection"
            style={{ fontWeight: "bolder" }}
          >{`${length} photos available`}</Typography>
        </Stack>
        <Typography
          variant="subtitle1"
          className="darkthemeSection"
          sx={{ fontSize: med ? ".8rem" : undefined }}
        >
          {subtitle}
        </Typography>
        {btns}
        {list}
      </Stack>
      <Button
        style={{ margin: "0 auto", display: "block" }}
        onClick={btnToggle}
      >
        Expand
      </Button>
    </Paper>
  );
};
