import React from 'react';


export default function Footer() {
    return (
        <div className="lg:flex lg:flex-col hidden border-2">
            <div className=" border-2 border-green-700 self-center pt-14">
                <div className=" flex border-2 border-violet-300">
                    <div className="border-2 border-yellow-400 w-1/4 ">

                        <div className="text-zinc-700 xl:text-base text-sm">
                            <img className="h-20" src="./dribbble.png" alt="logo" />
                            <h1> Dribbble is the world's leading</h1>
                            <p>community for creatives to share, grow,</p>
                            <p>and get hired.</p>
                        </div>
                        <div className="flex xl:gap-4 lg:gap-3 gap-2 xl:h-8 lg:h-7 h-6 border mt-10  ">
                            <img src="./brands/dribbble.png" alt="brand Logo" />
                            <img src="./brands/twitter.svg" alt="twitter Logo" />
                            <img src="./brands/facebook.svg" alt="facebook Logo" />
                            <img src="./brands/instagram.png" alt="instagram Logo" />
                            <img src="./brands/pinterest.svg" alt="pinterest Logo" />
                        </div>
                    </div>

                    <div className="flex border-2  gap-14  pb-20 border-red-200 pr-10">
                        <div className="space-y-6 text-zinc-700 ">
                            <h1 className="text-black font-bold">
                                For designers
                            </h1>
                            <h1>
                                Go Pro!
                            </h1>
                            <h1>
                                Explore design work
                            </h1>
                            <h1>
                                Design blog
                            </h1>
                            <h1>
                                Overtime podcast
                            </h1>
                            <h1>
                                playOffs
                            </h1>
                            <h1>
                                Weekly Warm-Up
                            </h1>
                            <h1>
                                Refer a Friend
                            </h1>
                            <h1>
                                Code of conduct
                            </h1>
                        </div>

                        <div className="space-y-6 text-zinc-700 ">
                            <h1 className=" text-black font-bold">
                                Hire designers
                            </h1>
                            <h1>
                                Post a job Openining
                            </h1>
                            <div>
                                <h1>Post a freelance</h1>
                                <h1>Project</h1>
                            </div>
                            <h1>
                                Search for designers
                            </h1>
                            <h1 className="text-black font-bold">
                                Brands
                            </h1>
                            <h1>
                                Advertise with us
                            </h1>
                        </div>

                        <div className="space-y-6 text-zinc-700 ">
                            <h1 className="text-black font-bold">
                                Company
                            </h1>
                            <h1>
                                About
                            </h1>
                            <h1>
                                Careers
                            </h1>
                            <h1>
                                Support
                            </h1>
                            <h1>
                                Media kit
                            </h1>
                            <h1>
                                Testimonials
                            </h1>
                            <h1>
                                API
                            </h1>
                            <h1>
                                Terms of service
                            </h1>
                            <h1>
                                Privacy policy
                            </h1>
                            <h1>
                                Cookie policy
                            </h1>
                        </div>

                        <div className="space-y-6 text-zinc-700 ">
                            <h1 className="text-black font-bold">
                                Directories
                            </h1>
                            <h1>
                                Design jobs
                            </h1>
                            <div>
                                <h1>
                                    Freelance designers
                                </h1>
                                <h1>
                                    for hire
                                </h1>
                            </div>
                            <h1>
                                Tags
                            </h1>
                            <h1>
                                Places
                            </h1>
                            <h1 className="text-black font-bold">
                                Design assets
                            </h1>
                            <h1>
                                Dribbble Marketplace
                            </h1>
                            <h1>
                                Creative Market
                            </h1>
                            <h1>
                                Fontspring
                            </h1>
                            <h1>
                                Font Squirrel
                            </h1>

                        </div>


                        <div className="space-y-6 text-zinc-700 ">
                            <h1 className=" text-black font-bold">
                                Design Resources
                            </h1>
                            <h1>
                                Freelancing
                            </h1>
                            <h1>
                                Design Hiring
                            </h1>
                            <h1>
                                Design Portfolio
                            </h1>
                            <h1>
                                Design Education
                            </h1>
                            <h1>
                                Creative Process
                            </h1>
                            <div>
                                <h1>
                                    Design Industry
                                </h1>
                                <h1>
                                    Trends
                                </h1>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="flex justify-between border-2 border-orange-300 pt-12 pb-5 ">
                    <div className="border self-center">
                        <footer className="text-zinc-500  ">
                            <p>&copy; 2023 Dribbble. All rights reserved.</p>
                        </footer>
                    </div>
                    <div className="flex border ">
                        <p className="font-bold self-center">20,501,853 <span className="text-zinc-500">shots dribbbled</span></p>
                        <img className="h-7 " src="./brands/dlogo.png" alt="logo" />
                    </div>
                </div>

            </div>


        </div>

    )
}