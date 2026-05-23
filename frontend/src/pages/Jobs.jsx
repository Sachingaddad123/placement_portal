// Jobs.jsx

import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaSearch,
  FaFilter,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
} from "react-icons/fa";

import {
  SiTcs,
  SiInfosys,
  SiWipro,
} from "react-icons/si";

function Jobs() {

  // APPLY & DETAILS STATES
  const [selectedJob, setSelectedJob] =
    useState(null);

  const [detailsJob, setDetailsJob] =
    useState(null);

  // SUCCESS MESSAGE
  const [successMessage, setSuccessMessage] =
    useState("");

  const jobs = [

    {
      company: "Google",
      role: "Frontend Developer",
      package: "₹18 LPA",
      location: "Bangalore",
      icon: (
        <FaGoogle
          size={45}
          className="text-red-400"
        />
      ),
    },

    {
      company: "Microsoft",
      role: "Software Engineer",
      package: "₹22 LPA",
      location: "Hyderabad",
      icon: (
        <FaMicrosoft
          size={45}
          className="text-cyan-400"
        />
      ),
    },

    {
      company: "Amazon",
      role: "Backend Developer",
      package: "₹20 LPA",
      location: "Chennai",
      icon: (
        <FaAmazon
          size={45}
          className="text-yellow-400"
        />
      ),
    },

    {
      company: "TCS",
      role: "Java Developer",
      package: "₹7 LPA",
      location: "Pune",
      icon: (
        <SiTcs
          size={45}
          className="text-blue-400"
        />
      ),
    },

    {
      company: "Infosys",
      role: "Full Stack Developer",
      package: "₹8 LPA",
      location: "Mysore",
      icon: (
        <SiInfosys
          size={45}
          className="text-purple-400"
        />
      ),
    },

    {
      company: "Wipro",
      role: "React Developer",
      package: "₹6 LPA",
      location: "Bangalore",
      icon: (
        <SiWipro
          size={45}
          className="text-pink-400"
        />
      ),
    },

  ];

  return (

    <>

      {/* SUCCESS MESSAGE */}
      {successMessage && (

        <div className="fixed top-6 right-6 z-50">

          <div className="bg-white text-gray-700 min-w-[380px] shadow-2xl rounded-2xl overflow-hidden flex items-center">

            {/* GREEN BAR */}
            <div className="w-2 h-full bg-green-500"></div>

            {/* CONTENT */}
            <div className="flex items-center gap-4 px-6 py-5">

              {/* ICON */}
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">

                ✓

              </div>

              {/* TEXT */}
              <p className="text-lg font-medium">

                {successMessage}

              </p>

            </div>

          </div>

        </div>

      )}

      <div className="flex bg-slate-950 min-h-screen text-white">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN */}
        <div className="flex-1">

          {/* NAVBAR */}
          <Navbar />

          {/* HERO SECTION */}
          <div
            className="relative h-[250px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')",
            }}
          >

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 text-center">

              <h1 className="text-5xl font-bold text-white">
                Available Jobs
              </h1>

              <p className="mt-4 text-slate-300 text-lg">
                Apply for top company placements
              </p>

            </div>

          </div>

          {/* SEARCH + FILTER */}
          <div className="p-8 flex flex-col md:flex-row gap-5 justify-between items-center">

            {/* SEARCH */}
            <div className="flex items-center bg-slate-800 px-5 py-3 rounded-2xl w-full md:w-[400px]">

              <FaSearch className="text-slate-400" />

              <input
                type="text"
                placeholder="Search company or role..."
                className="bg-transparent outline-none ml-4 w-full"
              />

            </div>

            {/* FILTER */}
            <button className="flex items-center gap-3 bg-cyan-500 px-6 py-3 rounded-2xl hover:bg-cyan-600 duration-300">

              <FaFilter />

              Filter Jobs

            </button>

          </div>

          {/* JOB CARDS */}
          <div className="px-8 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {jobs.map((job, index) => (

              <div
                key={index}
                className="bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-800 hover:scale-105 duration-300"
              >

                {/* COMPANY ICON */}
                <div className="flex justify-center mb-5">

                  <div className="bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">

                    {job.icon}

                  </div>

                </div>

                {/* COMPANY DETAILS */}
                <h2 className="text-2xl font-bold text-cyan-400 text-center">

                  {job.company}

                </h2>

                <p className="mt-3 text-lg font-semibold text-center">

                  {job.role}

                </p>

                <p className="mt-2 text-slate-300 text-center">

                  Package: {job.package}

                </p>

                <p className="text-slate-400 text-center">

                  Location: {job.location}

                </p>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-6">

                  {/* APPLY BUTTON */}
                  <button
                    onClick={() =>
                      setSelectedJob(job)
                    }
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-2xl font-semibold duration-300"
                  >

                    Apply

                  </button>

                  {/* DETAILS BUTTON */}
                  <button
                    onClick={() =>
                      setDetailsJob(job)
                    }
                    className="flex-1 bg-slate-700 hover:bg-slate-600 py-3 rounded-2xl font-semibold duration-300"
                  >

                    Details

                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* APPLY POPUP */}
          {selectedJob && (

            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

              <div className="bg-slate-900 p-8 rounded-3xl w-[400px] shadow-2xl">

                <h2 className="text-3xl font-bold text-cyan-400 mb-4">

                  Apply Job

                </h2>

                <p className="mb-2">

                  Company: {selectedJob.company}

                </p>

                <p className="mb-6">

                  Role: {selectedJob.role}

                </p>

                {/* FORM */}
                <form
                  className="space-y-4"
                  onSubmit={(e) => {

                    e.preventDefault();

                    const newApplication = {
                      company:
                        selectedJob.company,
                      role:
                        selectedJob.role,
                      appliedDate:
                        new Date().toLocaleDateString(),
                      interviewDate:
                        "Will Be Updated",
                      time: "TBD",
                      status: "Applied",
                    };

                    // OLD APPLICATIONS
                    const oldApplications =
                      JSON.parse(
                        localStorage.getItem(
                          "applications"
                        )
                      ) || [];

                    // ADD NEW
                    const updatedApplications =
                      [
                        ...oldApplications,
                        newApplication,
                      ];

                    // SAVE
                    localStorage.setItem(
                      "applications",
                      JSON.stringify(
                        updatedApplications
                      )
                    );

                    // SUCCESS MESSAGE
                    setSuccessMessage(
                      `Application submitted successfully for ${selectedJob.company}`
                    );

                    // AUTO HIDE
                    setTimeout(() => {

                      setSuccessMessage("");

                    }, 3000);

                    // CLOSE POPUP
                    setSelectedJob(null);

                  }}
                >

                  {/* NAME */}
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full p-3 rounded-xl bg-slate-800 outline-none"
                    required
                  />

                  {/* EMAIL */}
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full p-3 rounded-xl bg-slate-800 outline-none"
                    required
                  />

                  {/* RESUME */}
                  <div className="bg-slate-800 p-4 rounded-xl">

                    <label className="block mb-2 text-slate-300 font-semibold">

                      Upload Resume

                    </label>

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="w-full text-white"
                      required
                    />

                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold duration-300"
                  >

                    Submit Application

                  </button>

                </form>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() =>
                    setSelectedJob(null)
                  }
                  className="mt-4 w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold duration-300"
                >

                  Close

                </button>

              </div>

            </div>

          )}

          {/* JOB DETAILS POPUP */}
          {detailsJob && (

            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

              <div className="bg-slate-900 p-8 rounded-3xl w-[450px] shadow-2xl">

                <h2 className="text-3xl font-bold text-cyan-400 mb-6">

                  Job Details

                </h2>

                <div className="space-y-4">

                  <div className="flex justify-center mb-4">

                    {detailsJob.icon}

                  </div>

                  <p>

                    <span className="font-bold">
                      Company:
                    </span>{" "}

                    {detailsJob.company}

                  </p>

                  <p>

                    <span className="font-bold">
                      Role:
                    </span>{" "}

                    {detailsJob.role}

                  </p>

                  <p>

                    <span className="font-bold">
                      Package:
                    </span>{" "}

                    {detailsJob.package}

                  </p>

                  <p>

                    <span className="font-bold">
                      Location:
                    </span>{" "}

                    {detailsJob.location}

                  </p>

                </div>

                <button
                  onClick={() =>
                    setDetailsJob(null)
                  }
                  className="mt-6 w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold"
                >

                  Close

                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </>

  );

}

export default Jobs;