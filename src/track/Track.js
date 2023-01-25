import React from "react";
import { Button, Table } from "react-bootstrap";

const Track = ({ coinList, onRefreshCoin, onRemoveCoin }) => {
  // Can reorder the coins

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>Last Updated</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {coinList.length ? (
          coinList.map((data) => (
            <tr key={data.code}>
              <td className="align-middle">
                <div className="fw-bold text-primary fs-3">{data.code}</div>
                <div className="text-secondary">{data.name}</div>
              </td>
              <td className="align-middle">{data.price}</td>
              <td className="align-middle">
                {data.timestamp?.toLocaleTimeString("en-US")}
                <Button
                  variant="outline-info"
                  className="mx-3"
                  onClick={() => onRefreshCoin(data.code, data.name)}
                >
                  &#10227;
                </Button>
              </td>
              <td className="align-middle">
                <Button
                  variant="outline-danger"
                  onClick={() => onRemoveCoin(data.code)}
                >
                  x
                </Button>
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
