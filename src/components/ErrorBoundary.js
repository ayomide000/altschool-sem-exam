import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    // this.state = { hasError: false };
    this.state = { errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    // return { hasError: true };
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.logErrorToMyService(error.toString(), errorInfo.componentStack);

    // this.logErrorToMyService(error, errorInfo);
  }
  logErrorToMyService = console.log;

  render() {
    if (this.state.errorMessage) {
      // You can render any custom fallback UI
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

          <section className="error">
            <h1>404</h1>
            <h4>Page Not Found!</h4>
            <button>
              <Link to="/">Go back to the homepage</Link>
            </button>
          </section>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
