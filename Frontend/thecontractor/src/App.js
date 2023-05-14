import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import Landingpage from './components/Landing/Landingpage';
import './App.css';
import AllBidsPage from './components/AllBids/AllBidsPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import RegisterPage from './components/Register/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/signin/Signin';
import MakeBidPage from './components/MakeBid/MakeBidPage';
import Singelbid from './components/Singelbid/SingleBidPage';
import Aboutus from './components/AboutUs/Aboutus';
import Profile from './components/Profile/Profile';
import User from './components/user/User';
import Editprofile from './components/editprofile/Editprofile';
import Contactus from './components/contactus/Contactus';

function App() {
  return (
          <BrowserRouter>
          <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      >
      </ToastContainer>
          <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/Contact-us" element={<Contactus></Contactus>}/>
          <Route path="/Bids" element={<AllBidsPage />}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/newbid" element={<MakeBidPage />}/>
          <Route path="/About-us" element={<Aboutus />}/>
          <Route path="/Myprofile" element={<Profile />}/>
          <Route path="/singlebid/:id" element={<Singelbid />}/>
          <Route path="/user/:id" element={<User></User>}/>
          <Route path="editprofile" element={<Editprofile></Editprofile>}/>
          </Routes>
          </BrowserRouter>

  );
}

export default App;
