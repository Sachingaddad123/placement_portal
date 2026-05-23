import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaBell,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function Notifications() {

  const notifications = [

    {
      title: "New Company Arrived",
      message: "Google has opened applications for Frontend Developer role.",
      time: "10 Minutes Ago",
      icon: <FaBuilding />,
      color: "bg-cyan-500",
    },

    {
      title: "Interview Schedule",
      message: "Amazon technical interview scheduled on 25 May 2026.",
      time: "1 Hour Ago",
      icon: <FaCalendarAlt />,
      color: "bg-yellow-500",
    },

    {
      title: "Result Announcement",
      message: "Congratulations! Rahul selected in Microsoft.",
      time: "Today",
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },

    {
      title: "Application Deadline",
      message: "TCS application closes tomorrow at 6 PM.",
      time: "Yesterday",
      icon: <FaClock />,
      color: "bg-red-500",
    },

    {
      title: "Placement Drive",
      message: "Infosys campus drive starts next Monday.",
      time: "2 Days Ago",
      icon: <FaBell />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          {/* TITLE */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h1 className="text-4xl font-bold text-cyan-400">
                Notifications
              </h1>

              <p className="text-slate-400 mt-2">
                Latest Placement Updates
              </p>

            </div>

            {/* TOTAL */}
            <div className="bg-slate-900 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">

              <div className="bg-cyan-500 p-4 rounded-xl">
                <FaBell size={28} />
              </div>

              <div>

                <p className="text-slate-400">
                  Total Notifications
                </p>

                <h2 className="text-3xl font-bold">
                  {notifications.length}
                </h2>

              </div>

            </div>
          </div>

          {/* NOTIFICATION CARDS */}
          <div className="space-y-6">

            {notifications.map((notification, index) => (

              <div
                key={index}
                className="bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-800 hover:scale-[1.02] duration-300"
              >

                <div className="flex items-start gap-5">

                  {/* ICON */}
                  <div
                    className={`${notification.color} p-4 rounded-2xl`}
                  >
                    {notification.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <div className="flex justify-between items-center">

                      <h2 className="text-2xl font-bold">
                        {notification.title}
                      </h2>

                      <span className="text-slate-400 text-sm">
                        {notification.time}
                      </span>

                    </div>

                    <p className="mt-4 text-slate-300 leading-7">
                      {notification.message}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Notifications;