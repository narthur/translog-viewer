import { UploadButtonProps } from "../uploadButton";
import { useEffect } from "react";
import { act } from "@testing-library/react";

let __onUpload: UploadButtonProps["onUpload"];

export function __uploadData(data: any): void {
  act(() => {
    __onUpload && __onUpload(new File(data, "test.txt"));
  });
}

export default function UploadButton({ onUpload }: UploadButtonProps) {
  useEffect(() => {
    __onUpload = onUpload;
  }, [onUpload]);

  return <div />;
}
