import React from "react";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getCurrencyList } from "../api/api";

/*
  All the coins can be pulled once then filtered every time
  filter by name and code, limit 5 to display while typing
  Clicking will clear the search and add to tracker
*/
const Search = (coinList, setCoinList) => {
  const [searchText, setSearchText] = useState("");
  // const [currency, setCurrency] = useState("USD")
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currencies, setCurrencies] = useState(null);
  const [results, setResults] = useState(null);

  // Fetch Coinbase buy prices
  useEffect(() => {
    getCurrencyList()
      .then((response) => {
        console.log("response ", response);
        setCurrencies(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  }, []);

  // TEMP
  // useEffect(() => {
  //   console.log("data: ", data);
  // }, [data]);

  // Set loading state
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("submitted");
  //   setLoading(true);
  // };

  // Update search results when search changes
  const filterCurrencies = (s, c) => {
    const l = c.filter(
      (x) =>
        x.code.toLowerCase().includes(s.toLowerCase()) ||
        x.name.toLowerCase().includes(s.toLowerCase())
    );
    console.log("l", l);
    return l.slice(0, 10);
  };

  useEffect(() => {
    if (searchText && currencies) {
      // Can add a timeout and handle when user is typing
      console.log("search, curr", searchText, currencies);
      setResults(filterCurrencies(searchText, currencies));
    } else {
      setResults(null);
    }
  }, [searchText, currencies]);

  return (
    <div className="p-5">
      <Form className="d-flex flex-row">
        <Form.Control
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search..."
        ></Form.Control>
        {/* <Form.Select onChange={e=>setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
      <div className="position-absolute">
        {results &&
          results.map((x) => (
            <div key={x.code} className="d-flex">
              <div>{x.code}</div>
              <div>{x.name}</div>
            </div>
          ))}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
