import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css";
import {React,useState} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  const logout = () => {
    sessionStorage.clear()
    window.location.href = "/";
  }
const [navbarcolor,setNavbarcolor] = useState(false)

const changeBackgroundNav =() => {
        if(window.scrollY > 0) {
        setNavbarcolor (true);
    } else {
        setNavbarcolor (false);
    }
}

window.addEventListener('scroll',changeBackgroundNav);


  return (
    <>
      <Nav  className={ navbarcolor ? 'navbardown':""} style={{position:"sticky",top: 0,}}>
        <Bars></Bars>
        <NavMenu>
          <NavLink to='/' activeStyle>
          Home
          </NavLink>
          <NavLink to='/Bids' activeStyle>
          Bids
          </NavLink>
          {/* <NavLink to='/Favorite' activeStyle>
          Favorite
          </NavLink> */}
          {/* <NavLink to='/Contact-us' activeStyle>
          Contact us
          </NavLink> */}
          <NavLink to='/About-us' activeStyle>
          About us
          </NavLink>
        </NavMenu>
        <NavLink to='/'>
          <img style={{width:"100px"}} src={require('../../assets/WebsitPics/logo.png')} alt='logo' />
        </NavLink>
        {sessionStorage.getItem("user") ?
        <NavBtn>
        <NavBtnLink onClick={()=>logout()}>log out</NavBtnLink>
        <div>
        <NavLink to='/Myprofile'>
          <img className='navbarphoto' src={JSON.parse(sessionStorage.getItem("user"))["user_photo"] ?require("../../../public/profilephotos/"+JSON.parse(sessionStorage.getItem("user"))["user_photo"]):require("../images/profile_pics/avatarphotoplaceholder.png")}>
          </img>
          </NavLink>
        </div>
      </NavBtn>
        :
        <NavBtn>
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        <NavBtnLink to='/register'>Sign Up</NavBtnLink>
      </NavBtn>}
        
      </Nav>
      </>
  );
};

export default Navbar;