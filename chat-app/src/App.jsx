import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      alert("Account created!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

        * { box-sizing: border-box; margin: 0; padding: 0; font-family: Raleway, sans-serif; }

        body { background: linear-gradient(90deg, #C7C5F4, #776BCC); }

        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .screen {
          background: linear-gradient(90deg, #5D54A4, #7C78B8);
          position: relative;
          height: 600px;
          width: 360px;
          box-shadow: 0px 0px 24px #5C5696;
          overflow: hidden;
        }

        .screen__content {
          z-index: 1;
          position: relative;
          height: 100%;
        }

        .screen__background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .screen__background__shape {
          transform: rotate(45deg);
          position: absolute;
        }

        .screen__background__shape1 {
          height: 520px;
          width: 520px;
          background: #FFF;
          top: -50px;
          right: 120px;
          border-radius: 0 72px 0 0;
        }

        .screen__background__shape2 {
          height: 220px;
          width: 220px;
          background: #6C63AC;
          top: -172px;
          right: 0;
          border-radius: 32px;
        }

        .screen__background__shape3 {
          height: 540px;
          width: 190px;
          background: linear-gradient(270deg, #5D54A4, #6A679E);
          top: -24px;
          right: 0;
          border-radius: 32px;
        }

        .screen__background__shape4 {
          height: 400px;
          width: 200px;
          background: #7E7BB9;
          top: 420px;
          right: 50px;
          border-radius: 60px;
        }

        /* LOGIN */
        .login {
          width: 320px;
          padding: 30px;
          padding-top: 156px;
        }

        .login__field {
          padding: 20px 0px;
          position: relative;
        }

        .login__icon {
          position: absolute;
          top: 30px;
          color: #7875B5;
        }

        .login__input {
          border: none;
          border-bottom: 2px solid #D1D1D4;
          background: none;
          padding: 10px;
          padding-left: 24px;
          font-weight: 700;
          width: 75%;
          transition: .2s;
        }

        .login__input:focus {
          outline: none;
          border-bottom-color: #6A679E;
        }

        .login__submit {
          background: #fff;
          font-size: 14px;
          margin-top: 30px;
          padding: 16px 20px;
          border-radius: 26px;
          border: 1px solid #D4D3E8;
          text-transform: uppercase;
          font-weight: 700;
          display: flex;
          align-items: center;
          width: 100%;
          color: #4C489D;
          box-shadow: 0px 2px 2px #5C5696;
          cursor: pointer;
          transition: .2s;
        }

        .login__submit:hover {
          border-color: #6A679E;
        }

        .button__icon {
          font-size: 24px;
          margin-left: auto;
          color: #7875B5;
        }

        .error {
          color: #ff6b6b;
          font-size: 12px;
          margin-top: 8px;
        }

        /* SOCIAL */
        .social-login {
          position: absolute;
          height: 140px;
          width: 160px;
          text-align: center;
          bottom: 0;
          right: 0;
          color: #fff;
        }

        /* PANELS */
        .panel {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        }

        .panel-login {
          transform: ${isLogin ? "translateY(0)" : "translateY(-100%)"};
          opacity: ${isLogin ? "1" : "0"};
        }

        /* 🔥 FIXED SIGNUP PANEL */
        .panel-signup {
          transform: ${isLogin ? "translateY(100%)" : "translateY(0)"};
          opacity: ${isLogin ? "0" : "1"};

          display: flex;
          align-items: flex-start; /* move content to top */
          justify-content: center;
        }

        /* 🔥 SIGNUP FORM POSITION FIX */
        .signup-form {
          width: 320px;
          padding: 30px;
          padding-top: 60px; /* moved UP */
        }

        /* keep original signup styling */
        .signup-input {
          border: none;
          border-bottom: 2px solid rgba(255,255,255,0.5);
          background: none;
          padding: 10px;
          padding-left: 24px;
          font-weight: 700;
          width: 75%;
          transition: .2s;
          color: #fff;
        }

        .signup-input::placeholder {
          color: rgba(255,255,255,0.7);
        }

        .signup-input:focus {
          outline: none;
          border-bottom-color: #fff;
        }

        .signup-icon {
          position: absolute;
          top: 30px;
          color: rgba(255,255,255,0.8);
        }

        .signup-submit {
          background: transparent;
          font-size: 14px;
          margin-top: 30px;
          padding: 16px 20px;
          border-radius: 26px;
          border: 2px solid #fff;
          text-transform: uppercase;
          font-weight: 700;
          display: flex;
          align-items: center;
          width: 100%;
          color: #fff;
          cursor: pointer;
          transition: .2s;
        }

        .signup-submit:hover {
          background: rgba(255,255,255,0.1);
        }

        .signup-icon-btn {
          font-size: 24px;
          margin-left: auto;
          color: #fff;
        }
      `}</style>
      <div className="container">
        <div className="screen">
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>

          <div className="screen__content">

            {/* LOGIN PANEL */}
            <div className="panel panel-login">
              <form className="login" onSubmit={handleLogin}>
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" placeholder="User name / Email"
                    value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" placeholder="Password"
                    value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                {error && isLogin && <p className="error">{error}</p>}
                <button className="button login__submit" type="submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
              <div className="social-login">
                <p style={{ color: "#fff", fontSize: "13px", marginBottom: "10px" }}>Don't have an account?</p>
                <button onClick={() => { setIsLogin(false); setError(""); }}
                  style={{ background: "transparent", border: "2px solid #fff", color: "#fff", padding: "10px 24px", borderRadius: "26px", cursor: "pointer", fontWeight: "700", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", transition: ".2s" }}>
                  Sign Up
                </button>
              </div>
            </div>

            {/* SIGNUP PANEL */}
            <div className="panel panel-signup">
              <form className="signup-form" onSubmit={handleSignup}>
                
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Username"
                    value={signupName}
                    onChange={e => setSignupName(e.target.value)}
                  />
                </div>

                <div className="login__field">
                  <i className="login__icon fas fa-envelope"></i>
                  <input
                    type="email"
                    className="login__input"
                    placeholder="Email"
                    value={signupEmail}
                    onChange={e => setSignupEmail(e.target.value)}
                  />
                </div>

                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    value={signupPassword}
                    onChange={e => setSignupPassword(e.target.value)}
                  />
                </div>

                {error && !isLogin && <p className="error">{error}</p>}

                <button className="button login__submit" type="submit">
                  <span className="button__text">Create Account</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>

              </form>

              <div className="social-login">
                <p style={{ color: "#fff", fontSize: "13px", marginBottom: "10px" }}>
                  Have an account?
                </p>
                <button
                  onClick={() => { setIsLogin(true); setError(""); }}
                  style={{
                    background: "transparent",
                    border: "2px solid #fff",
                    color: "#fff",
                    padding: "10px 24px",
                    borderRadius: "26px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    transition: ".2s"
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    </>
  );
}