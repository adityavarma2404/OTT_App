import React, { useRef, useState, useEffect } from "react";
import "../../../css/Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const signInContainerRef = useRef(null);
  const registerContainerRef = useRef(null);
  const loginOneRef = useRef(null);
  const loginTwoRef = useRef(null);
  const signUpRef = useRef(null);
  const confirmPassRef = useRef(null);
  const passRef = useRef(null);
  const signInButtonHandler = () => {
    signInContainerRef.current.style.display = "none";
    loginTwoRef.current.style.display = "flex";
    loginOneRef.current.style.display = "none";
    registerContainerRef.current.style.display = "block";
  };
  const logInButtonHandler = () => {
    signInContainerRef.current.style.display = "block";
    loginTwoRef.current.style.display = "none";
    loginOneRef.current.style.display = "flex";
    registerContainerRef.current.style.display = "none";
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const [error_, setError_] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [confPass, setConfPass] = useState("");
  const [pass, setPass] = useState("");
  const { signup, login } = useAuth();

  async function handleSignUp(e) {
    e.preventDefault();
    const confirmP = confirmPassRef.current.value;
    const pass = passRef.current.value;
    const userId = signUpRef.current.value;

    if (confirmP !== pass) {
      return setError_("Password does not match!");
    }
    try {
      setError_("");
      setLoading(true);
      await signup(userId, pass);
      navigate("/home");
    } catch {
      setError_("Failed to create an account");
    }
    setLoading(false);
    setEmail("");
    setConfPass("");
    setPass("");
  }

  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handleConfPass = (e) => {
    setConfPass(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const loginEmailRef = useRef(null);
  const loginPassRef = useRef(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const handleLoginPass = (e) => {
    setLoginPass(e.target.value);
  };
  async function handleLogin(e) {
    e.preventDefault();
    if(loginEmail === "" || loginPass === ""){
        return setLoginError("Fields cannot be empty.");
    }

    try {
      setLoginError("");
      setLoginLoading(true);
      await login(loginEmail, loginPass);
      navigate("/home");
    } catch {
      setLoginError("Failed to Login");
    }
    setLoginLoading(false);
    setLoginEmail("");
    setLoginPass("");
  }

  // login form
  const loginForm = () => {
    return (
      <div className=" loginContainer">
        <div className="mb-4">
          <h1 className="headingTwo mainHeadings mb-3">Log in</h1>
          <div className=" d-flex justify-content-around">
            <div className="iconBackground text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-facebook fbLogo"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>
            <div className="iconBackground text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="inputContainer leftAnimation mb-4">
          <input
            ref={loginEmailRef}
            value={loginEmail}
            onChange={handleLoginEmail}
            type="text"
            className="loginInput"
            required
          />
          <label> Email ID</label>
        </div>
        <div className="inputContainer rightAnimation mb-3">
          <input
            ref={loginPassRef}
            value={loginPass}
            onChange={handleLoginPass}
            type="password"
            className="loginInput"
            required
          />
          <label> Password</label>
        </div>
        <div className="anchorContainer d-flex justify-content-end mb-4">
          <Link className="anchor" to="/forgotPassword">
            {" "}
            forgot password ?
          </Link>
        </div>
        <div className="btnLoginContainer">
          <button
            onClick={handleLogin}
            disabled={loginLoading}
            className="loginButton"
          >
            Login
          </button>
        </div>
        {loginError && <div className="loginError">* {loginError}</div>}
      </div>
    );
  };

  // register form
  const registerForm = (name) => {
    let borderColor = "";
    let textColor = "";
    let heading = "";
    if (windowSize.width <= 850) {
      borderColor = "inputDarkBorder";
      textColor = "dark";
      heading = "mobileHeading";
    } else {
      borderColor = "inputLiteBorder";
      textColor = "litegrey";
      heading = "headingTwo";
    }
    return (
      <form onSubmit={handleSignUp} className="mobileRegisterForm">
        <p className={`${heading} mainHeadings`}>Register..</p>
        {error_ && <div className="registrationError">* {error_}</div>}

        <div className="RegisterContainer rightAnimation mb-4">
          <input
            id={`${name}mailId`}
            ref={signUpRef}
            value={email}
            onChange={handleMail}
            type="text"
            className={borderColor}
            required
          />
          <label htmlFor={`${name}mailId`} className={textColor}>
            {" "}
            Mail id
          </label>
        </div>
        <div className="RegisterContainer rightAnimation mb-4">
          <input
            id={`${name}confPass`}
            ref={confirmPassRef}
            type="password"
            value={confPass}
            onChange={handleConfPass}
            className={borderColor}
            required
          />
          <label htmlFor={`${name}confPass`} className={textColor}>
            {" "}
            Confirm Password
          </label>
        </div>
        <div className="RegisterContainer rightAnimation mb-4">
          <input
            id={`${name}pass`}
            ref={passRef}
            type="password"
            value={pass}
            onChange={handlePass}
            className={borderColor}
            required
          />
          <label htmlFor={`${name}pass`} className={textColor}>
            {" "}
            Password
          </label>
        </div>
        <div className="signUpContainer">
          <button
            disabled={loading}
            type="submit"
            className={`signUpButton ${borderColor} ${textColor}`}
          >
            Sign up
          </button>
        </div>
      </form>
    );
  };

  // mobile login and register options
  const mobileRegisterForm = useRef();
  const mobileLoginForm = useRef();
  const enableRegister = () => {
    mobileRegisterForm.current.style.display = "block";
    mobileLoginForm.current.style.display = "none";
  };
  const enableLogin = () => {
    mobileRegisterForm.current.style.display = "none";
    mobileLoginForm.current.style.display = "block";
  };

  return (
    <div className="bodyBackground">
      <div className="logo"></div>
      <div className="container ">
        <div className="containerOne ">
          <div ref={signInContainerRef}>
            <p className="heading welcomeHeading mainHeadings">Welcome!</p>
            <p className="para mt-2">Feeling bored?</p>
            <p className="para">checkout what we have for you...</p>
            <div className="signUpContainer">
              <button
                className="signUpButton inputLiteBorder litegrey"
                onClick={signInButtonHandler}
              >
                Sign up
              </button>
            </div>
          </div>
          <div ref={registerContainerRef} className="hiddenRegister">
            {registerForm("desktop")}
          </div>
        </div>
        <div className="containerTwo">
          <div ref={loginOneRef} style={{ width: "100%" }}>
            {loginForm()}
          </div>
          <div
            className="registeredContainer flex-column justify-content-center align-items-center"
            ref={loginTwoRef}
          >
            <p className="RegisteredHeading">Already registered...</p>
            <p className="para">what's the wait for?</p>
            <div className="btnLoginContainer">
              <button className="loginButton" onClick={logInButtonHandler}>
                Login
              </button>
            </div>
          </div>
        </div>
        {/* mobile register  */}
        <div className="mobileContainer">
          <div className="mobileSubContainer">
            <div className="mt-3">
              <p className="heading mobileWelcomeHeading">Welcome!</p>
            </div>

            <div ref={mobileLoginForm} className="mobileLoginForm">
              {loginForm()}
            </div>
            <div
              ref={mobileRegisterForm}
              className="hiddenRegister mobileRegisterFormContainer ps-2 pe-2"
            >
              {registerForm("mobile")}
            </div>
            <div className="mobileButtonsContainer">
              <button
                className="mobileButton leftAnimation me-5"
                onClick={enableRegister}
              >
                Register
              </button>
              <button
                className="mobileButton rightAnimation"
                onClick={enableLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
