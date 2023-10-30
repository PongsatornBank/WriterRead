import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {GiBookCover} from 'react-icons/gi'
import {PiNotePencilFill} from 'react-icons/pi'

const profile = () => {
  return(
      <img src='eggAcc.png' style={{borderRadius:'100px',borderColor:'black',borderWidth:'2px'}} alt='logo' width={50} height={50}></img>
  )
}
const read = () => {
 return(
  <div style={{backgroundColor:'#FFBE58',borderRadius:'100px',width:'50px',height:'50px',borderColor:'black',borderWidth:'2px'}}>
    <GiBookCover style={{width:'30px',height:'30px',color:'black',margin:'10px'}}/>
  </div>
 )
}

const write = () => {
  return(
   <div style={{backgroundColor:'#FFBE58',borderRadius:'100px',width:'50px',height:'50px',borderColor:'black',borderWidth:'2px'}}>
     <PiNotePencilFill style={{width:'30px',height:'30px',color:'black',margin:'10px'}}/>
   </div>
  )
 }


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src='https://i.ibb.co/L1Fzz4W/logo.jpg' style={{marginLeft:'150px',borderRadius:'100px'}} alt='logo' width={180} height={90}></img>
      </Link>
      <ul style={{marginRight:'150px'}}>
        <CustomLink to="/Read"> {read()} </CustomLink>
        <CustomLink to="/Write"> {write()} </CustomLink>
        <CustomLink to="/profile"> {profile()} </CustomLink>
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