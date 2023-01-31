import React from "react";
import { useParams } from "react-router-dom";
import stocks from "../data";

export default function ShowStock() {
  const { symbol } = useParams();
  const stock = stocks.find((s) => s.symbol === symbol);

  return (
    <div className="show-stock">
      <h2>{stock.name}</h2>
      <p>Symbol: {stock.symbol}</p>
      <p>Last Price: ${stock.lastPrice}</p>
      <p>Change: {stock.change.toFixed(2)}</p>
    </div>
  );
}
