import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";

export default function UploadButton({
  onUpload,
}: {
  onUpload?: (data: File) => void;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<File>();
  return (
    <>
      <Button
        variant={"contained"}
        color={"secondary"}
        onClick={() => setIsOpen(true)}
      >
        Upload Logfile
      </Button>
      <Dialog open={isOpen}>
        <DialogTitle>Upload Logfile</DialogTitle>
        <DialogContent>
          <TextField
            type={"file"}
            inputProps={{
              "aria-label": "Choose File",
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) {
                setData(file);
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              setIsOpen(false);
              if (onUpload && data) {
                onUpload(data);
              }
            }}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
