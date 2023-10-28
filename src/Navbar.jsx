import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src='https://i.ibb.co/L1Fzz4W/logo.jpg' style={{marginLeft:'150px',borderRadius:'100px'}} alt='logo' width={180} height={90}></img>
      </Link>
      <ul>
        <CustomLink to="/profile"> Profile </CustomLink>
        <CustomLink to="/Read"> Read </CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}