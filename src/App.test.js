import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { getCoinPrice, getCurrencyList } from "./api/api";

let coinList = null;
beforeEach(() => {
  // setup mocked coin list
  coinList = [
    {
      code: "BTC",
      name: "Bitcoin",
    },
    {
      code: "ETH",
      name: "Ethereum",
    },
  ];
});

afterEach(() => {
  // cleanup on exiting
  coinList = null;
});

test("renders title text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Crypto Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

// Coin is added
// Coin is updated
jest.mock("./api/api");
describe("Fetch price data", () => {
  // After each test clear the mock
  beforeEach(() => jest.clearAllMocks());

  it("should render coin name and price when api responds", async () => {
    // Call the getCoinPrice function
    getCoinPrice.mockResolvedValue({
      data: {
        amount: "1020.25",
        currency: "USD",
      },
    });
    // render(<Track />);

    // See if the mock value is rendered
    await waitFor(() => {
      screen.getByText("1020.25");
    });
  });

  it("should render error message when api fails", async () => {
    getCoinPrice.mockResolvedValue(new Error("error"));
    // render(<Track />);
    await waitFor(() => {
      screen.getByText("error");
    });
  });

  it("should fetch a full list of coins", async () => {
    getCurrencyList.mockResolvedValue(coinList);

    // render(<Search />);
    await waitFor(() => {
      screen.getByText("Bitcoin");
    });
  });
});
