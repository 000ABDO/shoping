import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  let navigate = useNavigate();

  let [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const log = () => {
    navigate("/loginPage");
  };

  const submit = async () => {
    // ✅ التحقق من صحة البيانات
    if (data.username.trim() === "" || data.email.trim() === "" || data.password.length < 5) {
      alert("⚠️ Please enter a valid username, email, and a password of at least 5 characters.");
      return;
    }

    try {
      let response = await fetch("https://67af9113dffcd88a67870b98.mockapi.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      let result = await response.json();
      alert(`🎉 Welcome ${data.username}! You will be redirected to the login page.`);
      navigate("/loginPage");
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("⚠️ Something went wrong. Please try again later.");
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
