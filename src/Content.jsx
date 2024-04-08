

export default function Content() {
    return (
        <div>
            <div className="   flex lg:flex-row flex-col justify-center  border-2 border-pink-400 pt-24 mb-24 ">
                <div className="flex flex-col  self-center md:w-1/2  w-auto text-center border-2 border-green-400 space-y-2 ">
                    <div className="self-center">
                        <h1 className="md:text-3xl text-xl font-bold">Please verify you email...</h1>
                    </div>
                    <div className="self-center">
                        <img className="md:h-36 h-28" src="./picture1.jpg" />
                    </div>
                    <div className="md:text-base text-sm self-center text-zinc-500">
                        <h1>Please verify your email address. We,ve sent a confirmation email to:</h1>
                    </div>
                    <div className="pt-4 md:text-base text-sm self-center md:text-base text-sm font-bold">
                        <h1>mukulbhardwaj966@gmail.com</h1>
                    </div>
                    <div className="pt-4 md:text-base text-sm self-center text-zinc-500">
                        <h1>Click the confirmation link in that email to begin using Dribbble.</h1>
                    </div>

                    <div className="pt-4 md:text-base text-sm self-center text-zinc-500 border ">
                        <h1 className="">
                            Didn't receive the email? Check your Spam folder, it may have been caught by a filter. if you still dont't see it, you
                            can <a className="text-pink-500 font-semibold" href="#">resend the confirmation email.</a>
                        </h1>
                    </div>
                    <div className="pt-4 md:text-base text-sm self-center text-zinc-500 border ">
                        <h1 className="">
                            Wrong email address?<a className="text-pink-500 font-semibold" href="#">  Change it.</a>
                        </h1>
                    </div>

                </div>

            </div >
            <div className="  lg:hidden flex flex-col  md:mb-10 mb-5">

                <div className="self-center">
                    <img className="md:h-16 h-20 " src="./brands/dribbble-pink.png" />
                </div>
                <div className="flex self-center md:text-xl text-sm md:flex-norap flex-wrap gap-5 justify-center mt-3  ">
                    <h1 >
                        For designers
                    </h1>
                    <h1>
                        Hire talent
                    </h1>
                    <h1>
                        Inspiration
                    </h1>
                    <h1>
                        Advertising
                    </h1>
                    <h1>
                        Blog
                    </h1>
                    <h1>
                        About
                    </h1>
                    <h1>
                        Support
                    </h1>
                </div>

                <div className="self-center mt-4">
                    <div className="flex gap-4 md:h-8 h-7 border">
                        <img src="./brands/dribbble.png" alt="brand Logo" />
                        <img src="./brands/twitter.svg" alt="twitter Logo" />
                        <img src="./brands/facebook.svg" alt="facebook Logo" />
                        <img src="./brands/instagram.png" alt="instagram Logo" />
                        <img src="./brands/pinterest.svg" alt="pinterest Logo" />
                    </div>
                </div>
                <div className="flex  md:text-base text-sm md:justify-between justify-center mt-10 flex-wrap md:space-y-0 space-y-2">
                    <div className="text-zinc-500 flex md:gap-3 gap-2 flex-wrap justify-center">
                        <p1>&copy; 2023 Dribbble</p1>
                        <p1>Terms</p1>
                        <p1>Privacy</p1>
                        <p1>Cookies </p1>
                    </div>
                    <div className="text-zinc-500 flex md:gap-3 gap-2 flex-wrap justify-center ">
                        <p1> Jobs</p1>
                        <p1> designers</p1>
                        <p1> Freelancer</p1>
                        <p1> Tags</p1>
                        <p1>Places</p1>
                        <p1> Resources</p1>
                    </div>
                </div>

            </div>
        </div>
    )
}