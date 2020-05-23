import React, { useState} from "react";
import "./App.css";

function App() {
  const [tax, setTax] = useState(0);
  const [day, setDay] = useState(1);
  return (
    <div className="o-processBar">
      {/* Bill Canvas */}
      <section className="o-processBar__section -billBox">
        {/* Actual Bill */}
        <div className="o-processBar__bill -actual">
          <h1 className="o-processBar__cost">
            100,000 <span className="o-processBar__currency">THB</span>
          </h1>
          <p className="o-processBar__description">Actual BIll</p>
        </div>
        {/* Cumulative Tariff */}
        <div
          className="o-processBar__bill -cumulative"
          style={{ left: day * 18 + "px" }}
        >
          <h1 className="o-processBar__cost">
            {tax} <span className="o-processBar__currency">THB</span>
          </h1>
          <p className="o-processBar__description">Cumulative Tariff</p>
        </div>
        {/* Estimated Bill */}
        <div className="o-processBar__bill -estimated">
          <h1 className="o-processBar__cost">
            {tax} <span className="o-processBar__currency">THB</span>
          </h1>
          <p className="o-processBar__description">Estimated Bill</p>
        </div>
      </section>
      {/* ProcessBar */}
      <section className="o-processBar__section -bar">
        {/* Bar */}
        <div className="o-processBar__bar">
          {/* Percent Base on Day * 20px */}
          <div
            className="o-processBar__percent"
            style={{ width: day * 20 + "px" }}
          ></div>
        </div>
      </section>
      {/*Date information*/}
      <section className="o-processBar__section -date">
        <div className="o-processBar__month start">1 JAN 20</div>
        <div className="o-processBar__month end">31 JAN 20</div>
      </section>
      <button
        style={{ visibility: day === 31 ? "hidden" : "visible" }}
        onClick={() => setDay(day + 1)}
      >
        Day Increment
        Current Day : {day}
      </button>
      <button
        style={{ visibility: day === 31 ? "hidden" : "visible" }}
        onClick={() => setTax(tax + 100)}
      >
        Tax Increment 100
        Cumulative : {tax}
      </button>
    </div>
  );
}

export default App;
