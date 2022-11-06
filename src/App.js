import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UseStateCounter from "./components/UseStateCounter";
import UseReducerCounter from "./components/UseReducerCounter";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              // className="hook-container"
              path="usestate-counter"
              element={<UseStateCounter />}
            />
            <Route
              // className="hook-container"
              path="usereducer-counter"
              element={<UseReducerCounter />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
