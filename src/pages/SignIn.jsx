import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
      <div className="">
      <div className="p-10">
          <h1 className='text-4xl font-bold text-center text-slate-600'>Sign In</h1>
          <div className="flex flex-col justify-center items-center w-auto mt-8">
          <input type="text" name="username" placeholder='Username' className='border-2 border-blue-300 p-4 m-2 rounded-lg w-80'/>
          <input type="text" name="password" placeholder='Password' className='border-2 border-blue-300 p-4 m-2 rounded-lg w-80'/>
          <Link><button className='bg-blue-200 border-2 border-blue-300 p-3 w-28 rounded-lg mt-8 text-slate-600'>Sign In</button></Link>
          </div>
      </div>
      </div>
    </div>
  )
}

export default SignIn