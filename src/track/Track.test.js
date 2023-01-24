import { render, screen, waitFor } from "@testing-library/react";
import Track from "./Track";
import { getCoinPrice } from "../api/api";

// Check a coin is rendered when it is fetched
jest.mock("../api/api");
describe("Coin tracking table", () => {
  // After each test clear te mock
  beforeEach(() => jest.clearAllMocks());

  it("should render coin name and price when api responds", async () => {
    // Call the getCoinPrice function
    getCoinPrice.mockResolvedValue({
      data: {
        amount: "1020.25",
        currency: "USD",
      },
    });

    // render the component
    render(<Track />);

    // See if the mock value is rendered
    await waitFor(() => {
      screen.getByText("1020.25");
    });
  });

  it("should render error message when api fails", async () => {
    getCoinPrice.mockResolvedValue({});
    render(<Track />);
    await waitFor(() => {
      screen.getByText("error");
    });
  });
});
