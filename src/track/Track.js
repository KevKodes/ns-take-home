import React from "react";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getCoinPrice } from "../api/api";

/* Row component for each tracked coin
const PriceRow = ({ data, coinList, setCoinList }) => {
  // Remove coin from list
  const removeCoin = (c) => {
    setCoinList(...coinList.filter((x) => x.code !== c));
  };

  // Refresh coin price data
  const refreshPrice = (c) => {
    // Call the fetch
    // Update the state with the new price
  };

  console.log("data in row: ", data);

  return (
    <tr>
      <td>{data.code}</td>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.timestamp.toLocaleTimeString("en-US")}</td>
      <td>
        <Button onClick={refreshPrice(data.code)}>refresh</Button>
      </td>
      <td>
        <Button onClick={removeCoin(data.code)}>x</Button>
      </td>
    </tr>
  );
};*/

// Props are a list of names
const Track = ({ coinList, setCoinList }) => {
  /* Can refresh the coins
  // Can reorder the coins
  // Prices are fetched in here
  // Can update the currency prices are compared to
  // Can remove from the track list
  */
  /*
  // State of coin price data
  const [coinData, setCoinData] = useState([]);
  const [tableRows, setTableRows] = useState(null);

  //TEMP
  useEffect(() => {
    console.log("coinData: ", coinData, coinData?.length);
    coinData?.map((d) => {
      console.log("d", d);
      return null;
    });
    const rows = [];
    coinData?.forEach((data, idx) => {
      const row = (
        <tr key={data.code}>
          <td>{data.code}</td>
          <td>{data.name}</td>
          <td>{data.price}</td>
          <td>{data.timestamp.toLocaleTimeString("en-US")}</td>
          <td>
            <Button>refresh</Button>
          </td>
          <td>
            <Button>x</Button>
          </td>
        </tr>
      );
      console.log("name", data.name);
      rows.push(row);
    });
    console.log("rows", rows);
    setTableRows(rows);
  }, [coinData]);

  // Fetch coin price

  // Refresh price based on passed in currency

  // Set coin data on initial render, when coin list is updated, and on refresh
  useEffect(() => {
    if (coinList) {
      const data = [];
      console.log("coinlist", coinList);
      coinList.forEach((c) => {
        getCoinPrice(`${c.code.toUpperCase()}-USD`).then((response) => {
          // console.log("price fetch response: ", response);
          data.push({
            code: c.code,
            name: c.name,
            price: response.data.amount,
            timestamp: new Date(),
          });
        });
      });
      console.log("to set coinData: ", data);
      setCoinData(data);
    }
  }, [coinList]);
  */
  // Update coin data on refresh

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Coin Code</th>
          <th>Coin Name</th>
          <th>Price</th>
          <th>Last Updated</th>
          <th>Refresh</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {coinList.length ? (
          coinList.map((data, idx) => (
            <tr key={data.code}>
              <td>{data.code}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              {/* <td>{data.timestamp}</td> */}
              <td>{data.timestamp?.toLocaleTimeString("en-US")}</td>
              <td>
                <Button>refresh</Button>
              </td>
              <td>
                <Button>x</Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>Select a coin to track</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default Track;
