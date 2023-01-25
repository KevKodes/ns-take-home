import { render, screen, waitFor } from "@testing-library/react";
import Search from "./Search";
import { getCurrencyList } from "../api/api";

// Mocked coin list data
const coinData = [
  {
    code: "BTC",
    name: "Bitcoin",
  },
  {
    code: "ETH",
    name: "Ethereum",
  },
  {
    code: "ETH2",
    name: "Ethereum 2",
  },
  {
    code: "ETC",
    name: "Ethereum Classic",
  },
];

// Check if full list of coins is returned
jest.mock("../api/api");
describe("Coin list", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should fetch a full list of coins", async () => {
    getCurrencyList.mockResolvedValue(coinData);

    render(<Search />);
    await waitFor(() => {
      screen.getByText("Bitcoin");
    });
  });
});
