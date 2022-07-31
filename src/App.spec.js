import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { customRender } from "./tests/test-utils";
import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

describe("App test", () => {
  it("App getting renderd and navigating to news from list to article page", async () => {
    customRender(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => screen.findAllByText(/Loading/));

    await waitForElementToBeRemoved(() => screen.queryAllByText(/Loading/));

    const title = "Russia-Ukraine war: List of key events, day 157";
    fireEvent.click(await waitFor(() => screen.findByText(title)));

    expect(
      await waitFor(() => screen.findByTestId("news-heading-article"))
    ).toBeInTheDocument();
  });
});
