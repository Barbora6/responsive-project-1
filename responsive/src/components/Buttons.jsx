import { Button, styled, Typography } from "@mui/material";
import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const Buttons = () => {
  const BlueButton = styled(Button)({
    backgroundColor: "darkblue",
    color: "white",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  });

  const RedButton = styled(Button)({
    backgroundColor: "red",
    color: "white",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  });

  return (
    <div>
      <Button variant="text" color="primary" size="medium">
        TEXT
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<IoMdSettings />}
      >
        Text
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        startIcon={<FaPlus />}
      >
        Add new post
      </Button>
      <Button variant="outlined" color="secondary" size="small">
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        Nadpis h1, ale užívá paragraph.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "darkblue",
          color: "white",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue"
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white"
          }
        }}
      >
        Můj unikátní tlačítko.
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "red",
          color: "white",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue"
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white"
          }
        }}
      >
        Můj unikátní tlačítko.
      </Button>
      <BlueButton>Modré tlačítko</BlueButton>
      <RedButton>Červené tlačítko</RedButton>
    </div>
  );
};

export default Buttons;
