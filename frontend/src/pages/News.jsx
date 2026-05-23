import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  FaNewspaper,
  FaSearch,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaBolt,
  FaFire,
  FaRegBookmark,
  FaBookmark,
  FaChevronDown,
  FaRegClock,
  FaGlobe,
  FaShare,
  FaEye,
} from "react-icons/fa";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────

const CATEGORIES = [
  "All",
  "Hiring",
  "Internship",
  "Fresher",
  "Tech Jobs",
  "Remote",
];

const CATEGORY_KEYWORDS = {
  Hiring: ["hiring", "recruit", "job opening"],
  Internship: ["intern", "internship", "trainee"],
  Fresher: ["fresher", "entry level", "graduate"],
  "Tech Jobs": ["software", "developer", "engineer", "tech"],
  Remote: ["remote", "work from home", "wfh"],
};

const CATEGORY_COLORS = {
  Hiring: {
    bg: "#0f2a1a",
    text: "#4ade80",
    border: "#166534",
  },

  Internship: {
    bg: "#1a1a0f",
    text: "#facc15",
    border: "#854d0e",
  },

  Fresher: {
    bg: "#0f1a2a",
    text: "#60a5fa",
    border: "#1e3a5f",
  },

  "Tech Jobs": {
    bg: "#1a0f1a",
    text: "#c084fc",
    border: "#6b21a8",
  },

  Remote: {
    bg: "#1a0f0f",
    text: "#f87171",
    border: "#991b1b",
  },

  General: {
    bg: "#1a1a1a",
    text: "#94a3b8",
    border: "#334155",
  },
};

// ─────────────────────────────────────────────
// DUMMY NEWS DATA
// ─────────────────────────────────────────────

const DUMMY_NEWS = [
  {
    title: "TCS Starts Mass Hiring for 2026 Freshers",
    description:
      "TCS announced large scale fresher recruitment for software developer, testing and support roles across India.",
    source: { name: "TCS Careers" },
    url: "https://www.tcs.com/careers",
    urlToImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    publishedAt: "2026-05-13T08:00:00Z",
  },

  {
    title: "Infosys Internship Program Open for Engineering Students",
    description:
      "Infosys launched internship opportunities for CSE, ISE and AIML students with stipend and PPO chances.",
    source: { name: "Infosys" },
    url: "https://www.infosys.com/careers",
    urlToImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    publishedAt: "2026-05-13T09:30:00Z",
  },

  {
    title: "Amazon Hiring Remote Software Engineers",
    description:
      "Amazon is hiring remote developers and cloud engineers for multiple teams including AWS and AI services.",
    source: { name: "Amazon Jobs" },
    url: "https://www.amazon.jobs",
    urlToImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    publishedAt: "2026-05-12T12:00:00Z",
  },

  {
    title: "Wipro Opens Fresher Recruitment Drive 2026",
    description:
      "Wipro announced fresher hiring for graduates with training and placement opportunities in Bengaluru and Hyderabad.",
    source: { name: "Wipro Careers" },
    url: "https://careers.wipro.com",
    urlToImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    publishedAt: "2026-05-12T10:15:00Z",
  },

  {
    title: "Google Software Internship Applications Started",
    description:
      "Google internship applications are now open for students interested in software engineering and AI research.",
    source: { name: "Google Careers" },
    url: "https://careers.google.com",
    urlToImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    publishedAt: "2026-05-11T06:45:00Z",
  },

  {
    title: "Microsoft Hiring AI Engineers and Full Stack Developers",
    description:
      "Microsoft expands AI and cloud teams with new openings for developers, analysts and engineering graduates.",
    source: { name: "Microsoft Careers" },
    url: "https://careers.microsoft.com",
    urlToImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
    publishedAt: "2026-05-11T04:00:00Z",
  },
];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function detectCategory(title = "", description = "") {
  const text = (title + " " + description).toLowerCase();

  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) {
      return cat;
    }
  }

  return "General";
}

function timeAgo(dateString) {
  const diff = Math.floor(
    (Date.now() - new Date(dateString)) / 1000
  );

  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;

  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;

  return `${Math.floor(diff / 86400)}d ago`;
}

