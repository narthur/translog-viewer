import React from "react";
import "./App.css";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import UploadButton from "./components/molecule/uploadButton";

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Translog Viewer
          </Typography>
          <UploadButton />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
