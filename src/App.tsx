import React from "react";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Translog Viewer
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
