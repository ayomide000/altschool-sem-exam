import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>An Error Page</title>
        <meta
          name="description"
          content="an error page showing page not found"
        />
        <link rel="canonical" href="*" />
      </Helmet>

      <div className="not-found">
        <h2> 404</h2>
        <p>Page Not Found!</p>
        <button>
          <Link to="/">Go back to Homepage</Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
