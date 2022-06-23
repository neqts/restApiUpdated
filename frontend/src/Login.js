import React, { useState } from "react";
import "./Login.css";
import "./App";
import axios from "axios";
import App from "./App";
import Register from "./pages/Register";

const Login = () => {
  const [step, setStep] = useState(true);

  const [move, setMove] = useState(false);

  const test = () => {
    setMove(!move)
  }


  const handleLogin = (e) => {
    e.preventDefault();
    let request = {
      email: document.getElementById("InputEmail").value,
      name: document.getElementById("InputPassword").value,
    };
    axios
      .post("http://localhost:5000/login", request)
      .then((resp) => {
        setStep(false);

        console.log(resp);
        alert(resp.data.message);
      })
      .catch((err) => {
        setStep(true);
        console.log("not logged");
        console.log(err);
      });
  };

  return (
    <div>

      {step ? (move ? <Register /> :
        <div className="main">
          <form action="" onSubmit={handleLogin}>
            <div className="form">
              <label htmlFor="">User Name</label>
              <input type="text" id="InputEmail" class='name' />

              <label htmlFor="">Password</label>
              <input type="password" id="InputPassword" />
              <div>
                Check me out
                <input type="checkbox" />

              </div>
            </div>

            <button type="submit" className="submit">
              Submit
            </button>
            <button type="submit" className="submit" onClick={test}>
              Register
            </button>

          </form>

        </div>
      ) : (
        <App />
      )}
    </div>
  );
};

export default Login;
