// import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  INPUTVALUE: "inputValue",
};
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    case ACTIONS.INPUTVALUE:
      return { count: (state.count = action.payload) };
    default:
      return state;
  }
};
const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Decrement = () => {
    dispatch({ type: "decrement" });
  };
  const Reset = () => {
    dispatch({ type: "reset" });
  };
  const Increment = () => {
    dispatch({ type: "increment" });
  };

  return (
    <>
      <Helmet>
        <title>UseReducer counter Page</title>
        <meta
          name="description"
          content="a basic counter app with function of increment, decrement reset and setValue"
        />
        <link rel="canonical" href="usereducer-counter" />
      </Helmet>

      <section className="hook-container">
        <h1 className="heading">UseReducer Counter</h1>
        <input
          type="text"
          value={state.count}
          onChange={(e) =>
            dispatch({ type: "inputValue", payload: parseInt(e.target.value) })
          }
          placeholder="Enter your value"
        />
        <h2
          className={
            state.count > 0 ? "positive" : state.count < 0 ? "negative" : null
          }
        >
          {state.count}
        </h2>
        <div className="btn-container">
          <button className="btn" onClick={Decrement}>
            Decrement
          </button>
          <button className="btn" onClick={Reset}>
            Reset
          </button>
          <button className="btn" onClick={Increment}>
            Increment
          </button>
        </div>
      </section>
    </>
  );
};
export default UseReducerCounter;
