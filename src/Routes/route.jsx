import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, SinglePage,CartPage } from "../pages/index";








function routing() {



  return (
    
      <BrowserRouter>
     

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/CartPage" element={<CartPage/>} />
            <Route path="/singlePage/:productId" element={<SinglePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  )
};

export default routing;
