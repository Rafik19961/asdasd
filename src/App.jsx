import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { render } from "react-dom";
import {BrowserRouter,Routes, Route,} from "react-router-dom";
import Header from './layouts/header/header';
import Home from './pages/home/home';
import About from './pages/About/about';
import Contact from './pages/contact/contact';
import Registration from './pages/registration/registration';
import Product from './pages/product/product';
import Footer from './layouts/footer/footer';
import Portfolio from './pages/portfolio/potfolio';
import Create_product from './pages/create_product/create_product';




function App() {
  return (
    
       <BrowserRouter>
       <Header />
    <Routes>
   
        
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/portfolio" element={<Portfolio/>} />
    <Route path="/registration" element={<Registration/>} />
    <Route path="/create_product" element={<Create_product/>} />
    <Route path="/product" element={<Product/>} />
    
    </Routes>
    <Footer />
  </BrowserRouter>
   
    
  );
}

export default App;
