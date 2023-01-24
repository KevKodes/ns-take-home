import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Search from "./search/Search";
import Track from "./track/Track";

function App() {
  // List of coins in the tracked table
  const [coinList, setCoinList] = useState(["BTC, ETH", "DOGE"]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Crypto Tracker</p>
      </header>
      <Container>
        <Search coinList={coinList} setCoinList={setCoinList} />
        <Track coinList={coinList} setCoinList={setCoinList} />
      </Container>
    </div>
  );
}

export default App;
