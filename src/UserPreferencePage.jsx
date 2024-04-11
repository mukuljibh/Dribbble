import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { sendEmailToUser } from "./apiService";
import { useSelector } from 'react-redux'
import React from 'react';

export default function UserPreferencePage() {
    const userDetails = useSelector((state) => state.user.userDetails)

    let Navigate = useNavigate(true);
    const [hook, setHook] = useState(false);
    function check(event) {
        setHook(!hook);
    }
    function handleSubmit() {
        //hitting up api for sending email to user
        sendEmailToUser(userDetails)
        Navigate('/verify-email')
    }
    return (
        <div className="space-y-11 ">
            <div className='flex md:justify-start md:pr-0 pr-5 justify-center '>
                <img className="h-10 self-center pl-5" src="https://res.cloudinary.com/df8suxer2/image/upload/v1712836184/zlj1ovmx3prusxsruccn.png" alt="logo" />
            </div>

            <div className="flex flex-col justify-center gap-4 ">
                <div className="text-center">
                    <h1 className="md:text-3xl text-2xl font-black">What brings you to Dribbble?</h1>
                </div>
                <div className="text-center">
                    <h1 className="text-zinc-500 md:text-base text-sm ">Select the options that best describe you. Don't worry, you can explore other options later.</h1>
                </div>
            </div>
            <div >
                {/* card div*/}
                <div className="lg:gap-9 gap-16 flex lg:flex-row flex-col justify-center md:pt-10 pt-4"   >

                    <div onClick={check} className="flex justify-center border-2 border-pink-600 rounded-3xl md:h-72 md:w-80 h-72 w-64 self-center ">

                        <div className={`  flex flex-col space-y-3 ${hook ? 'relative bottom-14' : null}`} style={{ justifyContent: "space-evenly", }} >
                            <div className="w-56  self-center">
                                <img src="/designer.png" alt="logo" />
                                <h1 className=" mt-4 text-auto text-lg font-bold text-center"> I'm designer looking to share my work</h1>

                            </div>
                            <div className="md:w-72 w-58">
                                {hook ? <div>
                                    <h1 className="  md:text-md text-sm text-center text-wrap text-zinc-500"> As a designer, you can share your work by creating an impressive online portfolio on Dribbble .</h1>
                                </div> : null}
                            </div>

                        </div>
                    </div>

                    <div onClick={check} className=" flex justify-center border-2 border-pink-600 rounded-3xl md:h-72 md:w-80 h-72 w-64 self-center ">

                        <div className={` flex flex-col space-y-3 ${hook ? 'relative bottom-14' : null}`} style={{ justifyContent: "space-evenly", }} >
                            <div className="w-56  self-center">
                                <img src="/hire.png" alt="logo" />
                                <h1 className=" mt-4 text-auto text-lg font-bold text-center"> I'm looking for hire a designer</h1>

                            </div>
                            <div className="md:w-72 w-58">
                                {hook ? <div>
                                    <h1 className="  md:text-md text-sm text-center text-zinc-500"> Dribbble is the leading source for design inspiration with over 7 million shots from a vast community of designers.</h1>
                                </div> : null}
                            </div>

                        </div>
                    </div>

                    <div onClick={check} className="  flex justify-center border-2 border-pink-600 rounded-3xl md:h-72 md:w-80 h-72 w-64 self-center ">

                        <div className={`  flex flex-col space-y-3 ${hook ? 'relative bottom-14' : null}`} style={{ justifyContent: "space-evenly", }} >
                            <div className="w-56  self-center">
                                <img src="/inspiration.png" alt="logo" />
                                <h1 className=" mt-4 text-auto text-lg font-bold text-center"> I'm looking for design inspiration</h1>

                            </div>
                            <div className=" md:w-72 w-58">
                                {hook ? <div>
                                    <h1 className="  md:text-md text-sm text-center text-zinc-500"> explore a diverse range of sources from us, where you can discover trending styles and layouts.</h1>
                                </div> : null}
                            </div>

                        </div>
                    </div>
                </div >
            </div>


            <div className=" flex flex-col justify-center gap-y-5 ">
                <div className="self-center">
                    <h1 className=" md:text-basic text-sm font-bold">Anything else? You can select multiple</h1>
                </div>
                <div className="self-center">
                    <button onClick={handleSubmit} className=" text-white px-20 py-2 rounded-md bg-pink-500">Finish</button>
                </div>
            </div>

        </div >

    )
}