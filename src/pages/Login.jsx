import { useState } from "react";
import "../css/Login.css";

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login Successful!");

      setUser({
        email: "",
        password: ""
      });
    }
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h1>Welcome Back</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
        />

        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}