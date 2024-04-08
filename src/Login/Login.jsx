import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import ErrorMessages from "./ErrorMessage";
import './Login.css'

function Login() {

  const obj = [
    { email: "dev.bhardwaj851@gmail.com", username: "dev" },
    { email: "mukulbhardwaj966@gmail.com", username: "mukulji" },
    { email: "vansh1@gmail.com", username: "vanshg" },
  ];
  const [state, setState] = useState({
    Username: { flag: null, msg: "" },
    Email: { flag: null, msg: "" },
    Name: { flag: null, msg: "" },
    Password: { flag: null, msg: "" },
    Terms: { flag: null, msg: "" },
  });

  function handleSubmit() {
    //this line ensure that all the required filled is correctly filled 
    const finalflag = Object.keys(state).every((val) => {
      return state[val].flag === false;
    })
    console.log(finalflag)


  }

  function validateAndSetState(event) {
    const { name: id, value } = event.target;
    const user = "vanshg";

    switch (id) {
      case "Email":
        const check = value.includes("@gmail.com");
        setState((prev) => ({
          ...prev,
          Email: { flag: !check, msg: ErrorMessages.email },
        }));
        break;
      // Password and username have common case.
      case "Username":
      case "Password":
        if (value === "" || value.includes(" ")) {
          setState((prev) => ({
            ...prev,
            [id]: {
              flag: true,
              msg: value === "" ? `${ErrorMessages.empty}` : `${id} ${ErrorMessages.spacesNotAllowed}`,
            },
          }));
        } else if (id === "Password") {
          setState((prev) => ({
            ...prev,
            [id]: {
              flag: value.length < 7,
              msg: `Password ${ErrorMessages.passwordLengthError}`,
            },
          }));
        } else {
          setState((prev) => ({
            ...prev,
            [id]: {
              flag: value === user,
              msg: `${id} ${ErrorMessages.alreadyTaken}`,
            },
          }));
        }
        break;

      case "Name":
        setState((prev) => ({
          ...prev,
          [id]: {
            flag: value.trim().length === 0,
            msg: `${ErrorMessages.empty}`,
          },
        }));
        break;

      case "Terms":
        setState((prev) => ({
          ...prev,
          [id]: {
            flag: !event.target.checked,
            msg: `${ErrorMessages.termsConditionError}`,
          },
        }));
    }
  }

  return (
    <div className="flex  md:justify-between justify-center gap-10">
      <div className="h-screen md:block hidden md:sticky md:top-0" style={{ flexBasis: "35%", minWidth: "30%" }}>
        <video loop autoPlay={true} muted={true} className="h-full object-cover flex-shrink min-w-[100%]">
          <source src="./login-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex  ">
        <div className="mt-20 space-y-10 ml-7  ">{/*this is target div*/}
          <div className="md:space-x-3 md:space-y-3 ">
            <h1 className="md:text-3xl font-bold	text-2xl ">Sign up to Dribbble</h1>
            <div className="w-auto h-8 pt-4 ">
              <li className={` list-none relative -left-full text-red-500 ${state.Email.flag ? "transition-all duration-500  left-0 list-disc " : ""}`}>
                {state.Email.flag ? state.Email.msg : null}
              </li>
            </div>
          </div>
          <div className="flex  h-16  ">
            <div className="md:w-1/2 ">
              <div className=" flex gap-2 ">
                <h1 className="font-bold ">Name </h1>
                <img className={` ${state.Name.flag === false ? 'hidden' : state.Name.flag === true ? 'h-4 self-center' : 'hidden'}`} src="./attention.svg" />

              </div>
              <input id={state.Name.flag === true ? "alert" : state.Name.flag === false ? "change" : ""} onChange={validateAndSetState} className=" pl-3 pr-3 rounded-xl py-1 border-2 bg-neutral-100 transition duration-200 ease-in-out hover:border-pink-200 hover:shadow-md focus:border-pink-200 focus:shadow-md outline-none " style={{ width: "calc(100% - 2rem)" }} name="Name" />
              <div className=" text-xs pt-1">
                <h1 className={`text-xs relative  text-red-500 ${state.Name.flag ? "transition-all duration-500" : ""}`}>
                  {state.Name.flag ? state.Name.msg : null}
                </h1>
              </div>
            </div>
            <div className=" md:w-1/2    ">
              <div className=" flex gap-2 ">
                <h1 className="font-bold ">Username</h1>
                <img className={` ${state.Username.flag === false ? 'hidden' : state.Username.flag === true ? 'h-4 self-center' : 'hidden'}`} src="./attention.svg" />

              </div>
              <input id={state.Username.flag === true ? "alert" : state.Username.flag === false ? "change" : ""} onChange={validateAndSetState} className=" pl-3 pr-3  rounded-xl py-1 border-2 bg-neutral-100 transition duration-200 ease-in-out hover:border-pink-200 hover:shadow-md  focus:border-pink-200 focus:shadow-md outline-none " style={{ width: "calc(100% - 2rem)" }} name="Username" />
              <div className=" text-xs pt-1">
                <h1 className={`  text-xs relative  text-red-500 ${state.Username.flag ? "transition-all duration-500" : ""}`}>
                  {state.Username.flag ? state.Username.msg : null}
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div className=" flex gap-2 ">
              <h1 className="font-bold ">Email </h1>
              <img className={` ${state.Email.flag === false ? 'hidden' : state.Email.flag === true ? 'h-4 self-center' : 'hidden'}  `} src="./attention.svg" />

            </div>
            <input id={state.Email.flag === true ? "alert" : state.Email.flag === false ? "change" : ""} onChange={validateAndSetState} className="pl-3 pr-3  rounded-xl py-1 border-2 bg-neutral-100 transition duration-300 ease-in-out hover:border-pink-200 hover:shadow-md focus:border-pink-200 focus:shadow-md outline-none" style={{ width: "calc(100% - 2rem)" }} name="Email" />
          </div>
          <div className="mt-6 flex flex-col h-16 ">
            <div className=" flex gap-2 ">
              <h1 className="font-bold ">Password </h1>
              <img className={` ${state.Password.flag === false ? 'hidden' : state.Password.flag === true ? 'h-4 self-center' : 'hidden'}  `} src="./attention.svg" />

            </div>
            <input id={state.Password.flag === true ? "alert" : state.Password.flag === false ? "change" : ""} onChange={validateAndSetState} placeholder="6+ Character" className="pl-3 pr-3 rounded-xl py-1 border-2 bg-neutral-100 transition duration-300 ease-in-out hover:border-pink-200 hover:shadow-md focus:border-pink-200 focus:shadow-md outline-none" style={{ width: "calc(100% - 2rem)" }} name="Password" />
            <div className=" text-xs pt-1">
              <h1 className={`  text-xs relative  text-red-500 ${state.Password.flag ? "transition-all duration-500 " : ""}`}>
                {state.Password.flag ? state.Password.msg : null}
              </h1>
            </div>
          </div>
          <div className="text-zinc-500  flex flex-col gap-1  h-20 ">

            <div className=" flex ">
              <Checkbox name="Terms" defaultChecked={true} onClick={validateAndSetState} />
              <div className=" md:block hidden text-start text-sm ">
                <h1>Creating an acount means you'r okay with our Terms of Service,</h1>
                <h1>Settings Privacy Policy, and our default Notification</h1>
                <h1>Settings.</h1>
              </div>
              <div className="md:hidden text-sm">
                Creating an acount means you'r okay with our Terms of Service,
                Settings Privacy Policy, and our default Notification
                Settings.
              </div>
            </div>
            <div className=" text-xs pt-1">
              <h1 className={`text-xs relative  text-red-500 ${state.Terms.flag ? "transition-all duration-500" : ""}`}>
                {state.Terms.flag ? state.Terms.msg : null}
              </h1>
            </div>

          </div>

          <div className="md:relative md:top-5  ">
            <button onClick={handleSubmit} className=" transition duration-300 ease-in-out bg-pink-600 text-white px-10 py-2 rounded-md hover:bg-pink-400">Create Account</button>
          </div>
          <div className=" md:hidden relative bottom-6 ">
            <h6>Already a member? Sign in</h6>
          </div>
          <div className="md:static relative bottom-8 text-zinc-500 text-xs">
            <p >This site is projected by reCAPTCHA and the Google <br />Privacy Policy and Terms of Service apply</p>
          </div>
        </div>
        <div className="mt-4 mr-3 md:block hidden	 text-xs">
          <h6>Already a member? Sign in</h6>
        </div>
      </div>
    </div>
  );
}

export default Login;
