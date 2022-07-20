import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postData = () => {
    axios
      .post(`http://127.0.0.1:8000/accounts/login`, {
        username,
        password,
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="justify-content-md-center center text-center">
      <Container className="col-5 mt-5 mb-5">
        <h3 className="m-5">Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="username"
            className="form-control"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={postData}>
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </Container>
    </div>
  );
}
