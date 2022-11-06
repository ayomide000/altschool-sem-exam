import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Counter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const counterDecrease = () => {
    setValue((prevState) => {
      return prevState - 1;
    });
  };

  const counterIncrease = () => {
    setValue((prevState) => {
      return prevState + 1;
    });
  };

  // const inputValue = (e) => {
  //   return e.preventDefault();
  // };

  return (
    <>
      <Helmet>
        <title>Custom hook counter</title>
        <meta
          name="description"
          content="a basic counter app with function of increment, decrement reset and setValue"
        />
        <link rel="canonical" href="/usestate-counter" />
      </Helmet>

      <section className="hook-container">
        <h1 className="heading">UseState Counter Page</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          placeholder="Enter your value"
        />
        <h2 className={value > 0 ? "positive" : value < 0 ? "negative" : null}>
          {value}
        </h2>
        <div className="btn-container">
          <button className="btn" onClick={counterDecrease}>
            Decrease
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
          <button className="btn" onClick={counterIncrease}>
            Increase
          </button>
        </div>
      </section>
    </>
  );
};

export default Counter;
