import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Search from "./search/Search";
import Track from "./track/Track";
import { getCoinPrice } from "./api/api";

function App() {
  // List of coins in the tracked table
  const [coinList, setCoinList] = useState([
    { code: "BTC", name: "Bitcoin" },
    { code: "ETH", name: "Ethereum" },
  ]);

  // Add to tracking list
  function addCoin(code, name) {
    getCoinPrice(`${code.toUpperCase()}-USD`).then((response) => {
      // console.log("price fetch response: ", response);
      const newCoin = {
        code: code,
        name: name,
        price: response.data.amount,
        timestamp: new Date(),
      };
      setCoinList([...coinList, newCoin]);
    });
  }

  // Remove from tracking list

  return (
    <div className="App">
      <header className="App-header">
        <p>Crypto Tracker</p>
      </header>
      <Container className="d-flex flex-column align-items-center">
        <Search onAddCoin={addCoin} />
        {coinList && <Track coinList={coinList} setCoinList={setCoinList} />}
      </Container>
    </div>
  );
}

export default App;
