import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false) 
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)



  const handleChange= (e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch("/api/auth/signup",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      
    });
    const data = await res.json();
    setLoading(false)
    console.log(data);
    if(data.success === false){
      setError(data.message)
      setLoading(false)
      return;
    }else{
      navigate('/sign-in')
    }
      } catch (error) {
        setLoading(false)
        setError(error.message)
    }
    
  }


  return (
    <div>
    <div className="flex justify-center items-center">
      <div className="p-10">
        <h1 className="text-4xl font-bold text-center text-slate-600">
          Sign Up
        </h1>
        <form className="flex flex-col justify-center items-center mt-8 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="username"
            className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
            onChange={handleChange}
          />
            <button disabled={loading} className="bg-blue-200 border-2 border-blue-300 p-3 w-full rounded-lg text-slate-600 uppercase">
              {loading ? 'Loading...' : 'Sign Up'} 
            </button>
        </form>
          <p className="mt-6 flex items-center justify-start gap-2">
          Have an account?{" "} 
          <Link to="/sign-in">
            <span className="hover:underline text-blue-600">Sign In</span>
          </Link>
        </p>
          {error && <p className="text-red-600">User already exists</p>}


      </div>
    </div>
  </div>
  )
}

export default SignUp