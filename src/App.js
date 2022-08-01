//import logo from './logo.svg';
//import './App.css';
import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
     <Header />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/login' element={<Login />} />
            </Routes>
            <section>
              
            </section>
      <Footer />
    </div>
  );
}

export default App;
