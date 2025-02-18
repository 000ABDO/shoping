import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  let nav = useNavigate();

  let [bars, setbars] = useState(false);
  const openlogin = () => {
    let isLoggedIn = JSON.parse(localStorage.getItem("login")) || false;

    if (isLoggedIn) {
      localStorage.setItem("login", JSON.stringify(false)); // تسجيل الخروج
      nav("/");
    } else {
      nav("/loginPage");
    }
  };

  let log = JSON.parse(localStorage.getItem("login"));

  return (
    <div className="navicontainer">
      <nav className="navbar d-flex justify-content-between bg-primary text-white p-3 px-5">
        <h2>shopping cart</h2>
        <ul className="navul list-group list-group-horizontal">
          <div className="headcon-LI">
            <li className="list-group-item">home</li>
            <li className="list-group-item">allproducts</li>
            <li className="list-group-item">contact</li>
          </div>

          <div className="header-right">
            <i
              onClick={() => setbars(bars ? false : true)}
              className={`fa-solid fa-bars ${bars ? "rotatee" : ""}`}
            ></i>

            <div className={`lis_respnse ${bars ? "clicke" : ""}`}>
              <li className="list-group-item">home</li>
              <li className="list-group-item">allproducts</li>
              <li className="list-group-item">contact</li>
            </div>
            <h5 onClick={() => openlogin()}>{log ? "logout" : "login"}</h5>
          </div>
        </ul>
      </nav>
    </div>
  );
}
