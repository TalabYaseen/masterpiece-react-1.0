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

function App() {
  return (
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/Bids" element={<AllBidsPage />}/>
          </Routes>
          </BrowserRouter>

  );
}

export default App;
