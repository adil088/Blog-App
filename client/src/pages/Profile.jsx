import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-7">
        <h1 className="text-4xl font-bold text-center text-slate-600">
          Profile
        </h1>
        <form className="flex flex-col mt-2 gap-2 items-center">
          <img src={currentUser.avatar} alt="Profile" className="h-32 w-32 rounded-full cursor-pointer object-cover"/>
          <input
            type="text"
            id="username"
            placeholder="username"
            className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
          />
          <button className="bg-blue-200 border-2 border-blue-300 p-3 w-full rounded-lg text-slate-600 uppercase hover:opacity-80">
            update
          </button>
        </form>
          <div className="flex justify-between mt-5 w-80"><span className="text-red-700 cursor-pointer">Delete Account</span><span className="text-red-700 cursor-pointer">Sign out</span></div>
      </div>
    </>
  );
};

export default Profile;
