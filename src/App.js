import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home'
import Products from './components/Products';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct'


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<SingleProduct/>} />
        </Routes> 
      <Footer/>
    </div>  
  );
}

export default App;
