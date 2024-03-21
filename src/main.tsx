import { Button } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Loader } from "./components";
import { Theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <Loader />
      <Button color="primary" variant="contained">
        lalalala
      </Button>
    </Theme>
  </React.StrictMode>
);
