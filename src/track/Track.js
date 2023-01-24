import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getCoinPrice } from "../api/api";

// Props are a list of names
const Track = (coinList, setCoinList) => {
  // Can refresh the coins
  // Can reorder the coins
  // Prices are fetched in here
  // Can update the currency prices are compared to
  // Can remove from the track list

  // State of coin price data
  const [coinData, setCoinData] = useState(null);

  // Fetch coin price

  // Refresh price based on passed in currency

  // Set coin data on initial render, when coin list is updated, and on refresh
  useEffect(() => {}, [coinList]);

  // Update coin data on refresh

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Coin Name</th>
          <th>Price</th>
          <th>Last Updated</th>
          <th>Refresh</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
};

export default Track;
