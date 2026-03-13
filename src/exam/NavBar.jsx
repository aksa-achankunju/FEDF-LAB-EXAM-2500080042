import { Link } from "react-router-dom";
import "./exam.css";

function NavBar() {
  return (

    <nav className="navbar">

      <h2>React Exam App</h2>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/register">Teacher Registration</Link>
        </li>

        <li>
          <Link to="/users">Teacher List</Link>
        </li>

        <li>
          <Link to="/api">API Demo</Link>
        </li>

      </ul>

    </nav>

  );
}

export default NavBar;