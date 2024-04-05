import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from '@mui/material';
function Login() {

  return (
    <div className='flex  md:justify-between justify-center gap-10' >

      <div className='h-screen md:block hidden md:sticky md:top-0' style={{ flexBasis: "35%", minWidth: "30%" }}>
        {/* Add a border to the parent container for visibility */}
        <img src="/sample.jpg" alt='' className='h-full object-cover flex-shrink min-w-[100%] ' />
      </div>

      <div className='flex' >
        <div className='mt-20 space-y-10 ml-7 '>
          <div className='md:space-x-3 md:space-y-3 '>
            <h1 className='md:text-3xl font-bold	text-2xl '>Sign up to Dribbble</h1>
            <h1 className='text-red-500 '>Username has already been taken</h1>
          </div>
          <div className='flex'>
            <div className="md:w-1/2">
              <h1 className='font-bold'>Name</h1>
              <input className="border rounded-lg  py-1 bg-neutral-100 hover:border-pink-500 transition duration-300 ease-in-out shadow-none hover:shadow-md " style={{ width: 'calc(100% - 2rem)' }} />
            </div>
            <div className=" md:w-1/2">
              <h1 className='font-bold'>Username</h1>
              <input className="border rounded-lg  py-1 bg-neutral-100 hover:border-pink-500 transition duration-300 ease-in-out shadow-none hover:shadow-md" style={{ width: 'calc(100% - 2rem)' }} />
            </div>
          </div>

          <div >
            <h1 className='font-bold'>Email</h1>
            <input className="border rounded-lg py-1 bg-neutral-100 hover:border-pink-500 transition duration-300 ease-in-out shadow-none hover:shadow-md" style={{ width: 'calc(100% - 2rem)' }} />
          </div>
          <div className='mt-6'>
            <h1 className='font-bold'>Password</h1>
            <input className="border rounded-lg py-1 px-4 bg-neutral-100 hover:border-pink-500 transition duration-300 ease-in-out shadow-none hover:shadow-sm" style={{ width: 'calc(100% - 2rem)' }}
              placeholder='6+ Character'
            />
          </div>
          <div className='text-zinc-500 ' >
            <FormControlLabel className='text-sm ' required control={<Checkbox />} label={
              <span className='md:text-sm text-xs'>
                Creating an account means you're okay with our Terms of <br /> Service, Privacy Policy, and our default Notification<br />Settings
              </span>
            } />

          </div>

          <div>
            <button className='bg-pink-500 text-white px-10 py-2 rounded-md hover:bg-pink-700'>Create Account</button>
          </div>
          <div className=' md:hidden block'>
            <h6>Already a member? Sign in</h6>
          </div>
          <div>
            <p className='text-zinc-500 text-xs '>This site is projected by reCAPTCHA and the Google <br />Privacy Policy and Terms of Service apply</p>
          </div>
        </div>
        <div className='mt-4 mr-3 md:block hidden	'>
          <h6 >Already a member? Sign in</h6>
        </div>

      </div>
    </div >
  );
}

export default Login;