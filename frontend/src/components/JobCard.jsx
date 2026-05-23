import React from "react";

import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

function JobCard({ job }) {

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
    >

      {/* TOP */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">

        <h2 className="text-3xl font-bold text-white">
          {job.company}
        </h2>

        <p className="mt-2 text-slate-100 flex items-center gap-3">

          <FaBriefcase />

          {job.role}
        </p>
      </div>

      {/* DETAILS */}
      <div className="p-6 space-y-5">

        <div className="flex items-center gap-4 text-slate-300">

          <FaMoneyBillWave className="text-green-400" />

          <span>
            Package: {job.package}
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-300">

          <FaMapMarkerAlt className="text-red-400" />

          <span>
            Location: {job.location}
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-4">

          <button className="flex-1 bg-cyan-500 py-3 rounded-xl font-semibold hover:bg-cyan-600 duration-300">

            Apply Now
          </button>

          <button className="flex-1 bg-slate-800 py-3 rounded-xl font-semibold hover:bg-slate-700 duration-300">

            Details
          </button>

        </div>
      </div>
    </motion.div>
  );
}

export default JobCard;