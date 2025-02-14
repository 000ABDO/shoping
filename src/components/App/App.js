import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Navbar from "../../navbar";
import Slider from "../../slider";
import ProductsList from "../../productsList";
import Create from "../../createproduct";
import "./App.css"


export default function App() {
  return (
    <>
      <Navbar /> {/* ✅ سيظهر في كل الصفحات */}

      <Routes>
        <Route path="/" element={ 
          <> 
            <Slider /> {/* ✅ يظهر فقط في الصفحة الرئيسية */}  
            <ProductsList /> {/* ✅ يظهر فقط في الصفحة الرئيسية */}
          </>
        } />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

