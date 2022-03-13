import * as React from "react";
import {
  Paper,
  Card,
  CardMedia,
  Typography,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material/";
const nasa_key = process.env.REACT_APP_NASA_API_KEY;

type DisplayCardProps = {
  url: string;
  type: string;
  explanation: string;
};

type DisplayInfoProps = {
  title: string;
  copyright: string;
};

type DisplayContainerProps = {
  displayInfo: JSX.Element;
  displayCard: JSX.Element;
  currentTime: string;
  setCalender: Function;
};

export const Nasa = () => {
  const [data, setData] = React.useState(Object);
  const [day, setDay] = React.useState(String);

  let clock = new Date().toLocaleDateString("en-CA");

  React.useEffect(() => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${nasa_key}&date=${day}&`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [day]);

  return (
    <DisplayContainer
      displayInfo={
        <DisplayInfo title={data.title} copyright={data.copyright} />
      }
      displayCard={
        <DisplayCard
          url={data.hdurl ? data.hdurl : data.url}
          type={data.media_type}
          explanation={data.explanation}
        />
      }
      setCalender={setDay}
      currentTime={`${clock}`}
    />
  );
};

const DisplayCard = ({ url, type, explanation }: DisplayCardProps) => {
  const matches = useMediaQuery("(max-width:798px)");
  return (
    <Card
      component="article"
      sx={{
        padding: matches ? "1rem" : "1.5rem",
        borderRadius: "1.5%",
      }}
    >
      {type === "video" ? (
        <iframe
          width="375"
          height="300"
          title="nasa_video"
          style={{ marginBottom: "1rem" }}
          src={url}
        ></iframe>
      ) : (
        <CardMedia
          component="img"
          className="nasa_img"
          image={url}
          alt={type}
          style={{
            float: "left",
            marginRight: "1rem",
            marginBottom: matches ? "1rem" : undefined,
            height: matches ? "300px" : "350px",
            width: matches ? "100%" : "400px",
            borderRadius: "2%",
          }}
        />
      )}
      <Typography
        variant="body1"
        color="text.secondary"
        style={{ textAlign: "justify" }}
      >
        {explanation}
      </Typography>
    </Card>
  );
};

const DisplayInfo = ({ title, copyright }: DisplayInfoProps) => {
  return (
    <div>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h5">
        <b>{copyright}</b>
      </Typography>
    </div>
  );
};

const DisplayContainer = ({
  displayInfo,
  displayCard,
  setCalender,
  currentTime,
}: DisplayContainerProps) => {
  const matches = useMediaQuery("(max-width:798px)");
  return (
    <Paper
      component="section"
      id="nasa"
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(41, 60, 72, .95)",
        color: "white",
        height: matches ? "auto" : "110vh",
        padding: matches ? "0rem !important" : undefined,
        margin: "2%",
        borderRadius: "2%",
        boxShadow: "0 3px 4px rgba(0,0,0,.05)",
      }}
    >
      <Stack
        style={{
          margin: matches ? "10vh 0" : undefined,
          maxWidth: "1200px",
          textAlign: "center",
        }}
      >
        {displayInfo}
        <TextField
          label="Search Article Dates"
          type="date"
          color="warning"
          defaultValue={currentTime}
          onChange={(e) => setCalender(e.target.value)}
          sx={{ width: 220, margin: "1rem auto" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {displayCard}
      </Stack>
    </Paper>
  );
};
