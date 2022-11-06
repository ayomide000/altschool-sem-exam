import React from "react";
import { Helmet } from "react-helmet-async";
import image from "../counter.png";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>A counter homepage</title>
        <meta
          name="description"
          content="a basic counter app with function of increment, decrement reset and setValue"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="home">
        <div className="img">
          <img src={image} alt="counter img" />
        </div>
        <h1>A Counter App</h1>
        <p>
          This is a simple counter app with function of increment, reset and
          decrement values.
        </p>
        <br />
        <p>It is created using useState or useReducer hook</p>
        <br />
      </div>
    </>
  );
};

export default Home;
