import React from "react";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getCoinList } from "../api/api";

/*
  All the coins can be pulled once then filtered every time
  filter by name and code, limit 5 to display while typing
  Clicking will clear the search and add to tracker
*/
const Search = (coinList, setCoinList) => {
  const [search, setSearch] = useState("BTC-USD");
  // const [currency, setCurrency] = useState("USD")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  // Fetch Coinbase buy prices
  useEffect(() => {
    if (loading) {
      getCoinList()
        .then((response) => {
          console.log("response ", response);
          setData(response.data);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading]);

  // TEMP
  // useEffect(() => {
  //   console.log("data: ", data);
  // }, [data]);

  // Set loading state
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setLoading(true);
  };

  return (
    <div className="p-5">
      <Form onSubmit={(e) => onSubmit(e)} className="d-flex flex-row">
        <Form.Control
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
        ></Form.Control>
        {/* <Form.Select onChange={e=>setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </Form.Select> */}
        <Button variant="primary" type="submit">
          {/* <input type="submit" /> */}
          Submit
        </Button>
      </Form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
