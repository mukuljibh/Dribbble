import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfile } from "./reducers/userDetailsReducer";
import { useFormik } from "formik";
import { sendImageAPI } from "./apiService";

export default function ProfileCreationPage() {
    const [isLoading, SetIsLoading] = useState(null);
    let navigateTo = useNavigate(true);
    const [imageUploaded, setImageUploaded] = useState(false);
    //this will detect whether the file is selected or not
    const [selectedFile, setSelectedFile] = useState(null);
    //this dispatcher help for updating the global state globalUserDetails
    const dispatcher = useDispatch();
    const formik = useFormik({
        initialValues: {
            ImageUrl: "",
            Location: "",
        },
        onSubmit: (values) => {
            //if no image is selected then then  location values if enter will be updated in the global state
            //if image is selected then it waits for complete fetches from api then set imageUploaded true then this executes
            //if image is in uploading process then during at that period of time it waits for uploading. next button would'nt work, even location is enter
            //the next button become functional when image uploading is done.
            if (imageUploaded || !selectedFile) {
                //updating the global state
                dispatcher(updateProfile({ ...values }));
                navigateTo("/profile-preference");
            }
        },
    });

    function handleUpload(event) {
        const file = event.target.files[0];
        setSelectedFile(file);
        SetIsLoading(true);
        //sending profile picture to cloudnary in response this API provide a URL of profile picture
        sendImageAPI(file)
            .then((url) => {
                setImageUploaded(true);
                SetIsLoading(false);
                formik.setFieldValue("ImageUrl", url);
            })
            .catch((error) => {
                setSelectedFile(false);
                console.log("error from profile creation page");
                alert(error);
            });
    }
    //handle uploading of data(material ui uploading helper is being used here)
    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });
    return (
        <div className=" md:flex inline-flex flex-col h-screen ">
            <div className="flex lg:justify-start  justify-center h-28 ">
                <img
                    className="h-14 absolute left-9 top-5 "
                    src="https://res.cloudinary.com/df8suxer2/image/upload/v1713085030/xlsuba1pijqdde2abjil.png"
                    alt="logo"
                />
            </div>

            <div className=" flex justify-center ">
                <div className=" md:ml-0 ml-3 inline-flex flex-col self-center">
                    <div className=" space-y-4 ">
                        <h1 className="md:text-4xl text-xl font-black">
                            {" "}
                            Welcome! Let's create your profile
                        </h1>
                        <div className="space-y-10">
                            <h1 className="md:text-lg text-zinc-500 ">
                                {" "}
                                Let others get to know you better! You can do these later
                            </h1>
                            <h1 className="md:text-xl font-bold">Add an avatar</h1>
                        </div>
                    </div>
                    <div className="flex gap-10  pr-20 mt-6 ">
                        {formik.values.ImageUrl ? (
                            <img
                                className="ml-1 md:w-40 md:h-40 w-32 h-32 border-2 border-gray-400  rounded-full flex justify-center"
                                src={formik.values.ImageUrl}
                                alt="profile"
                            />
                        ) : (
                            <div className=" ml-1 md:w-40 md:h-40 w-48 h-36 border-2 border-gray-400 border-dashed rounded-full flex justify-center">
                                <div className="self-center  ">
                                    <svg
                                        className="md:w-5 w-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                                    </svg>
                                </div>
                            </div>
                        )}

                        <div className="md:block flex flex-col gap-1 mt-5 self-start">
                            <div className=" flex self-center border font-semibold bg-slate-50 text-black rounded-md w-3/5 hover:bg-pink-200">
                                <Button
                                    className="border border-black-100 h-12 w-28 "
                                    component="label"
                                    onChange={handleUpload}
                                    accept="image/*"
                                    style={{ color: "black" }}
                                >
                                    <h1 className="md:text-md text-xs"> Choose image</h1>
                                    <VisuallyHiddenInput type="file" accept=".png .jpg" />
                                </Button>
                            </div>

                            <div>
                                <button className="text-zinc-500 md:text-md text-sm hover:text-zinc-700 ">
                                    Or choose one of ours defaults
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-14 ">
                        <div className="space-y-3 ">
                            <h1 className="text-lg font-bold">Add Your Location</h1>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="flex border-b-2">
                                    <input
                                        id="Location"
                                        type="text"
                                        name="Location"
                                        onChange={formik.handleChange}
                                        value={formik.Location}
                                        className="outline-none pb-"
                                        placeholder="Enter Your Location"
                                    ></input>
                                </div>

                                <div className="space-x-2">
                                    <button
                                        type="submit"
                                        className={`mt-8 text-white px-20 py-2 rounded-md hover:bg-pink-600   ${imageUploaded || formik.values.Location ? "bg-pink-500" : "bg-pink-300"} ${formik.values.ImageUrl ? "" : "bg-pink-300"}`}
                                    >
                                        Next
                                    </button>
                                    {isLoading ? (
                                        <div
                                            className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                            role="status"
                                        >
                                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                                Loading...
                                            </span>
                                        </div>
                                    ) : null}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
