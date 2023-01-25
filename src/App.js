import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Search from "./search/Search";
import Track from "./track/Track";
import { getCoinPrice } from "./api/api";

function App() {
  // List of coins in the tracked table
  const [coinList, setCoinList] = useState([]);

  // Format the price (currently only USD option)
  const formatPrice = (x) =>
    x
      ? parseFloat(x).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      : "";

  // Add and refresh tracking list
  function updateList(code, name) {
    getCoinPrice(`${code.toUpperCase()}-USD`)
      .then((response) => {
        const newCoin = {
          code: code,
          name: name,
          price: formatPrice(response.data.amount),
          timestamp: new Date(),
        };

        // If a coin exists, update instead of adding
        const idx = coinList.findIndex((x) => x.code === code);
        if (idx === -1) {
          setCoinList([...coinList, newCoin]);
        } else {
          const updated = coinList.map((c, i) => (i === idx ? newCoin : c));
          setCoinList(updated);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Remove from tracking list
  function removeFromList(code) {
    setCoinList(coinList.filter((c) => c.code !== code));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Crypto Tracker</p>
      </header>
      <Container className="d-flex flex-column align-items-center">
        <Search onAddCoin={updateList} />
        <Track
          coinList={coinList}
          onRefreshCoin={updateList}
          onRemoveCoin={removeFromList}
        />
      </Container>
    </div>
  );
}

export default App;
