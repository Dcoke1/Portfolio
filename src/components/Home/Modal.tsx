import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import { useMediaQuery } from "@mui/material";

type modalProps = {
  image: string;
};

export default function BasicModal({ image }: modalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const sm = useMediaQuery("(max-width:450px)");
  const med = useMediaQuery("(max-width:797px)");

  return (
    <div
      style={{ position: "absolute", bottom: "0", right: "0", zIndex: "10" }}
    >
      <Button style={{ color: "white", minWidth: "0px" }} color="inherit" onClick={handleOpen}>
        <OpenWithIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: sm ? "88%" : med ? "80%" : "50%",
            height: sm ? "45%" : med ? "55%" : "60%",
            maxWidth: "650px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 1,
          }}
        >
          <img src={image} alt="modal_img" width={"100%"} height={"100%"} />
        </Box>
      </Modal>
    </div>
  );
}
