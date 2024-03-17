import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-blue-200 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
        <Link to="/">
          <h1 className="font-bold text-slate-700">Blog App</h1>
        </Link>
        <form className="bg-blue-100 border-2 border-blue-300 p-3 rounded-lg flex items-center">
          <input
            type="text"
            name=""
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-2 sm:gap-4">
          <Link to="/">
            <li className="hidden sm:inline hover:underline cursor-pointer text-slate-700">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline cursor-pointer text-slate-700">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img className="h-7 w-7 rounded-full object-cover" src={currentUser.avatar} alt="Profile" />
            ) : (
              <li className="hover:underline cursor-pointer text-slate-700">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
