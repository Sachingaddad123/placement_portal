import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUserTie,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

function Companies() {

  // DETAILS STATE
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [

    {
      name: "Google",
      role: "Frontend Developer",
      package: "20 LPA",
      location: "Bangalore",
      cgpa: "8.5",
      hr: "Rahul Sharma",
      status: "Hiring",
      logo:
        "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    },

    {
      name: "Amazon",
      role: "Backend Developer",
      package: "18 LPA",
      location: "Hyderabad",
      cgpa: "8.0",
      hr: "Sneha Patel",
      status: "Hiring",
      logo:
        "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
    },

    {
      name: "Microsoft",
      role: "Software Engineer",
      package: "22 LPA",
      location: "Chennai",
      cgpa: "8.7",
      hr: "Amit Verma",
      status: "Hiring",
      logo:
        "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    },

    {
      name: "Infosys",
      role: "Full Stack Developer",
      package: "8 LPA",
      location: "Mysore",
      cgpa: "7.5",
      hr: "Kiran Rao",
      status: "Open",
      logo:
        "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },

    {
      name: "TCS",
      role: "Java Developer",
      package: "7 LPA",
      location: "Pune",
      cgpa: "7.0",
      hr: "Priya Singh",
      status: "Open",
      logo:
        "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    },

    {
      name: "Wipro",
      role: "React Developer",
      package: "6 LPA",
      location: "Bangalore",
      cgpa: "7.2",
      hr: "Arjun Kumar",
      status: "Closed",
      logo:
        "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
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
                Companies
              </h1>

              <p className="text-slate-400 mt-2">
                Top Companies Visiting Campus
              </p>

            </div>

            {/* TOTAL */}
            <div className="bg-slate-900 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">

              <div className="bg-cyan-500 p-4 rounded-xl">
                <FaBuilding size={28} />
              </div>

              <div>

                <p className="text-slate-400">
                  Total Companies
                </p>

                <h2 className="text-3xl font-bold">
                  {companies.length}
                </h2>

              </div>

            </div>
          </div>

          {/* COMPANY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {companies.map((company, index) => (

              <div
                key={index}
                className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 hover:scale-105 duration-300"
              >

                {/* TOP */}
                <div className="flex items-center gap-4">

                  <img
                    src={company.logo}
                    alt="logo"
                    className="w-16 h-16 bg-white p-2 rounded-2xl"
                  />

                  <div>

                    <h2 className="text-2xl font-bold text-cyan-400">
                      {company.name}
                    </h2>

                    <p className="text-slate-400 mt-1">
                      {company.role}
                    </p>

                  </div>
                </div>

                {/* DETAILS */}
                <div className="mt-6 space-y-4 text-slate-300">

                  <p className="flex items-center gap-3">

                    <FaMoneyBillWave className="text-green-400" />

                    Package: {company.package}
                  </p>

                  <p className="flex items-center gap-3">

                    <FaMapMarkerAlt className="text-red-400" />

                    Location: {company.location}
                  </p>

                  <p className="flex items-center gap-3">

                    🎓 Eligibility CGPA: {company.cgpa}
                  </p>

                  <p className="flex items-center gap-3">

                    <FaUserTie className="text-yellow-400" />

                    HR: {company.hr}
                  </p>

                  <p
                    className={`flex items-center gap-3 font-semibold

                    ${
                      company.status === "Hiring"
                        ? "text-green-400"
                        : company.status === "Open"
                        ? "text-cyan-400"
                        : "text-red-400"
                    }
                    `}
                  >

                    <FaCheckCircle />

                    {company.status}
                  </p>

                </div>

                {/* BUTTON */}
                <button
                  onClick={() => setSelectedCompany(company)}
                  className="mt-6 w-full bg-cyan-500 py-3 rounded-xl font-semibold hover:bg-cyan-600 duration-300"
                >

                  View Details
                </button>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* DETAILS MODAL */}
      {selectedCompany && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-slate-900 w-[500px] max-w-[95%] rounded-3xl p-8 shadow-2xl border border-slate-700 relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedCompany(null)}
              className="absolute top-5 right-5 text-white hover:text-red-400"
            >
              <FaTimes size={24} />
            </button>

            {/* COMPANY LOGO */}
            <div className="flex justify-center">

              <img
                src={selectedCompany.logo}
                alt="logo"
                className="w-24 h-24 bg-white p-3 rounded-3xl"
              />

            </div>

            {/* COMPANY NAME */}
            <h1 className="text-4xl font-bold text-cyan-400 text-center mt-6">
              {selectedCompany.name}
            </h1>

            {/* DETAILS */}
            <div className="mt-8 space-y-5 text-lg">

              <p className="flex items-center gap-3">
                💼 Role:
                <span className="text-slate-300">
                  {selectedCompany.role}
                </span>
              </p>

              <p className="flex items-center gap-3">
                <FaMoneyBillWave className="text-green-400" />
                Package:
                <span className="text-slate-300">
                  {selectedCompany.package}
                </span>
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-400" />
                Location:
                <span className="text-slate-300">
                  {selectedCompany.location}
                </span>
              </p>

              <p className="flex items-center gap-3">
                🎓 Minimum CGPA:
                <span className="text-slate-300">
                  {selectedCompany.cgpa}
                </span>
              </p>

              <p className="flex items-center gap-3">
                <FaUserTie className="text-yellow-400" />
                HR Name:
                <span className="text-slate-300">
                  {selectedCompany.hr}
                </span>
              </p>

              <p className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-400" />
                Status:
                <span
                  className={`font-semibold
                    ${
                      selectedCompany.status === "Hiring"
                        ? "text-green-400"
                        : selectedCompany.status === "Open"
                        ? "text-cyan-400"
                        : "text-red-400"
                    }
                  `}
                >
                  {selectedCompany.status}
                </span>
              </p>

            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedCompany(null)}
              className="mt-8 w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold duration-300"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Companies;