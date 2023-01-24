import "./App.css";
import { Container } from "react-bootstrap";
import Search from "./search/Search";
import Track from "./track/Track";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Crypto Tracker</p>
      </header>
      <Container>
        <Search />
        <Track />
      </Container>
    </div>
  );
}

export default App;
