import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { getCurrencyList } from "../api/api";
import Search from "./Search";

// Mocked coin list data
const coinList = [
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
describe("Search component", () => {
  beforeEach(() => jest.clearAllMocks());

  // Check on the filtering functionality
  it("should display coins based on search input", async () => {
    const onAddCoin = jest.fn();
    // setCurrencies.mockResolvedValue(coinList)

    getCurrencyList.mockResolvedValue(() => {
      const fetchResponse = {
        json: act(() => () => Promise.resolve(coinList)),
      };
      return Promise.resolve(fetchResponse);
    });

    // act(() => {
    //   getCurrencyList.mockResolvedValue(() =>
    //     Promise.resolve({
    //       json: act(() => Promise.resolve(coinList)),
    //     })
    //   );
    // });
    // jest.spyOn(global, "fetch").mockImplementation(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve(coinList),
    //   })
    // );
    // await act(async () =>{
    render(<Search onAddCoin={onAddCoin} />);
    // })

    const searchbar = screen.getByTestId("search");
    const row = screen.getByTestId("result-BTC");

    // Mock user input
    fireEvent.change(searchbar, { target: { value: "b" } });

    // Check for results
    await waitFor(() => {
      expect(row).toBeInTheDocument();
    });
  });
});
