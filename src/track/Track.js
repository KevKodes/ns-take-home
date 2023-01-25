import React from "react";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

// Props are a list of names
const Track = ({ coinList, onRefreshCoin, onRemoveCoin }) => {
  /*
  // Can reorder the coins
  */

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
              <td>{data.timestamp?.toLocaleTimeString("en-US")}</td>
              <td>
                <Button onClick={() => onRefreshCoin(data.code, data.name)}>
                  refresh
                </Button>
              </td>
              <td>
                <Button onClick={() => onRemoveCoin(data.code)}>x</Button>
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
