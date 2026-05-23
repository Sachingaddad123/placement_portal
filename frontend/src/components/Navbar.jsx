import React from "react";

import {
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {

  // GET USER DATA
  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="flex items-center justify-between bg-slate-900 text-white px-8 py-5 shadow-xl border-b border-slate-800">

      {/* LEFT */}
      <div>

        <h1 className="text-2xl font-bold text-cyan-400">
          College Placement System
        </h1>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">

        {/* NOTIFICATION */}
        <div className="relative cursor-pointer">

          <div className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 duration-300">

            <FaBell size={20} />

          </div>

          {/* COUNT */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">

            5

          </span>

        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-2xl">

          {/* PROFILE IMAGE */}
          <div className="w-12 h-12 rounded-full overflow-hidden bg-cyan-500 flex items-center justify-center">

            {user?.profileImage ? (

              <img
                src={user.profileImage}
                alt="profile"
                className="w-full h-full object-cover"
              />

            ) : (

              <FaUserCircle
                size={35}
                className="text-white"
              />

            )}

          </div>

          {/* USER DETAILS */}
          <div>

            <p className="font-semibold text-white">
              {user?.name || "Admin"}
            </p>

            <p className="text-sm text-slate-400">
              {user?.email || "Placement Officer"}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;