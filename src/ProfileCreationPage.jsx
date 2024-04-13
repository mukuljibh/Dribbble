import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { updateProfile } from './reducers/userDetailsReducer';
import { useFormik } from "formik";
import { sendImageAPI } from './apiService';


export default function ProfileCreationPage() {
    let Navigate = useNavigate(true);
    const [imageUploaded, setImageUploaded] = useState(false);
    //this will detect whether the file is selected or not
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatcher = useDispatch();
    const formik = useFormik({
        initialValues: {
            ImageUrl: "",
            Location: ""
        },
        onSubmit: ((values) => {
            //if no image is selected then then  location values if enter will be updated in the global state
            //if image is selected then it waits for complete fetches from api then set imageUploaded true then this executes
            //if image is in uploading process then during at that period of time it waits for uploading. next button would'nt work, even location is enter 
            //the next button become functional when image uploading is done.
            if (imageUploaded || !selectedFile) {
                dispatcher(updateProfile({ ...values }))
                Navigate('/profile-preference')
            }
        })
    })

    function handleUpload(event) {

        const file = event.target.files[0]
        setSelectedFile(file)
        //convert file into url using cloudnary API
        sendImageAPI(file)
            .then((url) => {
                setImageUploaded(true)
                formik.setFieldValue('ImageUrl', url);
            })
            .catch((error) => {
                setSelectedFile(false)
                console.log("error from profile creation page")
                alert(error);
            });
    }

    //handle uploading of data
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <div >
            <div className='flex lg:justify-start  justify-center h-28 '>
                <img className="h-10 self-center pl-5" src="https://res.cloudinary.com/df8suxer2/image/upload/v1712836184/zlj1ovmx3prusxsruccn.png" alt="logo" />
            </div>

            <div className=' flex justify-center'>
                <div className=' md:ml-0 ml-8  inline-flex flex-col self-center  '>
                    <div className=' space-y-4 '>
                        <h1 className='md:text-4xl text-xl font-black'> Welcome! Let's create your profile</h1>
                        <div className='space-y-10'>
                            <h1 className='md:text-lg  text-zinc-500 '> Let others get to know you better! You can do these later</h1>
                            <h1 className='md:text-xl font-bold'>Add an avatar</h1>
                        </div>
                    </div>
                    <div className="flex  gap-10  pr-20 mt-6" style={{ justifyContent: "start", width: "100%" }}>
                        {formik.values.ImageUrl ? <img className="ml-1 md:w-40 md:h-40 w-48 h-32 border-2 border-gray-400  rounded-full flex justify-center" src={formik.values.ImageUrl} alt="profile" />
                            : <div className=' ml-1 md:w-40 md:h-40 w-48 h-32 border-2 border-gray-400 border-dashed rounded-full flex justify-center '>
                                <div className='self-center  '>
                                    <svg className="md:w-5 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                                </div>
                            </div>}

                        <div className='flex flex-col gap-4 mt-5 self-start '>
                            <div className='flex flex-col border border-black-100 font-semibold bg-slate-50 text-black rounded-md w-3/5 hover:bg-pink-200'>
                                <Button className='border border-black-100'
                                    component="label"
                                    onChange={handleUpload}
                                    accept="image/*"
                                    style={{ color: 'black' }}
                                >
                                    Choose image
                                    <VisuallyHiddenInput type="file" accept=".png .jpg" />
                                </Button>
                            </div>
                            <div>
                                <button className='text-zinc-500 hover:text-zinc-700 '>
                                    Or choose one of ours defaults
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col items-start mt-14 ' >
                        <div className='space-y-3 '>
                            <h1 className='text-lg font-bold'>
                                Add Your Location
                            </h1>
                            <form onSubmit={formik.handleSubmit}>
                                <div className=' w-full '>
                                    <input id="Location" type="text" name="Location" onChange={formik.handleChange} value={formik.Location} className=" border-b-2 outline-none" placeholder='Enter Your Location'></input>
                                </div>

                                <div >
                                    <button type='submit' className={`mt-8 text-white px-20 py-2 rounded-md hover:bg-pink-600   ${imageUploaded || formik.values.Location ? 'bg-pink-500' : 'bg-pink-300'} ${formik.values.ImageUrl ? '' : 'bg-pink-300'}`}>
                                        Next</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
} 