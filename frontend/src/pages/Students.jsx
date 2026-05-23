import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaUserGraduate,
  FaCheckCircle,
  FaBuilding,
  FaMoneyBillWave,
} from "react-icons/fa";

function Students() {

  const students = [

    {
      name: "Rahul",
      branch: "CSE",
      cgpa: "8.9",
      company: "Google",
      role: "Frontend Developer",
      salary: "18 LPA",
      status: "Placed",
    },

    {
      name: "Priya",
      branch: "ISE",
      cgpa: "9.1",
      company: "Microsoft",
      role: "Software Engineer",
      salary: "22 LPA",
      status: "Placed",
    },

    {
      name: "Amit",
      branch: "ECE",
      cgpa: "8.5",
      company: "Amazon",
      role: "Backend Developer",
      salary: "20 LPA",
      status: "Placed",
    },

    {
      name: "Sneha",
      branch: "CSE",
      cgpa: "7.9",
      company: "TCS",
      role: "Java Developer",
      salary: "7 LPA",
      status: "Placed",
    },

    {
      name: "Kiran",
      branch: "ME",
      cgpa: "7.2",
      company: "Not Placed",
      role: "-",
      salary: "-",
      status: "Pending",
    },

    {
      name: "Anjali",
      branch: "ISE",
      cgpa: "8.7",
      company: "Infosys",
      role: "Full Stack Developer",
      salary: "8 LPA",
      status: "Placed",
    },
  ];

  // TOTAL COUNTS
  const totalStudents = students.length;

  const placedStudents = students.filter(
    (student) => student.status === "Placed"
  ).length;

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          {/* TITLE */}
          <h1 className="text-4xl font-bold text-cyan-400 mb-10">
            Students Placement Records
          </h1>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            {/* TOTAL STUDENTS */}
            <div className="bg-slate-900 p-6 rounded-3xl shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-400">
                    Total Students
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    {totalStudents}
                  </h2>

                </div>

                <div className="bg-cyan-500 p-4 rounded-2xl">
                  <FaUserGraduate size={30} />
                </div>

              </div>
            </div>

            {/* PLACED */}
            <div className="bg-slate-900 p-6 rounded-3xl shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-400">
                    Placed Students
                  </p>

                  <h2 className="text-4xl font-bold mt-3 text-green-400">
                    {placedStudents}
                  </h2>

                </div>

                <div className="bg-green-500 p-4 rounded-2xl">
                  <FaCheckCircle size={30} />
                </div>

              </div>
            </div>

            {/* COMPANIES */}
            <div className="bg-slate-900 p-6 rounded-3xl shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-400">
                    Companies Visited
                  </p>

                  <h2 className="text-4xl font-bold mt-3 text-purple-400">
                    12
                  </h2>

                </div>

                <div className="bg-purple-500 p-4 rounded-2xl">
                  <FaBuilding size={30} />
                </div>

              </div>
            </div>

          </div>

          {/* STUDENT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {students.map((student, index) => (

              <div
                key={index}
                className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 hover:scale-105 duration-300"
              >

                {/* HEADER */}
                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold text-cyan-400">
                    {student.name}
                  </h2>

                  <span
                    className={`px-4 py-1 rounded-full text-sm

                    ${
                      student.status === "Placed"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }
                    `}
                  >
                    {student.status}
                  </span>

                </div>

                {/* DETAILS */}
                <div className="mt-6 space-y-3 text-slate-300">

                  <p>
                    🎓 Branch: {student.branch}
                  </p>

                  <p>
                    📊 CGPA: {student.cgpa}
                  </p>

                  <p>
                    🏢 Company: {student.company}
                  </p>

                  <p>
                    💼 Role: {student.role}
                  </p>

                  <p className="flex items-center gap-2 text-green-400">

                    <FaMoneyBillWave />

                    Salary: {student.salary}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Students;