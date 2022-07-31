import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { SourcesList } from "../";
import { customRender } from "../../../tests/test-utils";

describe("SourceList Test", () => {
  it("SourceList Render and selecting source", async () => {
    // Arrange
    customRender(<SourcesList />);

    // Act
    await waitFor(() => screen.findByText(/Loading/));

    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/));

    fireEvent.click(await waitFor(() => screen.findByText("ABC News (AU)")));

    // Assert
    expect(screen.getByText("Sources")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();

    expect(
      await waitFor(() => screen.findByText("ABC News"))
    ).toBeInTheDocument();

    // Assertion for active source
    expect(await waitFor(() => screen.findByText("ABC News (AU)"))).toHaveClass(
      "source__active"
    );

    expect.assertions(4);
  });
});
