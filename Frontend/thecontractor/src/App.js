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

function App() {
  return (
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/Bids" element={<AllBidsPage />}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/newbid" element={<MakeBidPage />}/>
          </Routes>
          </BrowserRouter>

  );
}

export default App;
