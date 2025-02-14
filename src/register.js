import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  let nav = useNavigate();

  let [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const log = () => {
    nav("/loginPage");
  };

  const submit = async () => {
    if (
      data.username.trim() !== "" &&
      data.email.trim() !== "" &&
      data.password.length > 4
    ) {
      try {
        let response = await fetch("http://localhost:5000/users/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        let result = await response.json();
        alert(
          `Welcome ${data.username}, you will be redirected to the login page.`
        );
        nav("/loginPage");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again.");
      }
    } else {
      alert("Please enter valid data.");
    }
  };

  return (
    <>
      <div className="loginbage">
        <div className="myform">
          <h1>
            Welcome to <span className="register">Register</span> Page
          </h1>

          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={data.username}
              onChange={(e) =>
                setData((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
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
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={submit}
          >
            Create Account
          </button>

          <p className="donthaveAcc">
            Have an account?{" "}
            <span className="register" onClick={log}>
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
