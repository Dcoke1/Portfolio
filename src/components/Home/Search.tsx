import * as React from "react";
import { section_, section_height, section_shdw } from "./Assets/section_style";
import {
  Stack,
  Button,
  TextField,
  Typography,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";

export const Search = () => {
  const [images, setData] = React.useState([]);
  const [userQuery, setQuery] = React.useState(String);
  const [input, setInput] = React.useState("nasa");
  const matches = useMediaQuery("(max-width:798px)");

  let small = "~small.jpg";

  const handleChange = (event:any) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (value:any) => {
    setInput(value);
  };

  React.useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?q=${input}`)
      .then((obj) => obj.json())
      .then((res) => setData(res.collection.items.slice(0, 50)))
      .catch((err) => console.log(err));
  }, [input]);

  return (
    <Stack
      component="section"
      sx={{
        ...section_,
        ...section_height,
        ...section_shdw,
        maxWidth: "100%",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        style={{ marginTop: matches ? "10vh" : undefined }}
      >
        {"Search Space Stuff"}
      </Typography>
      <TextField
        id="search-field"
        label="Search"
        color="warning"
        variant="standard"
        value={userQuery}
        onChange={handleChange}
        sx={{ maxWidth: "400px", margin: "1rem auto" }}
        fullWidth
      />
      <Button
        color="warning"
        variant="outlined"
        onClick={() => handleSubmit(userQuery)}
      >
        Search
      </Button>
      <ImageList
        sx={{
          maxWidth: 500,
          height: 450,
          marginBottom: matches ? "10vh" : undefined,
        }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {images.map((item: any, key: number) => (
          <ImageListItem key={key}>
            <img
              src={`${
                JSON.stringify(item["href"]).slice(1, -16) +
                item["data"][0]["nasa_id"] +
                small
              }`}
              srcSet={`${
                JSON.stringify(item["href"]).slice(1, -16) +
                item["data"][0]["nasa_id"] +
                small
              }`}
              alt={"woven images"}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};
