import React from "react";

import {
  FaTachometerAlt,
  FaUserGraduate,
  FaBuilding,
  FaBriefcase,
  FaUserCircle,
  FaSignOutAlt,
  FaBell,
  FaFilePdf,
  FaClipboardList,
  FaNewspaper, // NEWS ICON
} from "react-icons/fa";

import {
  Link,
  useLocation,
} from "react-router-dom";

const Sidebar = () => {

  const location = useLocation();

  const menus = [

    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/dashboard",
    },

    {
      name: "Jobs",
      icon: <FaBriefcase />,
      path: "/jobs",
    },

    {
      name: "Applications",
      icon: <FaClipboardList />,
      path: "/applications",
    },

    {
      name: "Students",
      icon: <FaUserGraduate />,
      path: "/students",
    },

    {
      name: "Companies",
      icon: <FaBuilding />,
      path: "/companies",
    },

    // ================= NEWS SECTION =================
    {
      name: "Hiring News",
      icon: <FaNewspaper />,
      path: "/news",
    },

    {
      name: "Notifications",
      icon: <FaBell />,
      path: "/notifications",
    },

    {
      name: "Resume Upload",
      icon: <FaFilePdf />,
      path: "/resume",
    },

    {
      name: "Profile",
      icon: <FaUserCircle />,
      path: "/profile",
    },
  ];

  return (
    <div className="w-[260px] bg-slate-900 text-white min-h-screen p-6 shadow-2xl">

      {/* LOGO */}
      <div className="mb-10">

        <h1 className="text-3xl font-bold text-cyan-400">
          Placement
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Student Dashboard
        </p>

      </div>

      {/* MENU */}
      <div className="space-y-4">

        {menus.map((menu, index) => (

          <Link
            key={index}
            to={menu.path}
            className={`flex items-center gap-4 p-4 rounded-xl duration-300 cursor-pointer

            ${
              location.pathname === menu.path
                ? "bg-cyan-500 text-white"
                : "hover:bg-slate-800"
            }
            `}
          >

            <div className="text-lg">
              {menu.icon}
            </div>

            <span className="font-medium">
              {menu.name}
            </span>

          </Link>
        ))}

        {/* LOGOUT */}
        <Link
          to="/"
          className="flex items-center gap-4 p-4 rounded-xl hover:bg-red-500 duration-300 cursor-pointer mt-20"
        >

          <FaSignOutAlt />

          <span>Logout</span>

        </Link>

      </div>
    </div>
  );
};

export default Sidebar;