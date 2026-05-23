import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaUserGraduate,
  FaBuilding,
  FaBriefcase,
  FaCheckCircle,
  FaMoneyBillWave,
  FaTrophy,
} from "react-icons/fa";

function Dashboard() {

  const cards = [

    {
      title: "Total Students",
      value: 500,
      icon: <FaUserGraduate size={35} />,
      color: "from-cyan-500 to-blue-500",
    },

    {
      title: "Placed Students",
      value: 320,
      icon: <FaCheckCircle size={35} />,
      color: "from-green-500 to-emerald-500",
    },

    {
      title: "Visited Companies",
      value: 40,
      icon: <FaBuilding size={35} />,
      color: "from-purple-500 to-pink-500",
    },

    {
      title: "Jobs",
      value: 75,
      icon: <FaBriefcase size={35} />,
      color: "from-orange-500 to-red-500",
    },

    {
      title: "Placement %",
      value: "65%",
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center">

          {/* OUTER CIRCLE */}
          <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>

          {/* PROGRESS */}
          <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent rotate-45"></div>

          {/* TEXT */}
          <span className="text-sm font-bold">
            65%
          </span>

        </div>
      ),
      color: "from-yellow-400 to-orange-500",
    },

    {
      title: "Average Package",
      value: "8 LPA",
      icon: <FaMoneyBillWave size={35} />,
      color: "from-indigo-500 to-purple-600",
    },

    {
      title: "Highest Package",
      value: "24 LPA",
      icon: <FaTrophy size={35} />,
      color: "from-pink-500 to-rose-500",
    },

  ];

  return (

    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE */}
        <div className="p-8">

          {/* HERO SECTION */}
          <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20">

            {/* BACKGROUND IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
              alt="Placement Banner"
              className="w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

              <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Welcome to Placement Portal
              </h1>

              <p className="mt-5 text-xl text-slate-200 max-w-3xl leading-relaxed">
                Manage Students, Companies, Jobs & Placements Easily
              </p>

            </div>

          </div>

          {/* DASHBOARD CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {cards.map((card, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className={`bg-gradient-to-r ${card.color} p-6 rounded-3xl shadow-2xl cursor-pointer`}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-xl font-semibold">
                      {card.title}
                    </h2>

                    <p className="text-4xl font-bold mt-4">
                      {card.value}
                    </p>

                  </div>

                  <div className="bg-white/20 p-4 rounded-2xl flex items-center justify-center">

                    {card.icon}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

          {/* RECENT ACTIVITIES */}
          <div className="mt-10">

            <div className="bg-slate-900 rounded-3xl p-6 shadow-xl">

              <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                Recent Activities
              </h2>

              <div className="space-y-4">

                {/* ACTIVITY 1 */}
                <div className="bg-slate-800 p-5 rounded-2xl flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold text-lg">
                      Microsoft added Internship Jobs
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      New internship openings for CSE students
                    </p>

                  </div>

                  <span className="text-green-400 font-semibold">
                    Today
                  </span>

                </div>

                {/* ACTIVITY 2 */}
                <div className="bg-slate-800 p-5 rounded-2xl flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold text-lg">
                      25 Students placed in TCS
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Average package offered: 7 LPA
                    </p>

                  </div>

                  <span className="text-cyan-400 font-semibold">
                    Yesterday
                  </span>

                </div>

                {/* ACTIVITY 3 */}
                <div className="bg-slate-800 p-5 rounded-2xl flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold text-lg">
                      Amazon Placement Drive Scheduled
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Drive starts next Monday
                    </p>

                  </div>

                  <span className="text-orange-400 font-semibold">
                    2 Days Ago
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;