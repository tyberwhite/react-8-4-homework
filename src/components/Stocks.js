import React from "react";
import { Link } from "react-router-dom";
import stocks from "../data";

export default function Stocks(props) {
  return (
    <div className="stocks">
      <h2>Most Active Stonks</h2>
      <div className="main-container">
        <div className="stocks-container">
          <p className="left-element">Company Name</p>
          <div className="right-elements">
            <p className="right-element">Price</p>
            <p className="right-element">Change</p>
          </div>
        </div>
        <div className="border-line"></div>

        {props.stocks.map((stock) => (
          <div className="stocks-container" key={stock.symbol}>
            <Link to={`/stocks/${stock.symbol}`}>
              <p className="left-element">
                {stock.name} ({stock.symbol})
              </p>
            </Link>
            <div className="right-elements">
              <Link to={`/stocks/${stock.lastPrice}`}>
                <p className="right-element">{stock.lastPrice}</p>
              </Link>
              <Link to={`/stocks/${stock.change.toFixed(2)}`}>
                <p className="right-element">{stock.change.toFixed(2)}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
