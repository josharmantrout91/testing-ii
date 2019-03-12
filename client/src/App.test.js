import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

describe("<App/>", () => {
  it("renders without crashing", () => {
    const helpers = render(<App />);
  });

  it("renders 'Score Board'", () => {
    const { getByText } = render(<App />);

    const text = getByText(/score board/i);

    expect(text).toBeInTheDocument();
  });
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
});
