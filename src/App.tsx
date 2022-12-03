import React, { useState } from "react";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import UploadButton from "./components/molecule/uploadButton";
import Entries from "./components/organism/entries";

function App() {
  const [file, setFile] = useState<File>();

  return (
    <>
      <AppBar position={"sticky"}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Translog Viewer
          </Typography>
          <UploadButton onUpload={setFile} />
        </Toolbar>
      </AppBar>
      <Entries file={file} />
    </>
  );
}

export default App;
