// Resume.jsx

import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaFilePdf,
  FaUpload,
  FaDownload,
  FaEye,
  FaTrash,
  FaGlobe,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Resume() {

  const [resumes, setResumes] = useState([]);

  // PORTFOLIO STATES
  const [portfolio, setPortfolio] =
    useState({
      portfolio: "",
      github: "",
      linkedin: "",
    });

  // SUCCESS MESSAGE
  const [message, setMessage] =
    useState("");

  // HANDLE INPUT CHANGE
  const handlePortfolioChange = (e) => {

    setPortfolio({
      ...portfolio,
      [e.target.name]: e.target.value,
    });

  };

  // SAVE PORTFOLIO
  const savePortfolio = () => {

    localStorage.setItem(
      "portfolio",
      JSON.stringify(portfolio)
    );

    setMessage(
      "Portfolio details saved successfully"
    );

    setTimeout(() => {

      setMessage("");

    }, 3000);

  };

  // HANDLE FILE UPLOAD
  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (
      file &&
      file.type === "application/pdf"
    ) {

      const newResume = {

        id: Date.now(),

        name: file.name,

        size: (
          file.size / 1024
        ).toFixed(2),

        file: file,

        student: "Rahul Kumar",

        branch: "Computer Science",

        status: "Uploaded",

        date:
          new Date().toLocaleDateString(),
      };

      setResumes([
        ...resumes,
        newResume,
      ]);

      setMessage(
        "Resume uploaded successfully"
      );

      setTimeout(() => {

        setMessage("");

      }, 3000);

    }

    else {

      setMessage(
        "Please upload PDF file only"
      );

      setTimeout(() => {

        setMessage("");

      }, 3000);

    }

  };

  // DELETE RESUME
  const deleteResume = (id) => {

    const updatedResumes =
      resumes.filter(
        (resume) =>
          resume.id !== id
      );

    setResumes(updatedResumes);

    setMessage(
      "Resume deleted successfully"
    );

    setTimeout(() => {

      setMessage("");

    }, 3000);

  };

  return (

    <>

      {/* MESSAGE */}
      {message && (

        <div className="fixed top-6 right-6 z-50">

          <div className="bg-white text-gray-700 min-w-[360px] shadow-2xl rounded-2xl overflow-hidden flex items-center">

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

                {message}

              </p>

            </div>

          </div>

        </div>

      )}

      <div className="flex bg-slate-950 text-white min-h-screen">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN */}
        <div className="flex-1">

          <Navbar />

          <div className="p-8">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-10">

              <div>

                <h1 className="text-4xl font-bold text-cyan-400">

                  Resume Upload

                </h1>

                <p className="text-slate-400 mt-2">

                  Upload and manage student resumes

                </p>

              </div>

              {/* TOTAL */}
              <div className="bg-slate-900 px-6 py-4 rounded-2xl shadow-xl border border-slate-800">

                <p className="text-slate-400">

                  Total Resumes

                </p>

                <h2 className="text-3xl font-bold mt-2 text-cyan-400">

                  {resumes.length}

                </h2>

              </div>

            </div>

            {/* PORTFOLIO SECTION */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 mb-10">

              <h2 className="text-3xl font-bold text-cyan-400 mb-8">

                Portfolio Details

              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* PORTFOLIO */}
                <div>

                  <label className="text-slate-300 font-semibold">

                    Portfolio Website

                  </label>

                  <div className="relative mt-3">

                    <FaGlobe className="absolute left-4 top-4 text-slate-400" />

                    <input
                      type="text"
                      name="portfolio"
                      placeholder="Enter Portfolio URL"
                      value={portfolio.portfolio}
                      onChange={
                        handlePortfolioChange
                      }
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
                    />

                  </div>

                </div>

                {/* GITHUB */}
                <div>

                  <label className="text-slate-300 font-semibold">

                    GitHub Profile

                  </label>

                  <div className="relative mt-3">

                    <FaGithub className="absolute left-4 top-4 text-slate-400" />

                    <input
                      type="text"
                      name="github"
                      placeholder="Enter GitHub URL"
                      value={portfolio.github}
                      onChange={
                        handlePortfolioChange
                      }
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
                    />

                  </div>

                </div>

                {/* LINKEDIN */}
                <div>

                  <label className="text-slate-300 font-semibold">

                    LinkedIn Profile

                  </label>

                  <div className="relative mt-3">

                    <FaLinkedin className="absolute left-4 top-4 text-slate-400" />

                    <input
                      type="text"
                      name="linkedin"
                      placeholder="Enter LinkedIn URL"
                      value={portfolio.linkedin}
                      onChange={
                        handlePortfolioChange
                      }
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
                    />

                  </div>

                </div>

              </div>

              {/* SAVE BUTTON */}
              <button
                onClick={savePortfolio}
                className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-2xl font-semibold duration-300"
              >

                Save Portfolio

              </button>

            </div>

            {/* UPLOAD SECTION */}
            <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl border border-slate-800">

              <div className="flex flex-col items-center justify-center text-center">

                {/* ICON */}
                <div className="bg-cyan-500 p-6 rounded-full mb-6">

                  <FaFilePdf size={50} />

                </div>

                <h2 className="text-3xl font-bold">

                  Upload Resume PDF

                </h2>

                <p className="text-slate-400 mt-3">

                  Upload PDF resumes for placements

                </p>

                {/* BUTTON */}
                <label className="mt-8 cursor-pointer bg-cyan-500 hover:bg-cyan-600 duration-300 px-8 py-4 rounded-2xl flex items-center gap-4 font-semibold">

                  <FaUpload />

                  Upload Resume PDF

                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                </label>

                <p className="text-green-400 mt-5">

                  Upload PDF → View Resume → Download Resume

                </p>

              </div>

            </div>

            {/* EMPTY */}
            {resumes.length === 0 && (

              <div className="bg-slate-900 p-10 rounded-3xl text-center border border-slate-800 mt-10">

                <FaFilePdf
                  size={60}
                  className="mx-auto text-red-500"
                />

                <h2 className="text-2xl font-bold mt-6">

                  No Resume Uploaded

                </h2>

                <p className="text-slate-400 mt-3">

                  Upload student resume PDF files

                </p>

              </div>

            )}

            {/* RESUME LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

              {resumes.map((resume) => (

                <div
                  key={resume.id}
                  className="bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-800 hover:scale-105 duration-300"
                >

                  {/* TOP */}
                  <div className="flex items-center gap-5">

                    <div className="bg-red-500 p-4 rounded-2xl">

                      <FaFilePdf size={35} />

                    </div>

                    <div>

                      <h2 className="text-2xl font-bold">

                        {resume.name}

                      </h2>

                      <p className="text-slate-400 mt-1">

                        {resume.size} KB

                      </p>

                    </div>

                  </div>

                  {/* DETAILS */}
                  <div className="mt-6 space-y-3 text-slate-300">

                    <p>
                      Student: {resume.student}
                    </p>

                    <p>
                      Branch: {resume.branch}
                    </p>

                    <p>
                      Upload Date: {resume.date}
                    </p>

                    <p className="text-green-400">
                      Status: {resume.status}
                    </p>

                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-4 mt-8">

                    {/* VIEW */}
                    <a
                      href={URL.createObjectURL(
                        resume.file
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-green-500 hover:bg-green-600 duration-300 px-5 py-3 rounded-xl flex items-center gap-3 font-semibold"
                    >

                      <FaEye />

                      View

                    </a>

                    {/* DOWNLOAD */}
                    <a
                      href={URL.createObjectURL(
                        resume.file
                      )}
                      download={resume.name}
                      className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-3 rounded-xl flex items-center gap-3 font-semibold"
                    >

                      <FaDownload />

                      Download

                    </a>

                    {/* DELETE */}
                    <button
                      onClick={() =>
                        deleteResume(resume.id)
                      }
                      className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-3 rounded-xl flex items-center gap-3 font-semibold"
                    >

                      <FaTrash />

                      Delete

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </>

  );

}

export default Resume;