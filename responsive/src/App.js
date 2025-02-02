import { Button } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <div>
      <h2>neco</h2>
      <Button variant="text" color="primary" size="large">
        Text
      </Button>
      <Button variant="contained" color="secondary" size="medium">
        Contained
      </Button>
      <Button variant="outlined" color="primary" size="small">
        Outlined
      </Button>
    </div>
  );
};

export default App;