function estimateReadTime(text = "") {
  return Math.max(1, Math.ceil(text.split(" ").length / 200));
}

// ─────────────────────────────────────────────
// NEWS PAGE
// ─────────────────────────────────────────────

function News() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [saved, setSaved] = useState({});
  const [featured, setFeatured] = useState(null);

  // ─────────────────────────────────────────
  // LOAD DUMMY DATA
  // ─────────────────────────────────────────

  useEffect(() => {
    setTimeout(() => {
      const enriched = DUMMY_NEWS.map((article) => ({
        ...article,
        category: detectCategory(
          article.title,
          article.description
        ),

        readTime: estimateReadTime(
          article.description || ""
        ),

        views: Math.floor(Math.random() * 9000 + 500),
      }));

      setFeatured(enriched[0]);
      setArticles(enriched.slice(1));

      setLoading(false);
    }, 1000);
  }, []);

  // ─────────────────────────────────────────
  // FILTER
  // ─────────────────────────────────────────

  const filtered = articles.filter((a) => {
    const matchSearch =
      a.title?.toLowerCase().includes(search.toLowerCase()) ||
      a.source?.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" ||
      a.category === activeCategory;

    return matchSearch && matchCategory;
  });

  const toggleSave = (i) =>
    setSaved((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6 md:p-10">

          {/* HEADER */}

          <div className="mb-10 flex items-end justify-between flex-wrap gap-4">

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                  <FaBolt size={10} />
                  Live News
                </span>
              </div>

              <h1 className="text-4xl font-bold text-white leading-tight">
                Job & Hiring News
              </h1>

              <p className="text-slate-400 mt-1">
                Latest hiring updates, internship openings &
                tech job news
              </p>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-2.5 rounded-xl transition text-sm font-semibold"
            >
              <FaBolt size={12} />
              Refresh
            </button>
          </div>

          {/* LOADING */}

          {loading ? (
            <div className="text-center py-28">
              <div className="w-14 h-14 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />

              <p className="mt-5 text-slate-400 text-sm">
                Loading latest job news...
              </p>
            </div>
          ) : (
            <>
              {/* FEATURED */}

              {featured && (
                <section className="mb-12">

                  <div className="flex items-center gap-2 mb-5">
                    <FaFire className="text-orange-400" />

                    <h2 className="text-lg font-bold text-white">
                      Top Story
                    </h2>
                  </div>

                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid grid-cols-1 md:grid-cols-2 bg-slate-900 border border-slate-800 hover:border-cyan-500 rounded-3xl overflow-hidden transition duration-300 shadow-xl"
                  >

                    {/* IMAGE */}

                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={featured.urlToImage}
                        alt="featured"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      <CategoryBadge
                        category={featured.category}
                        className="absolute top-4 left-4"
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="p-7 flex flex-col justify-between">

                      <div>

                        <div className="flex items-center gap-2 mb-3">
                          <FaGlobe
                            className="text-cyan-400"
                            size={13}
                          />

                          <span className="text-cyan-400 text-sm font-semibold">
                            {featured.source?.name}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold leading-snug group-hover:text-cyan-300 transition mb-4">
                          {featured.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed">
                          {featured.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-800 text-xs text-slate-500">

                        <div className="flex items-center gap-4">

                          <span className="flex items-center gap-1">
                            <FaCalendarAlt size={11} />
                            {timeAgo(featured.publishedAt)}
                          </span>

                          <span className="flex items-center gap-1">
                            <FaRegClock size={11} />
                            {featured.readTime} min read
                          </span>

                          <span className="flex items-center gap-1">
                            <FaEye size={11} />
                            {featured.views.toLocaleString()}
                          </span>

                        </div>

                        <span className="flex items-center gap-1 text-cyan-400">
                          Read full story
                          <FaExternalLinkAlt size={10} />
                        </span>

                      </div>
                    </div>
                  </a>
                </section>
              )}

              {/* SEARCH */}

              <div className="flex flex-col md:flex-row gap-4 mb-8">

                <div className="flex-1 bg-slate-900 rounded-2xl px-4 py-3 flex items-center gap-3 border border-slate-800">

                  <FaSearch className="text-cyan-400" />

                  <input
                    type="text"
                    placeholder="Search news, companies, topics..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    className="bg-transparent outline-none w-full text-white placeholder-slate-500 text-sm"
                  />
                </div>

                <div className="flex items-center gap-2 flex-wrap">

                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() =>
                        setActiveCategory(cat)
                      }
                      className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                        activeCategory === cat
                          ? "bg-cyan-500 border-cyan-500 text-white"
                          : "bg-slate-900 border-slate-700 text-slate-400 hover:border-cyan-500 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* RESULT */}

              <div className="flex items-center gap-2 mb-6 text-sm text-slate-400">

                <FaNewspaper className="text-cyan-400" />

                Showing
                <span className="text-white font-semibold">
                  {filtered.length}
                </span>

                articles · Updated

                <span className="text-cyan-400">
                  {new Date().toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              {/* NEWS GRID */}

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

                {filtered.map((article, i) => (
                  <NewsCard
                    key={i}
                    article={article}
                    isSaved={!!saved[i]}
                    onSave={() => toggleSave(i)}
                  />
                ))}

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// NEWS CARD
// ─────────────────────────────────────────────

function NewsCard({
  article,
  isSaved,
  onSave,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500 hover:scale-[1.02] transition duration-300 shadow-xl flex flex-col">

      {/* IMAGE */}

      <div className="relative h-48 overflow-hidden">

        <img
          src={article.urlToImage}
          alt="news"
          className="w-full h-full object-cover"
        />

        <CategoryBadge
          category={article.category}
          className="absolute top-3 left-3"
        />

        {/* SAVE */}

        <button
          onClick={onSave}
          className="absolute top-3 right-3 w-8 h-8 bg-slate-900/80 rounded-full flex items-center justify-center"
        >
          {isSaved ? (
            <FaBookmark
              className="text-cyan-400"
              size={13}
            />
          ) : (
            <FaRegBookmark
              className="text-slate-400"
              size={13}
            />
          )}
        </button>
      </div>

      {/* CONTENT */}

      <div className="p-5 flex flex-col flex-1 gap-3">

        <div className="flex items-center justify-between text-xs text-slate-500">

          <div className="flex items-center gap-2">
            <FaGlobe
              className="text-cyan-400"
              size={11}
            />

            <span className="text-cyan-400 font-semibold">
              {article.source?.name}
            </span>
          </div>

          <div className="flex items-center gap-3">

            <span className="flex items-center gap-1">
              <FaRegClock size={10} />
              {article.readTime} min
            </span>

            <span className="flex items-center gap-1">
              <FaCalendarAlt size={10} />
              {timeAgo(article.publishedAt)}
            </span>

          </div>
        </div>

        <h2 className="text-base font-bold leading-snug line-clamp-2">
          {article.title}
        </h2>

        <div>
          <p
            className={`text-slate-400 text-sm leading-relaxed ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {article.description}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-cyan-400 text-xs mt-1 flex items-center gap-1"
          >
            {expanded ? "Show less" : "Read more"}

            <FaChevronDown
              size={10}
              className={`transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex items-center gap-1 text-xs text-slate-500">
          <FaEye size={11} />
          {article.views.toLocaleString()} views
        </div>

        {/* BUTTONS */}

        <div className="flex gap-3 mt-auto pt-2">

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-2.5 rounded-xl text-center text-sm font-semibold transition flex items-center justify-center gap-2"
          >
            Read Full News
            <FaExternalLinkAlt size={11} />
          </a>

          <button
            onClick={() =>
              navigator.share?.({
                title: article.title,
                url: article.url,
              })
            }
            className="w-11 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center"
          >
            <FaShare
              size={13}
              className="text-slate-400"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CATEGORY BADGE
// ─────────────────────────────────────────────

function CategoryBadge({
  category,
  className = "",
}) {
  const colors =
    CATEGORY_COLORS[category] ||
    CATEGORY_COLORS["General"];

  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-semibold border ${className}`}
      style={{
        background: colors.bg,
        color: colors.text,
        borderColor: colors.border,
      }}
    >
      {category}
    </span>
  );
}

export default News;