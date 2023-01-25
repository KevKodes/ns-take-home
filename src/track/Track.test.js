import { render, screen, fireEvent } from "@testing-library/react";
import Track from "./Track";

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

describe("Track component", () => {
  it("renders with tracked coins", () => {
    const onRemoveCoin = jest.fn();
    render(<Track coinList={coinList} onRemoveCoin={onRemoveCoin} />);

    const row = screen.getByTestId("row-BTC");
    expect(row).toBeInTheDocument();
  });

  it("renders with no tracked coins", () => {
    const onRemoveCoin = jest.fn();
    coinList = null;
    render(<Track coinList={coinList} onRemoveCoin={onRemoveCoin} />);

    const row = screen.getByTestId("row-empty");
    expect(row).toBeInTheDocument();
  });
});

// Check a coin is rendered when it is fetched
describe("Coin tracking table", () => {
  // Removes a coin when clicked
  it("should update the coin list state when remove button is clicked", async () => {
    const onRemoveCoin = jest.fn();

    render(<Track coinList={coinList} onRemoveCoin={onRemoveCoin} />);

    // Get button element and trigger click
    const button = screen.getByTestId("remove-BTC");
    expect(button.innerHTML).toBe("x");
    fireEvent.click(button);
    expect(onRemoveCoin).toHaveBeenCalledWith("BTC");
  });
});
