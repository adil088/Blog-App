import React from "react";
import { Link } from "react-router-dom";
import OAuth from "../component/OAuth";

const SignIn = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-center text-slate-600">
            Sign In
          </h1>
          <form className="flex flex-col justify-center items-center mt-8 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
            />
              <button className="bg-blue-200 border-2 border-blue-300 p-3 w-full rounded-lg text-slate-600 uppercase">
                Sign In
              </button>
          <OAuth/>
          </form>
            <p className="mt-6 flex items-center justify-start">
            Don't have an account?{" "} 
            <Link to="/sign-up">
              <span className="hover:underline text-blue-600">Sign Up</span>
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignIn;
