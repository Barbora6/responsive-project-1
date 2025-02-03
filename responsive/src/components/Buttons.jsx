import { Button, Typography } from "@mui/material";
import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const Buttons = () => {
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
        sx={{ backgroundColor: "skyblue", color: "#888", margin: 5 }}
      >
        Můj unikátní tlačítko.
      </Button>
    </div>
  );
};

export default Buttons;
