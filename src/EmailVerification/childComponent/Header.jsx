import * as React from 'react';
import { useState, useEffect } from "react"
import Avatar from '@mui/material/Avatar';

export default function Header() {

    const [hook, setHook] = useState(false);
    useEffect(() => {
        if (hook) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

    }, [hook]);
    function handle() {
        setHook(!hook)
    }

    return (

        <div className="  border-b-2 border-gray-200">
            <nav className="  h-20 flex justify-between  border-2 border-red-400 text-zinc-500 font-semibold">

                <div className='lg:hidden flex self-center border gap-4'>
                    <div className='self-end'>
                        <button onClick={handle}><img className="h-6 " src="./menu.png" alt="dribble logo" /></button>
                    </div>
                    <div >
                        <img className="h-10 lg:hidden  lg:pl-5" src="./brands/dribbble-pink.png" alt="logo" />
                    </div>
                </div>

                <ul className="lg:inline-flex lg:gap-7 lg:self-center border-2 border-pink-400  hidden ">
                    <li ><img className="h-10  lg:pl-5" src="https://res.cloudinary.com/df8suxer2/image/upload/v1712998371/ig5oylfncdwgxc0nybiz.png" alt="logo" /></li>

                    <div className='flex self-center gap-4'>
                        <li  ><a href="#">Inspiration</a></li>
                        <li ><a href="#">Find Work</a></li>
                        <li ><a href="#">Learn Design</a></li>
                        <li><a href="#">Go Pro</a></li>
                        <li ><a href="#">Hire Designers</a></li>
                    </div>
                </ul>

                <ul className=" border-2 border-green-400 inline-flex gap-7 self-center lg:mr-5 mr-3 " >

                    <li className="flex items-center">
                        <div className='flex lg:bg-gray-100 p-1 rounded-md'>
                            <img className=" h-6 self-center" src='./search.png' alt="Search icon" />

                            <input placeholder="Search" className="w-24 h-8 outline-none bg-gray-100 rounded-md lg:block hidden " type="text"></input>

                        </div>
                    </li>
                    <li className='lg:block hidden'><img className="h-9 " src="./lock-x.png" alt="lock" /></li>
                    <li><Avatar /></li>
                    <li className='lg:block hidden'>
                        <button className=" h-10 w-20 text-white rounded-md bg-pink-500 ">Upload</button>
                    </li>

                </ul>

            </nav>
            <div className={`pt-10 bg-white pl-9 space-y-7 transition-all duration-500  lg:hidden absolute w-full ${hook ? 'left-0 ' : '-left-full opacity-0 '} ${hook ? 'bounce-in' : ''}`}>
                <div  >
                    <div>
                        <h1 className='text-md'>Find designers</h1>
                    </div>

                    <div className='border-l-2 border-gray-200 pl-6 space-y-5'>
                        <div>
                            <h1 className='text-sm'>Designer search</h1>
                            <h1 className='text-xs font-light'>Quickly find your next designer</h1>
                        </div>
                        <div>
                            <h1 className='text-sm'>Post a Job</h1>
                            <h1 className='text-xs font-light'>the #1 job board for design talent</h1>
                        </div>
                    </div>

                </div>

                <div>
                    <div>
                        <h1 className='text-md'>Inspiration</h1>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-md'>Courses</h1>
                    </div>

                    <div className='border-l-2 border-gray-200 pl-6 space-y-5'>

                        <div>
                            <h1 className='text-sm'>UX Diploma</h1>
                            <h1 className='text-xs font-light'>Learn UX design from scratch in 6 months</h1>
                        </div>
                        <div>
                            <h1 className='text-sm'>UI Certificate</h1>
                            <h1 className='text-xs font-light'>12-week UI skill building for designers</h1>
                        </div>
                        <div>
                            <h1 className='text-sm'>Live Certificate</h1>
                            <h1 className='text-xs font-light'>with design professionals</h1>
                        </div>


                    </div>

                </div>


                <div>
                    <div>
                        <h1 className='text-md'>Jobs</h1>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-md'>Go Pro</h1>
                    </div>
                </div>
            </div >

        </div >
    )
}