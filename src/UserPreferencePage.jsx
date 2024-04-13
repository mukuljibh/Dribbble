import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { sendEmailToUserAPI } from "./apiService";
import { useSelector } from 'react-redux'
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { pink } from '@mui/material/colors';

export default function UserPreferencePage() {

    const userDetails = useSelector((state) => state.user.userDetails)
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setCards([{ heading: "I'm designer looking to share my work", description: " As a designer, you can share your work by creating an impressive online portfolio where peoples can see your talent. ", imgSrc: "/designer.png" },
        { heading: "I'm looking for hire a designer", description: "Dribbble is the leading source for design inspiration with over 7 million shots from a vast community of designers.", imgSrc: "/hire.png" },
        { heading: "I'm looking for design inspiration", description: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.", imgSrc: "/inspiration.png" },])
    }, [])
    let Navigate = useNavigate(true);
    const [hook, setHook] = useState([]);

    function check(index) {
        const hookIndex = hook.findIndex(x => x.index === index);
        if (hookIndex > -1) {
            hook[hookIndex].flag = !hook[hookIndex].flag
        } else {
            hook.push({
                flag: true,
                index: index
            })
        }
        setHook([...hook]);
    }
    function handleSubmit() {
        //hitting up api for sending email to user
        sendEmailToUserAPI(userDetails).then((success) => {
            alert(success)
            Navigate('/verify-email')
        })
            .catch((error) => {
                alert(error)
            })
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

            {/* card div*/}
            <div className="lg:gap-9 gap-16 flex lg:flex-row flex-col justify-center md:pt-10 pt-4"   >
                {cards.map((card, index) => (
                    <div key={index} className={` flex justify-center border-2 hover:border-pink-500 border-gray-200 rounded-3xl  md:h-72 md:w-80 h-72 w-64 self-center  ${hook[index]?.flag && hook[index]?.index === index ? 'border-pink-500' : ''}`}>

                        <div className={` flex flex-col h-64 w-64 justify-end `}>
                            <div className=" md:w-56 w-48 self-center mt-10 relative top-1 flex flex-col ">
                                <div className={`transition-all duration-500 ease-out  ${hook[index]?.flag && hook[index]?.index === index ? 'w-full' : 'md:w-72 w-60 '} self-center`}>
                                    <img src={card.imgSrc} />
                                </div>
                                <div className="text-center text-wrap  pt-4 font-black text-md">
                                    {card.heading}
                                </div>
                            </div>
                            {
                                hook[index]?.flag && hook[index]?.index === index ?
                                    <div className="text-center text-zinc-500 text-sm text-wrap pt-6 ">
                                        {card.description}
                                    </div> : null
                            }
                            <div className="self-center">
                                <Checkbox
                                    onClick={() => { check(index) }}
                                    className=" h-10 w-10  "
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 28,
                                        },

                                        '&.Mui-checked': {
                                            color: pink[400],
                                        },
                                        color: 'grey',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >




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