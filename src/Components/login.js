import React from 'react';

import "../App.css"
import { Link } from 'react-router-dom';

function Login() {
// const userData=UserContext()
  return (
    <>

<div id=''>
<div className="row">
  <div className='col-lg-5'>
  <img className='bg-no-repeat object-cover' src="https://cognisite-cs-image-prod.s3.amazonaws.com/Logo.png" alt="loginPagePoster" />
   
   <img  className="  mb-30 h-[90%] w-[70%] mx-24"     src="https://cognisite-cs-image-prod.s3.amazonaws.com/Component1.png" alt="loginPagePoster"/>
  </div>
  
  <div className='col-lg-4 '>
  <div className='mx-60 mt-20 flex'>
  <div className='text-[#2194C3] text-4xl  font-medium '>Login</div>
  </div>
  <div className='col-lg-6 mx-40 mt-10'>
  <div className='bg-white text-center  '>
  <h2 className=" justify-center flex text-2xl font-semibold leading-9 tracking-tight text-[#9B9B9B] my-1">Welcome!</h2>
  </div>
  <form className='space-y-6'>
    <div>
      <label for="email" class="block  text-[#060606] text-2xl  font-semibold leading-9" >Email</label>
      <div className='mt-2'>
      <input placeholder="Enter Your Email" id="email" name="email" type="email" autocomplete="email" required="" class="block border w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-top_nav_blue-500 sm:text-sm sm:leading-6"
      onChange={(e)=>{
        // userData.setUser({name:e.target.value})
      }} />
      </div>
    </div>
    <div className="flex items-center justify-between"><label for="password" class="block  text-[#060606] text-2xl  font-semibold leading-9">Password</label></div>
    <div className='mt-0 relative'>
    <input placeholder="Enter Your Password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-top_nav_blue-500 sm:text-sm sm:leading-6" />
    
    <div className=' cursor-pointer select-none absolute top-3 text-xs   right-2 text-pure-greys-300'>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path></svg>
    </div>
    </div>
    <div class="text-sm flex items-end mt-1 justify-end"><button type="button" class="font-semibold text-[#2194C3] hover:text-[#2184C3]">Forgot password?</button>
    </div>
  <div><Link to ="/Portal/dashboard" type="submit" class="mb-3 block w-full rounded  mt-3  hover:bg-[#2184C3]  px-5 py-2.5 text-xs font-medium uppercase leading-normal text-white text-center" style={{"background-color":"rgb(33, 148, 195)"}}>Login In</Link></div>
  
  </form>
  <div class="mt-10 text-sm text-center  text-gray-500">Not Having an Account? <button class="font-semibold leading-6 text-[#2194C3] hover:text-top_nav_blue-500">Sign Up</button></div>
  </div>
  
  </div>

  
  </div>
</div>
 
    </>
  );
}

export default Login;