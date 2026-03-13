import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav style={{
      display:"flex",
      gap:"25px",
      padding:"15px",
      background:"#f4f6fb",
      borderBottom:"1px solid #ccc"
    }}>

      <Link to="/">Home</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/users">User List</Link>
      <Link to="/api">API Demo</Link>

    </nav>
  )
}

export default NavBar