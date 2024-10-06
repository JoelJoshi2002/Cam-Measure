import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Measure from './components/Pages/Measure';

function App() {
  return (

  <BrowserRouter>  
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Measure' element={<Measure />} />
  </Routes>

  </BrowserRouter>
  );
}

export default App;
