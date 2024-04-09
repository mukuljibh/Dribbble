import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import ErrorMessages from "./ErrorMessage";
import './Login.css'
import { EventNote } from "@mui/icons-material";

function Login() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Username: "",
    Password: "",
    Terms: ""
  });
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
  const [timerDebounce, setTimerDebounce] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
    //this line ensure that all the required filled is correctly filled 
    const finalflag = Object.keys(state).every((val) => {
      return state[val].flag === false;
    })
    console.log(finalflag)
    console.log(state)
  }

  function validateAndSetState(event) {
    const { name: id, value } = event.target;
    const user = "vanshg";
    clearTimeout(timerDebounce)
    //setting up the form data for controlling the component(single source of truth)
    setFormData((prev) => {
      return {
        ...prev, [id]: value
      }
    })
    //introduced debouncing so that unnecessary execution of this function should be avoided.
    const timerId = setTimeout(() => {
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

          if (value === "" || value.includes(" ")) {
            setState((prev) => ({
              ...prev,
              [id]: {
                flag: true,
                msg: value === "" ? `Username ${ErrorMessages.empty}` : `Username ${ErrorMessages.spacesNotAllowed}`,
              },
            }));
          } else if (value === user) {
            setState((prev) => ({
              ...prev,
              [id]: {
                flag: value === user,
                msg: `Username ${ErrorMessages.alreadyTaken}`,
              },
            }));
          }
          else {
            setState((prev) => ({
              ...prev,
              [id]: {
                flag: false,
                msg: ""
              },
            }));
          }
          break;

        case "Password":
          if (value === "" || value.includes(" ")) {
            setState((prev) => ({
              ...prev,
              [id]: {
                flag: true,
                msg: value === "" ? `Password ${ErrorMessages.empty}` : `Password ${ErrorMessages.spacesNotAllowed}`,
              },
            }));
          }

          else {
            setState((prev) => ({
              ...prev,
              [id]: {
                flag: value.length < 7,
                msg: `Password ${ErrorMessages.passwordLengthError}`,
              },
            }));
          }
          break;
        case "Name":
          setState((prev) => ({
            ...prev,
            [id]: {
              flag: value.trim().length === 0,
              msg: `Name ${ErrorMessages.empty}`,
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
    }, 200)
    setTimerDebounce(timerId);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="md:flex md:justify-between justify-center gap-10">

        <div className=" h-screen md:block hidden md:sticky md:top-0 " style={{ flexBasis: "35%", minWidth: "30%" }}>

          <video loop autoPlay={true} muted={true} className="h-full object-cover flex-shrink min-w-[100%]">
            <source src="./login-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <img className="h-12 md:absolute md:block hidden " src="./brands/dribbble-pink.png" />

        <div className="flex">
          <div className="mt-20 space-y-10 ml-7  md:relative md:bottom-10 ">

            <div className="  md:space-x-3 md:space-y-3 md:relative md:top-4 ">
              <h1 className="md:text-3xl font-bold	text-2xl ">Sign up to Dribbble</h1>
              <div className=" md:relative w-auto md:h-32 h-24 md:text-nowrap  md:text-sm text-xs pt-4    ">
                <li className={` relative transition duration-300 ease-in-out opacity-0 text-red-500 ${state.Email.flag ? "opacity-100" : ''}`}>
                  {state.Email.flag ? state.Email.msg : null}
                </li>
                <li className={`text-wrap relative transition duration-300 ease-in-out opacity-0 text-red-500 ${state.Username.flag ? "opacity-100" : ""}`}>
                  {state.Username.msg}
                </li>
                <li className={`relative transition duration-300 ease-in-out opacity-0 text-red-500 ${state.Name.flag ? "opacity-100" : ""}`}>
                  {state.Name.msg}
                </li>
                <li className={`relative transition duration-300 ease-in-out opacity-0 text-red-500 ${state.Password.flag ? "opacity-100" : ""}`}>
                  {state.Password.msg}
                </li>
                <li className={`relative transition duration-300 ease-in-out opacity-0 text-red-500 ${state.Terms.flag ? "opacity-100" : ""}`}>
                  {state.Terms.msg}
                </li>
              </div>
            </div>
            <div className="flex  h-16  ">
              <div className="md:w-1/2 ">
                <div className=" flex gap-2 ">
                  <h1 className="font-bold ">Name </h1>
                  <img className={` ${state.Name.flag === false ? 'hidden' : state.Name.flag === true ? 'h-4 self-center' : 'hidden'}`} src="./attention.svg" />

                </div>
                <input required value={formData.Name} name="Name" id={state.Name.flag === true ? "alert" : state.Name.flag === false ? "change" : ""} onChange={validateAndSetState} className=" pl-3 pr-3 rounded-xl py-1 border-2 bg-neutral-100 transition duration-200 ease-in-out hover:border-pink-200 hover:shadow-md focus:border-pink-200 focus:shadow-md outline-none " style={{ width: "calc(100% - 2rem)" }} />

              </div>
              <div className=" md:w-1/2    ">
                <div className=" flex gap-2 ">
                  <h1 className="font-bold ">Username</h1>
                  <img className={` ${state.Username.flag === false ? 'hidden' : state.Username.flag === true ? 'h-4 self-center' : 'hidden'}`} src="./attention.svg" />

                </div>
                <input required value={formData.Username} id={state.Username.flag === true ? "alert" : state.Username.flag === false ? "change" : ""} onChange={validateAndSetState} className=" pl-3 pr-3  rounded-xl py-1 border-2 bg-neutral-100 transition duration-200 ease-in-out hover:border-pink-200 hover:shadow-md  focus:border-pink-200 focus:shadow-md outline-none " style={{ width: "calc(100% - 2rem)" }} name="Username" />

              </div>
            </div>

            <div>
              <div className=" flex gap-2 ">
                <h1 className="font-bold ">Email </h1>
                <img className={` ${state.Email.flag === false ? 'hidden' : state.Email.flag === true ? 'h-4 self-center' : 'hidden'}  `} src="./attention.svg" />

              </div>
              <input required value={formData.Email} id={state.Email.flag === true ? "alert" : state.Email.flag === false ? "change" : ""} onChange={validateAndSetState} className="pl-3 pr-3  rounded-xl py-1 border-2 bg-neutral-100 transition duration-300 ease-in-out hover:border-pink-200 hover:shadow-md focus:border-pink-200 focus:shadow-md outline-none" style={{ width: "calc(100% - 2rem)" }} name="Email" />
            </div>
            <div className="mt-6 flex flex-col h-16 ">
              <div className=" flex gap-2 ">
                <h1 className="font-bold ">Password </h1>
                <img className={` ${state.Password.flag === false ? 'hidden' : state.Password.flag === true ? 'h-4 self-center' : 'hidden'}  `} src="./attention.svg" />

              </div>
              <input required value={formData.Password} id={state.Password.flag === true ? "alert" : state.Password.flag === false ? "change" : ""} onChange={validateAndSetState} placeholder="6+ Character" className="pl-3 pr-3 rounded-xl py-1 border-2 bg-neutral-100 transition duration-300 ease-in-out hover:border-pink-200 hover:shadow-md focus:border-pink-200 focus:shadow-md outline-none" style={{ width: "calc(100% - 2rem)" }} name="Password" />

            </div>
            <div className="text-zinc-500  flex flex-col gap-1  h-20 ">

              <div className=" flex ">
                <Checkbox required value={formData.Terms} className="self-start" name="Terms" onClick={validateAndSetState} />
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


            </div>

            <div className="md:relative md:top-5  ">
              <button type="submit" className=" transition duration-300 ease-in-out bg-pink-600 text-white px-10 py-2 rounded-md hover:bg-pink-400 focus:bg-pink-400">Create Account</button>
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
    </form >
  );
}

export default Login;
