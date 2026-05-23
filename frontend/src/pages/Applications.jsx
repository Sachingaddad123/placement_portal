// Applications.jsx

import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaSearch,
  FaFileUpload,
  FaCalendarAlt,
  FaTrash,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaBriefcase,
} from "react-icons/fa";

function Applications() {

  // SEARCH
  const [search, setSearch] = useState("");

  // FILTER
  const [filterStatus, setFilterStatus] = useState("All");

  // APPLICATION DATA
  const [applications, setApplications] = useState([]);

  // LOAD LOCAL STORAGE
  useEffect(() => {

    const storedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(storedApplications);

  }, []);

  // WITHDRAW APPLICATION
  const withdrawApplication = (index) => {

    const updatedApplications =
      applications.filter((_, i) => i !== index);

    setApplications(updatedApplications);

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );
  };

  // FILTERED DATA
  const filteredApplications = applications.filter((app) => {

    const matchesSearch =
      app.company.toLowerCase().includes(search.toLowerCase()) ||
      app.role.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "All" ||
      app.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // STATUS COUNTS
  const totalApplications = applications.length;

  const selectedCount = applications.filter(
    (app) => app.status === "Selected"
  ).length;

  const rejectedCount = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  return (

    <div className="flex bg-slate-950 text-white min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          {/* PAGE TITLE */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">

            <div>

              <h1 className="text-4xl font-bold text-cyan-400">
                Applications
              </h1>

              <p className="text-slate-400 mt-2">
                Track all your job applications
              </p>

            </div>

            {/* COUNTS */}
            <div className="flex gap-5 flex-wrap">

              <div className="bg-slate-900 px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-slate-400">
                  Total Applications
                </p>

                <h2 className="text-3xl font-bold text-cyan-400">
                  {totalApplications}
                </h2>
              </div>

              <div className="bg-slate-900 px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-slate-400">
                  Selected
                </p>

                <h2 className="text-3xl font-bold text-green-400">
                  {selectedCount}
                </h2>
              </div>

              <div className="bg-slate-900 px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-slate-400">
                  Rejected
                </p>

                <h2 className="text-3xl font-bold text-red-400">
                  {rejectedCount}
                </h2>
              </div>

            </div>
          </div>

          {/* SEARCH + FILTER */}
          <div className="flex flex-col md:flex-row gap-5 mb-10">

            {/* SEARCH */}
            <div className="flex items-center bg-slate-900 px-5 py-3 rounded-2xl w-full">

              <FaSearch className="text-slate-400" />

              <input
                type="text"
                placeholder="Search company or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none ml-4 w-full"
              />

            </div>

            {/* FILTER */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-slate-900 px-5 py-3 rounded-2xl outline-none"
            >

              <option value="All">All</option>
              <option value="Applied">Applied</option>
              <option value="Shortlisted">
                Shortlisted
              </option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>

            </select>

          </div>

          {/* APPLICATION CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {filteredApplications.map((app, index) => (

              <div
                key={index}
                className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 hover:scale-105 duration-300"
              >

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-2xl font-bold text-cyan-400">
                      {app.company}
                    </h2>

                    <p className="text-slate-400 mt-1 flex items-center gap-2">
                      <FaBriefcase />
                      {app.role}
                    </p>

                  </div>

                  {/* STATUS */}
                  <div>

                    {app.status === "Applied" && (
                      <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                        <FaClock />
                        Applied
                      </span>
                    )}

                    {app.status === "Shortlisted" && (
                      <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                        <FaCheckCircle />
                        Shortlisted
                      </span>
                    )}

                    {app.status === "Selected" && (
                      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                        <FaCheckCircle />
                        Selected
                      </span>
                    )}

                    {app.status === "Rejected" && (
                      <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                        <FaTimesCircle />
                        Rejected
                      </span>
                    )}

                  </div>

                </div>

                {/* DETAILS */}
                <div className="mt-6 space-y-4 text-slate-300">

                  <p>
                    📅 Applied Date:
                    <span className="ml-2 text-white">
                      {app.appliedDate}
                    </span>
                  </p>

                  <p className="flex items-center gap-3">

                    <FaCalendarAlt className="text-cyan-400" />

                    Interview:
                    <span className="text-white">
                      {app.interviewDate}
                    </span>

                    at

                    <span className="text-white">
                      {app.time}
                    </span>

                  </p>

                </div>

                {/* RESUME */}
                <div className="mt-6">

                  <label className="flex items-center gap-3 bg-slate-800 px-5 py-3 rounded-2xl cursor-pointer hover:bg-slate-700 duration-300">

                    <FaFileUpload className="text-cyan-400" />

                    Upload Resume

                    <input
                      type="file"
                      className="hidden"
                    />

                  </label>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-6">

                  <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-2xl font-semibold duration-300">
                    View Details
                  </button>

                  <button
                    onClick={() => withdrawApplication(index)}
                    className="flex items-center justify-center gap-2 flex-1 bg-red-500 hover:bg-red-600 py-3 rounded-2xl font-semibold duration-300"
                  >

                    <FaTrash />

                    Withdraw

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Applications;