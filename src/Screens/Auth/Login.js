import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {} from "react-router";
import "./Login.css";
import { Colors } from "../../Constants/Constants";
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios";

function Login() {
  const [type, setType] = useState("Login");
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function checkHandler() {
    setCheck(!check);
  }

  const signUp = async () => {
    const res = await axios.post("http://localhost:5000/signup", {
      email: email,
      password: password,
    });
    console.log("====", res);
    navigate("/navigation/home");
  };
  const Login = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    });
    //  console.log("====", res);
    if (res.data.status === 200) {
      navigate("/navigation/home");
    } else {
      console.log(res.data);
    }
  };

  const navigate = useNavigate();
  return (
    <div
      className="login_page_container"
      style={{
        backgroundColor: Colors.bg,
      }}
    >
      <img
        src="https://www.universitymagazine.ca/wp-content/uploads/2021/08/How-to-Get-Netflix-For-Free.jpg"
        className="image"
      />
      {/* <img
        src={require("../../Assests/netflix.png")}
        style={{
          position: "absolute",
          top: -10,
          left: -10,
        }}
      /> */}
      {type === "Login" ? (
        <div className="login_container">
          <a
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 20,
            }}
            onClick={() => {
              navigate("/home");
            }}
            className="login_text"
          >
            Login
          </a>
          <input
            value={email}
            className="email_input"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            className="email_input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a style={{ color: "white", marginTop: 10 }}>Forgot password?</a>
          <button
            className="login_button"
            onClick={() => {
              //  navigate("/home");
              Login();
            }}
          >
            <a
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              Login
            </a>
          </button>
          <div
            style={{
              display: "flex",
              flex: 1,
              width: "100%",
              alignItems: "center",
              marginTop: 10,
              // backgroundColor: "pink",
              marginBottom: 30,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                onClick={checkHandler}
                className="checkbox"
                style={
                  check
                    ? {
                        backgroundColor: Colors.primary,
                        borderColor: Colors.primary,
                      }
                    : {
                        borderColor: "grey",
                      }
                }
              >
                {check ? <AiOutlineCheck color={"white"} /> : null}
              </div>
              <a
                style={{
                  // fontWeight: "bold",
                  // fontSize: 20,
                  color: "white",
                }}
              >
                Remember me
              </a>
            </div>
            <div>
              <a
                style={{
                  // fontWeight: "bold",
                  // fontSize: 20,
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => setType("SignUp")}
              >
                Signup
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="login_container">
          <a
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 20,
            }}
            onClick={() => {
              navigate("/home");
            }}
            className="login_text"
          >
            Signup
          </a>
          <input
            value={email}
            className="email_input"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            className="email_input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login_button"
            onClick={() => {
              //  navigate("/home");
              signUp();
            }}
          >
            <a
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              Signup
            </a>
          </button>
          <div
            style={{
              display: "flex",
              //  backgroundColor: "pink",
              width: "100%",
              flex: 1,
              alignItems: "center",
              marginTop: 20,
              marginBottom: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                onClick={checkHandler}
                className="checkbox"
                style={
                  check
                    ? {
                        backgroundColor: Colors.primary,
                        borderColor: Colors.primary,
                      }
                    : {
                        borderColor: "grey",
                      }
                }
              >
                {check ? <AiOutlineCheck color={"white"} /> : null}
              </div>
              <a
                style={{
                  // fontWeight: "bold",
                  // fontSize: 20,
                  color: "white",
                }}
              >
                Remember me
              </a>
            </div>
            <div>
              <a
                style={{
                  // fontWeight: "bold",
                  // fontSize: 20,
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => setType("Login")}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
