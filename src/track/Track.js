import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Track = () => {
  // Can refresh the coins
  // Can reorder the coins
  // Prices are fetched in here
  // Can update the currency prices are compared to

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
