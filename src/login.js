import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login() {
  let nav = useNavigate();
  let [allusers, setallusers] = useState([]);

  let [data, setdata] = useState({
    email: "",
    password: "",
  });

  const log = () => {
    nav("/Register");
  };

  useEffect(() => {
    fetch("https://67af9113dffcd88a67870b98.mockapi.io/users/")
      .then((res) => res.json())
      .then((users) => {
        setallusers(users);
        console.log(users);
      });
  }, []);

  const enterSubmit = () => {
    let user = allusers.find(
      (el) => el.email === data.email && el.password === data.password
    );
    if (user) {
      alert(`welcoume ${user.username}`);
      localStorage.setItem("login", true);
      nav("/");
    } else {
      alert(" plese enter a valid data");
    }
  };

  return (
    <>
      <div className="loginbage">
        <div className="myform">
          <h1>
            welcoume to <span className="register">Login</span> bage{" "}
          </h1>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) =>
                setdata((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={data.password}
              onChange={(e) =>
                setdata((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={() => enterSubmit()}
          >
            Login
          </button>

          <p className="donthaveAcc">
            Don't Have an account?{" "}
            <span className="register" onClick={() => log()}>
              register
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
