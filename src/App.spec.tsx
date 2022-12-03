import { render, screen } from "@testing-library/react";
import App from "./App";
import { __uploadData } from "./components/molecule/uploadButton";
import userEvent from "@testing-library/user-event";

jest.mock("./components/molecule/uploadButton");

describe("app", () => {
  it("lists log entries", async () => {
    render(<App />);
    __uploadData(["the_entry"]);
    expect(await screen.findByText("the_entry")).toBeInTheDocument();
  });

  it("renders one line per entry", async () => {
    render(<App />);
    __uploadData(["the_entry\n", "the_other_entry"]);
    expect(await screen.findByText("the_entry")).toBeInTheDocument();
  });

  it("displays event help dialog", async () => {
    render(<App />);
    __uploadData(["2022-05-04T12:09:47-04:00 GERM CON wwww/github 0.0"]);
    const helpButton = await screen.findByLabelText("Event Help");
    userEvent.click(helpButton);
    expect(await screen.findByText("Event: CON")).toBeInTheDocument();
  });
});
