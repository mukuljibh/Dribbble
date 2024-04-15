import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import ErrorMessages from "./ErrorMessage";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { updateProfile } from '../reducers/userDetailsReducer.js'
import { postDataAPI, isUserExistAPI } from "../apiService.js";
import signupvideo2 from "./assets/videos/signup-video2.mp4"

export default function SignupPage() {
  let Navigate = useNavigate(true);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(null);
  const [alreadyTaken, setAlreadyTaken] = useState(null);
  const [isUsernameExists, SetIsUsernameExists] = useState(null);


  const formik = useFormik({
    initialValues: {
      Email: "",
      Username: "",
      Name: "",
      Password: "",
      Terms: ""
    },
    validationSchema: Yup.object({
      Name: Yup.string().required(`Name ${ErrorMessages.emptyRegexMessage}`),
      Username: Yup.string().required(`Username ${ErrorMessages.emptyRegexMessage}`)
        //api call for check username exist or not
        .test('custom-validation', `Username ${ErrorMessages.alreadyTakenRegexMessage}`, async (typedInput) => {

          if (!typedInput || !isUsernameExists) {
            return true;
          }
          return false;
        })
        .min(6, `Username ${ErrorMessages.lengthErrorRegexMessage}`)
        .matches(/^\S*$/, `Username ${ErrorMessages.spaceNotAllowedRegexMessage}`)

      ,
      Password: Yup.string().required(`Password ${ErrorMessages.emptyRegexMessage}`)
        .matches(/^[a-zA-Z0-9_\-!@#$%^&*()+=[\]{}|\\;:'",<.>/?]{8,}$/, `Password ${ErrorMessages.passwordRegexMessage}`),

      Email: Yup.string().required(`Email ${ErrorMessages.emptyRegexMessage}`)
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, ErrorMessages.emailRegexMessage),

      Terms: Yup.array()
        .required(ErrorMessages.termsConditionRegexMessage)
        .min(1, ErrorMessages.termsConditionRegexMessage)

    }),
    onSubmit: (userDetails) => {
      setLoader(true)
      //preventing to go to other route until database is not connected
      postDataAPI(userDetails)
        .then((msg) => {
          alert(msg)

          Navigate('/profile');
        })
        .catch((err) => {
          setAlreadyTaken(err)
          setLoader(false)
        })

      dispatch(updateProfile({ Email: userDetails.Email, Username: userDetails.Username, Name: userDetails.Name }))
    }

  });
  useEffect(() => {
    let timer = setTimeout(async () => {
      try {
        let isUsernameExists = await isUserExistAPI(formik.values.Username)
        SetIsUsernameExists(isUsernameExists);
      }
      catch (err) {
        throw new Error('database is not connected');
      }
    }, 450)
    //clear timeout when input suddenly changes
    return () => clearTimeout(timer);
  }, [formik.values.Username])

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="md:flex md:justify-between justify-center gap-10 border  ">

        <div className=" h-screen md:block hidden top-0 sticky  " style={{ flexBasis: "35%", minWidth: "30%" }}>
          <img className="h-14 absolute left-9 top-5 " src="https://res.cloudinary.com/df8suxer2/image/upload/v1713085030/xlsuba1pijqdde2abjil.png" alt="logo" />

          <video loop autoPlay muted className="h-full object-cover flex-shrink min-w-[100%]">
            <source src={signupvideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>



        <div className="flex">
          <div className="mt-20 space-y-10 ml-7  md:relative md:bottom-10 ">

            <div className="  md:space-x-3 md:space-y-3 md:relative md:top-4 ">

              <h1 className="md:text-3xl font-bold	text-2xl ">Sign up to Dribbble</h1>
              <div className=" text-red-500 border relative md:right-3 md:text-lg text-xs top-2">
                {alreadyTaken ? alreadyTaken : ''}
              </div>

              <div className=" md:relative w-auto md:h-20 h-14 md:text-nowrap md:text-xs md:pt-0 pt-2 text-xs text-red-500  relative top-2 ">
                <li className={`  transition duration-300 ease-in-out opacity-0  ${formik.errors.Name && formik.touched.Name ? "opacity-100" : ""}`}>
                  {formik.touched.Name && formik.errors.Name ? formik.errors.Name : null}
                </li>
                <li className={` text-wrap  transition duration-300 ease-in-out opacity-0  ${formik.errors.Username && formik.touched.Username ? "opacity-100" : ""}`}>
                  {formik.touched.Username && formik.errors.Username ? formik.errors.Username : null}
                </li>
                <li className={`   transition duration-300 ease-in-out opacity-0  ${formik.errors.Email && formik.touched.Email ? "opacity-100" : ''}`}>
                  {formik.touched.Email && formik.errors.Email ? formik.errors.Email : null}
                </li>
                <li className={`  transition duration-300 ease-in-out opacity-0   ${formik.errors.Password && formik.touched.Password ? "opacity-100" : ""}`}>
                  {formik.touched.Password && formik.errors.Password ? formik.errors.Password : null}
                </li>
                <li className={`  transition duration-300 ease-in-out opacity-0  ${formik.errors.Terms && formik.touched.Terms ? "opacity-100" : ""}`}>
                  {formik.touched.Terms && formik.errors.Terms ? formik.errors.Terms : null}
                </li>
              </div>
            </div>
            <div className="flex  h-16   ">
              <div className="md:w-1/2 ">
                <div className=" flex gap-2 ">
                  <h1 className="font-bold ">Name </h1>

                  <img className={` ${formik.touched.Name && !formik.values.Name === true ? 'h-4 self-center' : 'hidden'}`} src="https://res.cloudinary.com/df8suxer2/image/upload/v1712836234/o4pfs1kqxhyrv6qqnv64.svg" alt="attention" />
                </div>
                <input id="Name" type="text" value={formik.Name} name="Name" onBlur={formik.handleBlur} onChange={formik.handleChange} className=" pl-3 pr-3 rounded-xl py-1 border-2 bg-neutral-100 transition duration-200 ease-in-out hover:border-pink-200 hover:shadow-md focus:border-pink-200 focus:shadow-md outline-none " style={{ width: "calc(100% - 2rem)" }} />

              </div>
              <div className=" md:w-1/2 ">

                <div className=" flex gap-2  ">
                  <h1 className="font-bold ">Username</h1>
                  <img className={` ${formik.touched.Username && !formik.values.Username === true ? 'h-4 self-center' : 'hidden'}`} src="https://res.cloudinary.com/df8suxer2/image/upload/v1712836234/o4pfs1kqxhyrv6qqnv64.svg" alt="attention" />
                </div>
                <input id="Username" type="text" value={formik.Username} name="Username" onBlur={formik.handleBlur} onChange={formik.handleChange} className={`pl-3 pr-3 rounded-xl py-1 border-2 ${isUsernameExists === true ? 'border-red-400' : ''} bg-neutral-100 transition duration-200 ease-in-out hover:border-pink-200 hover:shadow-md  focus:border-pink-200 focus:shadow-md outline-none`} style={{ width: "calc(100% - 2rem)" }} />

              </div>
            </div>

            <div>
              <div className=" flex gap-2 ">
                <h1 className="font-bold ">Email </h1>
                <img className={` ${formik.touched.Email && !formik.values.Email === true ? 'h-4 self-center' : 'hidden'}`} src="https://res.cloudinary.com/df8suxer2/image/upload/v1712836234/o4pfs1kqxhyrv6qqnv64.svg" alt="attention" />

              </div>
              <input id="Email" type="email" value={formik.Email} name="Email" autoComplete="username" onBlur={formik.handleBlur} onChange={formik.handleChange} className="pl-3 pr-3  rounded-xl py-1 border-2 bg-neutral-100 transition duration-300 ease-in-out hover:border-pink-200 hover:shadow-md focus:border-pink-200 focus:shadow-md outline-none" style={{ width: "calc(100% - 2rem)" }} />
            </div>
            <div className="mt-6 flex flex-col h-16 ">
              <div className=" flex gap-2 ">
                <h1 className="font-bold ">Password </h1>
                <img className={` ${formik.touched.Password && !formik.values.Password === true ? 'h-4 self-center' : 'hidden'}`} src="https://res.cloudinary.com/df8suxer2/image/upload/v1712836234/o4pfs1kqxhyrv6qqnv64.svg" alt="attention" />

              </div>
              <input id="Password" type="password" value={formik.Password} name="Password" autoComplete="current-password" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="6+ Character" className="pl-3 pr-3 rounded-xl py-1 border-2 bg-neutral-100 transition duration-300 ease-in-out hover:border-pink-200 hover:shadow-md focus:border-pink-200 focus:shadow-md outline-none" style={{ width: "calc(100% - 2rem)" }} />

            </div>
            <div className="text-zinc-500  flex flex-col gap-1  h-20 ">

              <div className=" flex ">
                <Checkbox value={formik.Terms} onBlur={formik.handleBlur} className="self-start " name="Terms" onClick={formik.handleChange} />
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


            <div className="md:relative md:top-5 flex gap-3  ">
              <button type="submit" className=" transition duration-300 ease-in-out bg-pink-600 text-white px-10 py-2 rounded-md hover:bg-pink-400 focus:bg-pink-400">Create Account</button>
              {loader ? <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
              </div> : null}

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

