import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/">Home</Link>
      <Link to="/usestate-counter">UseStateCounter</Link>
      <Link to="/usereducer-counter">UseReducerCounter</Link>
    </nav>
  );
};

export default Navbar;
