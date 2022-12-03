import { PropsWithChildren, useState } from "react";
import { ICellTextProps } from "ka-table/props";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export default function EventCell({
  value,
}: PropsWithChildren<ICellTextProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span>{value}</span>
      <IconButton aria-label={"Event Help"} onClick={() => setIsOpen(true)}>
        <InfoIcon />
      </IconButton>
      <Dialog open={isOpen}>
        <DialogTitle>Event: {value}</DialogTitle>
      </Dialog>
    </>
  );
}
