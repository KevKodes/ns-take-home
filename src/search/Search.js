import React from "react";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Search = () => {
  const [search, setSearch] = useState("BTC-USD");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  // Fetch Coinbase buy prices
  useEffect(() => {
    if (loading) {
      fetch(`https://api.coinbase.com/v2/prices/${search}/buy`)
        .then((res) => res.json())
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
    <>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Control type="text" placeholder="Search..."></Form.Control>
        <Button variant="primary" type="submit">
          {/* <input type="submit" /> */}
          Submit
        </Button>
      </Form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Search;
