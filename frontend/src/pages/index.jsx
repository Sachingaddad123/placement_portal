import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaUser,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function Login() {

  const [isActive, setIsActive] = useState(false);

  // REGISTER STATES
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] =
    useState("");
  const [registerPassword, setRegisterPassword] =
    useState("");

  // LOGIN STATES
  const [loginEmail, setLoginEmail] =
    useState("");
  const [loginPassword, setLoginPassword] =
    useState("");

  // MESSAGE
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] =
    useState("");

  const navigate = useNavigate();

  // SHOW MESSAGE FUNCTION
  const showMessage = (text, type) => {

    setMessage(text);
    setMessageType(type);

    setTimeout(() => {

      setMessage("");

    }, 3000);

  };

  // REGISTER FUNCTION
  const handleRegister = (e) => {

    e.preventDefault();

    if (
      !name ||
      !registerEmail ||
      !registerPassword
    ) {

      showMessage(
        "Please fill all fields",
        "error"
      );

      return;

    }

    if (registerPassword.length < 8) {

      showMessage(
        "Password must be minimum 8 characters",
        "error"
      );

      return;

    }

    // USER DATA
    const userData = {

      name,
      email: registerEmail,
      password: registerPassword,

    };

    // SAVE USER
    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    // SUCCESS MESSAGE
    showMessage(
      "Account created successfully",
      "success"
    );

    // CLEAR FORM
    setName("");
    setRegisterEmail("");
    setRegisterPassword("");

    // OPEN LOGIN PANEL
    setTimeout(() => {

      setIsActive(true);

    }, 1500);

  };

  // LOGIN FUNCTION
  const handleLogin = (e) => {

    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      savedUser &&
      savedUser.email === loginEmail &&
      savedUser.password === loginPassword
    ) {

      // SAVE CURRENT USER
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(savedUser)
      );

      // SUCCESS MESSAGE
      showMessage(
        "Login successful",
        "success"
      );

      // CLEAR FIELDS
      setLoginEmail("");
      setLoginPassword("");

      // NAVIGATE
      setTimeout(() => {

        navigate("/dashboard");

      }, 1500);

    }

    else {

      showMessage(
        "Invalid Email or Password",
        "error"
      );

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden px-4 relative">

      {/* BACKGROUND EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full top-[-150px] left-[-100px] animate-pulse"></div>

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full bottom-[-150px] right-[-100px] animate-pulse"></div>

      {/* SUCCESS / ERROR MESSAGE */}
      {message && (

        <div className="fixed top-6 right-6 z-50">

          <div className="bg-white text-gray-700 min-w-[380px] shadow-2xl rounded-2xl overflow-hidden flex items-center">

            {/* LEFT COLOR BAR */}
            <div
              className={`w-2 h-full ${
                messageType === "success"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            ></div>

            {/* CONTENT */}
            <div className="flex items-center gap-4 px-6 py-5">

              {/* ICON */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg ${
                  messageType === "success"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >

                {messageType === "success" ? (
                  <FaCheckCircle />
                ) : (
                  <FaExclamationCircle />
                )}

              </div>

              {/* MESSAGE TEXT */}
              <p className="text-lg font-medium">

                {message}

              </p>

            </div>

          </div>

        </div>

      )}

      {/* MAIN CONTAINER */}
      <div className="relative w-[950px] max-w-full min-h-[600px] bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] border border-slate-700">

        {/* REGISTER SECTION */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ${
            isActive
              ? "translate-x-full opacity-0 z-10"
              : "translate-x-0 opacity-100 z-20"
          }`}
        >

          <form
            onSubmit={handleRegister}
            className="h-full flex flex-col justify-center items-center px-12 bg-slate-900 text-white"
          >

            <h1 className="text-4xl font-bold mb-2">

              Create Account

            </h1>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mb-5">

              <SocialIcon icon={<FaFacebookF />} />

              <SocialIcon icon={<FaGoogle />} />

              <SocialIcon icon={<FaLinkedinIn />} />

            </div>

            {/* NAME */}
            <div className="w-full relative mb-4">

              <FaUser className="absolute left-4 top-4 text-slate-400" />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-xl py-3 pl-12 pr-4 outline-none"
              />

            </div>

            {/* EMAIL */}
            <div className="w-full relative mb-4">

              <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

              <input
                type="email"
                placeholder="Email Address"
                value={registerEmail}
                onChange={(e) =>
                  setRegisterEmail(
                    e.target.value
                  )
                }
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-xl py-3 pl-12 pr-4 outline-none"
              />

            </div>

            {/* PASSWORD */}
            <div className="w-full relative mb-5">

              <FaLock className="absolute left-4 top-4 text-slate-400" />

              <input
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) =>
                  setRegisterPassword(
                    e.target.value
                  )
                }
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-xl py-3 pl-12 pr-4 outline-none"
              />

            </div>

            {/* BUTTON */}
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">

              Create Account

            </button>

          </form>

        </div>

        {/* LOGIN SECTION */}
        <div className="absolute top-0 right-0 w-1/2 h-full z-20">

          <form
            onSubmit={handleLogin}
            className="h-full flex flex-col justify-center items-center px-12 bg-slate-900 text-white"
          >

            <h1 className="text-4xl font-bold mb-2">

              Sign In

            </h1>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mb-5">

              <SocialIcon icon={<FaFacebookF />} />

              <SocialIcon icon={<FaGoogle />} />

              <SocialIcon icon={<FaLinkedinIn />} />

            </div>

            {/* EMAIL */}
            <div className="w-full relative mb-4">

              <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

              <input
                type="email"
                placeholder="Email Address"
                value={loginEmail}
                onChange={(e) =>
                  setLoginEmail(
                    e.target.value
                  )
                }
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-xl py-3 pl-12 pr-4 outline-none"
              />

            </div>

            {/* PASSWORD */}
            <div className="w-full relative mb-5">

              <FaLock className="absolute left-4 top-4 text-slate-400" />

              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) =>
                  setLoginPassword(
                    e.target.value
                  )
                }
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-xl py-3 pl-12 pr-4 outline-none"
              />

            </div>

            {/* BUTTON */}
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">

              Sign In

            </button>

          </form>

        </div>

        {/* SLIDER PANEL */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 text-white flex flex-col justify-center items-center text-center px-10 transition-all duration-700 z-30 ${
            isActive
              ? "-translate-x-full"
              : ""
          }`}
        >

          <div className="text-8xl mb-6">

            🤖

          </div>

          {!isActive ? (

            <>

              <h1 className="text-5xl font-bold mb-4">

                Welcome Back!

              </h1>

              <p className="text-lg mb-8 max-w-sm">

                Login and continue your
                journey

              </p>

              <button
                type="button"
                onClick={() =>
                  setIsActive(true)
                }
                className="border-2 border-white px-8 py-3 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >

                Sign In

              </button>

            </>

          ) : (

            <>

              <h1 className="text-5xl font-bold mb-4">

                Hello Friend!

              </h1>

              <p className="text-lg mb-8 max-w-sm">

                Create your account and
                explore the portal

              </p>

              <button
                type="button"
                onClick={() =>
                  setIsActive(false)
                }
                className="border-2 border-white px-8 py-3 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >

                Create Account

              </button>

            </>

          )}

        </div>

      </div>

    </div>

  );

}

// SOCIAL ICON COMPONENT
function SocialIcon({ icon }) {

  return (

    <button
      type="button"
      className="w-11 h-11 rounded-full border border-slate-600 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
    >

      {icon}

    </button>

  );

}

export default Login;
