import React from "react";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import UploadButton from "./components/molecule/uploadButton";

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Translog Viewer
          </Typography>
          <UploadButton onUpload={(f) => console.log(f)} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
