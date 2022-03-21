import * as React from "react";
import BasicDatePicker from "./Calender";
import { Card, CardMedia, Typography, useMediaQuery } from "@mui/material/";
const nasa_key = process.env.REACT_APP_NASA_API_KEY;

type DisplayCardProps = {
  url: string;
  type: string;
  title: string;
  explanation: string;
};

type DisplayCalenderProps = {
  setCalender: Function;
  currentTime: string;
};

type DisplayContainerProps = {
  header: string;
  subHeader: string;
  displayCard: JSX.Element;
  displayCalender: JSX.Element;
};

export const Nasa = () => {
  const [data, setData] = React.useState(Object);
  const [date, setDay] = React.useState(new Date().toLocaleDateString());

  React.useEffect(() => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${nasa_key}&date=${new Date(
      date
    ).toLocaleDateString("en-CA")}&`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [date]);

  return (
    <DisplayContainer
      header={"Search Articles"}
      subHeader={
        "NASA astronomy articles, pictures and videos for more than 25 years.... "
      }
      displayCard={
        <DisplayCard
          url={data.hdurl ? data.hdurl : data.url}
          type={data.media_type}
          title={data.title}
          explanation={data.explanation}
        />
      }
      displayCalender={
        <DisplayCalender currentTime={date} setCalender={setDay} />
      }
    />
  );
};

const DisplayContainer = ({
  header,
  subHeader,
  displayCalender,
  displayCard,
}: DisplayContainerProps) => {
  const med = useMediaQuery("(max-width:798px)");
  const sm = useMediaQuery("(max-width:450px)");
  return (
    <section
      id="nasa_section"
      style={{
        height: "auto",
        alignItems: "center",
        background: `linear-gradient(195deg, rgb(47, 50, 54, .97), rgb(25, 25, 25))`,
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: sm ? "6rem 0rem 0rem" : med ? "6rem 2rem" : "6rem",
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "left",
            padding: sm ? "0 2rem" : undefined,
          }}
        >
          <Typography variant="h3" className="darkthemeSection" style={{ 
            display: "flex", alignItems: "center", fontSize: "2.5rem" }}>
            {header}
            <img
              style={{ width: sm ? "0" : med ? "2.5rem" : "3.5rem" }}
              src="https://api.nasa.gov/assets/footer/img/favicon-192.png"
              alt="nasa_logo"
            />
          </Typography>
          <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
            {subHeader}
          </Typography>
        </div>
        {displayCalender}
        {displayCard}
      </div>
    </section>
  );
};

const DisplayCard = ({ url, type, title, explanation }: DisplayCardProps) => {
  const med = useMediaQuery("(max-width:798px)");
  const sm = useMediaQuery("(max-width:450px)");
  return (
    <Card
      component="article"
      className="darkthemebackground"
      sx={{
        padding: med ? "3rem 1rem" : "1.5rem 1.5rem 2.5rem",
        borderRadius: sm ? "0" : "1.5%",
        maxWidth: "798px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h4"
        className="darkthemeSection"
        style={{
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        {title}
      </Typography>
      <div>
        {type === "video" ? (
          <iframe
            width="auto"
            height="300"
            title="nasa_video"
            loading="lazy"
            style={{
              width: med ? "100%" : undefined,
              borderRadius: "2%",
              marginRight: "1rem",
              marginBottom: med ? "0.5rem" : undefined,
              float: "left",
            }}
            src={url}
          ></iframe>
        ) : (
          <CardMedia
            component="img"
            className="nasa_img"
            image={url}
            alt={type}
            loading="lazy"
            style={{
              marginRight: "1rem",
              marginBottom: med ? "1rem" : undefined,
              height: med ? "350px" : "300px",
              width: med ? "100%" : "350px",
              borderRadius: "2%",
              float: "left",
              position: "relative",
              zIndex: "1",
              opacity: "1",
              background: "transparent",
              color: "rgb(52, 71, 103)",
              boxShadow: "none",
            }}
          />
        )}
        <Typography
          variant="body1"
          className="darkthemeSection"
          style={{
            textAlign: "justify",
            width: "100%",
          }}
        >
          {explanation}
        </Typography>
      </div>
    </Card>
  );
};

const DisplayCalender = ({
  setCalender,
  currentTime,
}: DisplayCalenderProps) => {

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem 0 1rem",
      }}
    >
      <BasicDatePicker dateVal={currentTime} setVal={setCalender} />
    </div>
  );
};
