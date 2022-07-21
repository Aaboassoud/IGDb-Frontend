import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddToWishList from "./comp/addToWishList";
import "bootstrap/dist/css/bootstrap.min.css";
import WishList from "./pages/WhishList";
import RateGame from "./pages/RateGame";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import Remove from "./comp/Remove";
import Footer from "./comp/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nav from "./comp/Nav";
import "./bootstrap.css";

function App() {
  return (
    <div className="App container text-white">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/Remove/:id" element={<Remove />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/RateGame/:id" element={<RateGame />} />
          <Route path="/addWishList/:id" element={<AddToWishList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
