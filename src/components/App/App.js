import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../navbar";
import Slider from "../../slider";
import ProductsList from "../../productsList";
import Create from "../../createproduct";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}
