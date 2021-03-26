import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        margin: "50px 50px 50px 50px",
      }}
    >
      <NavLink to="/" activeStyle={{ fontWeight: "bold" }} exact>
        Home
      </NavLink>
      {" - "}
      <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
        About
      </NavLink>
    </div>
  );
}
