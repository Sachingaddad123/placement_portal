import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaUserEdit,
  FaCamera,
  FaSave,
} from "react-icons/fa";

function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  // SAVE MESSAGE
  const [saveMessage, setSaveMessage] =
    useState("");

  // PROFILE STATE
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    college: "",
    branch: "",
    mobile: "",
    gender: "",
    dob: "",
    passingYear: "",
    address: "",
    skills: "",
    linkedin: "",
    github: "",
    photo: "",
  });

  // LOAD SAVED DATA
  useEffect(() => {

    const savedProfile = JSON.parse(
      localStorage.getItem("profile")
    );

    const loggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser")
    );

    // LOAD COMPLETE PROFILE
    if (savedProfile) {

      setProfile(savedProfile);

    }

    // LOAD LOGIN USER DATA
    else if (loggedInUser) {

      setProfile((prev) => ({
        ...prev,
        name: loggedInUser.name || "",
        email: loggedInUser.email || "",
      }));

    }

  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  };

  // IMAGE UPLOAD
  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {

        setProfile((prev) => ({
          ...prev,
          photo: reader.result,
        }));

      };

      reader.readAsDataURL(file);

    }

  };

  // SAVE PROFILE
  const handleSave = () => {

    // SAVE TO LOCAL STORAGE
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    setIsEditing(false);

    // SHOW MESSAGE
    setSaveMessage(
      "Profile data saved successfully"
    );

    // AUTO HIDE
    setTimeout(() => {

      setSaveMessage("");

    }, 3000);

  };

  return (

    <>

      {/* SAVE MESSAGE */}
      {saveMessage && (

        <div className="fixed top-6 right-6 z-50">

          <div className="bg-white text-gray-700 min-w-[360px] shadow-2xl rounded-2xl overflow-hidden flex items-center">

            {/* LEFT GREEN BAR */}
            <div className="w-2 h-full bg-green-500"></div>

            {/* CONTENT */}
            <div className="flex items-center gap-4 px-6 py-5">

              {/* SUCCESS ICON */}
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">

                ✓

              </div>

              {/* TEXT */}
              <p className="text-lg font-medium">

                {saveMessage}

              </p>

            </div>

          </div>

        </div>

      )}

      <div className="flex bg-slate-950 text-white min-h-screen">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1">

          <Navbar />

          <div className="p-6 md:p-10">

            <div className="bg-slate-900 rounded-3xl shadow-2xl max-w-6xl mx-auto p-8">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-10">

                <div>

                  <h1 className="text-4xl font-bold text-cyan-400">
                    User Profile
                  </h1>

                  <p className="text-slate-400 mt-2">
                    Manage your personal information
                  </p>

                </div>

                {/* EDIT / SAVE BUTTON */}
                <button
                  onClick={() =>
                    isEditing
                      ? handleSave()
                      : setIsEditing(true)
                  }
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition duration-300 ${
                    isEditing
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-cyan-500 hover:bg-cyan-600"
                  }`}
                >

                  {isEditing ? (
                    <>
                      <FaSave />
                      Save
                    </>
                  ) : (
                    <>
                      <FaUserEdit />
                      Edit Profile
                    </>
                  )}

                </button>

              </div>

              {/* PROFILE CONTENT */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT SIDE */}
                <div className="flex flex-col items-center">

                  <div className="relative">

                    {/* IMAGE */}
                    {profile.photo ? (

                      <img
                        src={profile.photo}
                        alt="profile"
                        className="w-44 h-44 rounded-full border-4 border-cyan-400 object-cover"
                      />

                    ) : (

                      <div className="w-44 h-44 rounded-full border-4 border-cyan-400 bg-slate-800 flex items-center justify-center text-slate-400 text-center p-4">

                        Upload Profile Photo

                      </div>

                    )}

                    {/* CAMERA BUTTON */}
                    {isEditing && (

                      <label className="absolute bottom-2 right-2 bg-cyan-500 p-3 rounded-full cursor-pointer hover:bg-cyan-600 transition">

                        <FaCamera />

                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />

                      </label>

                    )}

                  </div>

                  {/* NAME */}
                  <h2 className="text-2xl font-bold mt-5">

                    {profile.name || "Enter Name"}

                  </h2>

                  {/* BRANCH */}
                  <p className="text-cyan-400 mt-2">

                    {profile.branch || "Enter Branch"}

                  </p>

                </div>

                {/* RIGHT SIDE */}
                <div className="md:col-span-2">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* FULL NAME */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                        value={profile.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* EMAIL */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={profile.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* COLLEGE */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        College Name
                      </label>

                      <input
                        type="text"
                        name="college"
                        placeholder="Enter College Name"
                        value={profile.college}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* BRANCH */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        Branch
                      </label>

                      <input
                        type="text"
                        name="branch"
                        placeholder="Enter Branch"
                        value={profile.branch}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* MOBILE */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        Mobile Number
                      </label>

                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Enter Mobile Number"
                        value={profile.mobile}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* GENDER */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        Gender
                      </label>

                      <select
                        name="gender"
                        value={profile.gender}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      >

                        <option value="">
                          Select Gender
                        </option>

                        <option value="Male">
                          Male
                        </option>

                        <option value="Female">
                          Female
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                    </div>

                    {/* DOB */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        Date of Birth
                      </label>

                      <input
                        type="date"
                        name="dob"
                        value={profile.dob}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* PASSING YEAR */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        Passing Year
                      </label>

                      <input
                        type="text"
                        name="passingYear"
                        placeholder="Enter Passing Year"
                        value={profile.passingYear}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* ADDRESS */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        Address
                      </label>

                      <input
                        type="text"
                        name="address"
                        placeholder="Enter Address"
                        value={profile.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* SKILLS */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        Skills
                      </label>

                      <input
                        type="text"
                        name="skills"
                        placeholder="Enter Skills"
                        value={profile.skills}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* LINKEDIN */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        LinkedIn
                      </label>

                      <input
                        type="text"
                        name="linkedin"
                        placeholder="Enter LinkedIn URL"
                        value={profile.linkedin}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                    {/* GITHUB */}
                    <div>

                      <label className="text-cyan-400 font-semibold">
                        GitHub
                      </label>

                      <input
                        type="text"
                        name="github"
                        placeholder="Enter GitHub URL"
                        value={profile.github}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-400"
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>

  );

}

export default Profile;