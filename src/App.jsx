import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Support from "./pages/Support";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/About";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About/>} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
