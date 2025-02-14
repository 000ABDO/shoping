import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Details from "./productdetails";
import Edit from "./edit";
import Login from "./login.js";
import Register from "./register.js";

export function Allprogram() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="loginPage" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="details/:title" element={<Details />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Allprogram />);
