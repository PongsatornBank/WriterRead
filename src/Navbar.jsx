import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {GiBookCover} from 'react-icons/gi';
import {PiNotePencilFill} from 'react-icons/pi';
import {HiMiniBell} from 'react-icons/hi2';
import {BsSearch} from 'react-icons/bs'
import {WiDayHaze} from 'react-icons/wi'
import {IoIosCloudyNight} from 'react-icons/io'
import './pages/css/History.css'
const profile = () => {
  return(
      <img src='eggAcc.png' style={{borderRadius:'100px',borderColor:'black',borderWidth:'2px'}} alt='logo' width={50} height={50}></img>
  )
}
const read = () => {
 return(
  <div style={{backgroundColor:'#FFBE58',borderRadius:'100px',width:'50px',height:'50px',borderColor:'black',borderWidth:'2px'}}>
    <GiBookCover style={{width:'30px',height:'30px',color:'black',margin:'8px'}}/>
  </div>
 )
}

const write = () => {
  return(
   <div style={{backgroundColor:'#FFBE58',borderRadius:'100px',width:'50px',height:'50px',borderColor:'black',borderWidth:'2px'}}>
     <PiNotePencilFill style={{width:'30px',height:'30px',color:'black',margin:'8px'}}/>
   </div>
  )
}

const search = () => {
  return(
   <div style={{backgroundColor:'#FFBE58',borderRadius:'100px',width:'50px',height:'50px',borderColor:'black',borderWidth:'2px'}}>
     <BsSearch style={{width:'30px',height:'30px',color:'black',margin:'10px'}}/>
   </div>
  )
}




export default function Navbar(props) {
  
  return (
    <nav className={`nav`}>
      <Link to="/" style={{marginLeft:'15rem'}}>
        <img src='https://i.ibb.co/L1Fzz4W/logo.jpg' style={{margin:10,borderRadius:50}} alt='logo' width={180} height={90}></img>
      </Link>
      <ul style={{marginRight:'150px'}}>
        
        <CustomLink to="/Search"> {search()} </CustomLink>
        <CustomLink to="/Read"> {read()} </CustomLink>
        <li className='active' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className='light-button' onClick={()=>props.setDarkMode(!props.darkMode)}>
            {props.darkMode ? (
              <div style={{borderColor:'black',borderWidth:'2px',borderRadius:'100%',width:'50px',height:'50px'}}>
                <WiDayHaze style={{cursor:'pointer',width:'40px',height:'40px',marginTop:'5px',marginLeft:'auto',marginRight:'auto'}} />
              </div>
            ) :
            (
              <div style={{borderColor:'black',borderWidth:'2px',borderRadius:'100%',width:'50px',height:'50px'}}>
                <IoIosCloudyNight style={{cursor:'pointer',width:'40px',height:'40px',marginTop:'5px',marginLeft:'6px',marginRight:'auto'}}/>
                </div>
            )}
          </div>
        </li>
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