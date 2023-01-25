import React from "react";
import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { getCurrencyList } from "../api/api";

/*
  All the coins can be pulled once then filtered every time
  filter by name and code, limit 5 to display while typing
  Clicking will clear the search and add to tracker
*/
const Search = ({ onAddCoin }) => {
  const [searchText, setSearchText] = useState("");
  const [currencies, setCurrencies] = useState(null); // trackable coins from CoinBase
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);

  // Fetch Coinbase buy prices
  useEffect(() => {
    getCurrencyList()
      .then((response) => {
        setCurrencies(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  }, []);

  // Update search results when search changes
  const filterCurrencies = (s, c) => {
    const l = c.filter(
      (x) =>
        x.code.toLowerCase().includes(s.toLowerCase()) ||
        x.name.toLowerCase().includes(s.toLowerCase())
    );
    return l.slice(0, 10);
  };

  useEffect(() => {
    if (searchText && currencies) {
      setResults(filterCurrencies(searchText, currencies));
    } else {
      setResults(null);
    }
  }, [searchText, currencies]);

  return (
    <div className="p-5 w-50">
      <Form className="d-flex flex-row">
        <Form.Control
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search..."
          value={searchText}
        ></Form.Control>
      </Form>
      <div className="position-absolute bg-light">
        {results &&
          results.map((x) => (
            <Row
              value={{ code: x.code, name: x.name }}
              key={x.code}
              onClick={() => {
                onAddCoin(x.code, x.name);
                setSearchText("");
              }}
              className="w-100"
            >
              <Col className="px-4 text-start">{x.code}</Col>
              <Col className="px-4 text-start">{x.name}</Col>
            </Row>
          ))}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
