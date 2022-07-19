import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './comp/Footer'
import Nav from './comp/Nav'
import Details from './pages/Details';
import RateGame from './pages/RateGame';

function App() {
  return (
    <div className="App container text-white">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/RateGame/:id' element={<RateGame props/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
