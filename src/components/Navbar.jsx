import { Link } from "react-router-dom";
import SwitchTheme from "../components/SwitchTheme";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-link d-flex gap-3">
        <Link to={"/"}>Home</Link>
        <b>|</b>
        <Link to={"/menu"}>Menu</Link>
      </div>
      <SwitchTheme />
    </nav>
  );
};

export default Navbar;
