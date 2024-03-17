import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from "../redux/features/users/userSlice.js";

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state)=>state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())  //setLoading(true)
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if(data.success === false){
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-center text-slate-600">
            Sign In
          </h1>
          <form
            className="flex flex-col justify-center items-center mt-8 gap-4"
            onSubmit={handleSubmit}
          >
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
            <button className="bg-blue-200 border-2 border-blue-300 p-3 w-full rounded-lg text-slate-600 uppercase hover:opacity-80">
            {loading ? 'Loading...' : 'Sign In'}
            </button>
          </form>
          <p className="mt-6 flex items-center justify-start gap-2">
            Don't have an account?{" "}
            <Link to="/sign-up">
              <span className="hover:underline text-blue-600">Sign Up</span>
            </Link>
          </p>
          {error && <p className="text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
