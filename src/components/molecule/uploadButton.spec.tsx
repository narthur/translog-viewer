import { render, screen, waitFor } from "@testing-library/react";
import UploadButton from "./uploadButton";
import userEvent from "@testing-library/user-event";

describe("upload button", () => {
  it("opens form", () => {
    render(<UploadButton />);
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("closes form", async () => {
    render(<UploadButton />);
    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByRole("button", { name: "Cancel" }));
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
  });

  it("uploads file", async () => {
    const onUpload = jest.fn();
    render(<UploadButton onUpload={onUpload} />);
    userEvent.click(screen.getByRole("button"));
    const file = new File([""], "test.txt");
    const fileInput = await screen.findByLabelText("Choose File");
    userEvent.upload(fileInput, file);
    userEvent.click(screen.getByRole("button", { name: "Upload" }));
    await waitFor(() => expect(onUpload).toHaveBeenCalledWith(file));
  });
});
