import React from "react";
import { render, waitForElement, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "../src/components/display";
import Dashboard from "../src/components/dashboard";
import App from "./App";

describe("<App/>", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders 'Score Board'", () => {
    const { getByText } = render(<App />);

    const text = getByText(/score board/i);

    expect(text).toBeInTheDocument();
  });
});

describe("<Display/>", () => {
  it("should render Strikes and Balls header text", () => {
    const { getByText } = render(<Display />);
    expect(getByText(/strikes/i)).toBeInTheDocument();
    expect(getByText(/balls/i)).toBeInTheDocument();
  });
  it("should render correct ball count", async () => {
    const { getByText } = render(<Display balls={2} strikes={1} />);

    await waitForElement(() => getByText(/balls: 2/i));
  });
  it("should render correct strike count", async () => {
    const { getByText } = render(<Display balls={2} strikes={1} />);

    await waitForElement(() => getByText(/strikes: 1/i));
  });
});

describe("<Dashboard/>", () => {
  it("should have buttons that render a fn when clicked", () => {});
});
