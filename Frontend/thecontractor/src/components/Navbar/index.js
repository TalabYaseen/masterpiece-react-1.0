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
          <NavLink to='/Favorite' activeStyle>
          Favorite
          </NavLink>
          <NavLink to='/Contact-us' activeStyle>
          Contact us
          </NavLink>
          <NavLink to='/About-us' activeStyle>
          About us
          </NavLink>
        </NavMenu>
        <NavLink to='/'>
          <img style={{width:"100px"}} src={require('../../assets/WebsitPics/logo.png')} alt='logo' />
        </NavLink>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          <NavBtnLink to='/register'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
      </>
  );
};

export default Navbar;