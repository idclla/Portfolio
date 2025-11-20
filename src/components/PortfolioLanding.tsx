// src/components/PortfolioLanding.tsx
import { useState } from "react";
import {
  Code2,
  Mail,
  Github,
  Instagram,
  FolderGit2,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";

import starImage from "../img/star.png";
import paintImage from "../img/paint.jpg";
import QuatreImage from "../img/Quatrefoil knot.png";
import y2kImage from "../img/y2k.jpg";
import cykaImage from "../img/cyka.jpg";
import dnaImage from "../img/dna.jpg";
// 🔥 theme-specific profile pics
import darkProfile from "../img/dark.png";
import lightProfile from "../img/light.png";

/* ---------- Flip Business Card (Contact) ---------- */
function BusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center">
      {/* Perspective wrapper */}
      <div
        className="relative w-full max-w-[400px] h-[240px] cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setIsFlipped((p) => !p)}
      >
        {/* Rotating card */}
        <div
          className="absolute inset-0 rounded-2xl shadow-2xl overflow-visible"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.7s",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT – gradient card (like your first image) */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 flex flex-col justify-between"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              {/* Square logo */}
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg shadow-sm" />
              </div>
            </div>

            <div className="text-white">
              <h1 className="mb-1 text-lg font-semibold">Dave Lacson</h1>
              <p className="text-white/90 mb-1 text-sm">
                Graphic Designer & Frontend
              </p>
              <p className="text-white/70 text-xs">Portfolio & Freelance Work</p>
            </div>

            <div className="flex justify-end">
              <div className="text-[0.75rem] text-white/70">
                Click to reveal details
              </div>
            </div>
          </div>

          {/* BACK – white contact card (like second image) */}
          <div
            className="absolute inset-0 rounded-2xl bg-slate-950 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Inner white card */}
            <div className="relative w-[88%] rounded-2xl bg-white px-8 py-7 shadow-lg">
              <div>
                <h2 className="text-slate-900 mb-6 text-base font-semibold">
                  Contact Information
                </h2>

                <div className="space-y-4 text-sm">
                  {/* Email */}
                  <div className="flex items-center gap-3 text-slate-700">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a
                      href="mailto:dave.lacson@lccbonline.edu.ph"
                      className="hover:text-blue-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      dave.lacson@lccbonline.edu.ph
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>###########</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Bacolod City, Granada</span>
                  </div>
                </div>
              </div>

              {/* Divider line like in the screenshot */}
              <div className="mt-5 border-t border-slate-200" />

              {/* Floating socials + resume */}
              <div className="absolute -bottom-6 left-8 flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/idclla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/lacson_street/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              {/* Resume pill */}
              <div className="pt-4 mt-2 flex justify-end">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 h-9 text-xs font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Types ---------- */
type Project = {
  title: string;
  description: string;
  tech: string[];
  figmaEmbedUrl?: string;
};

/* ---------- Projects Data (with Figma previews) ---------- */
const projects: Project[] = [
  {
    title: "Project One",
    description:
      "Coffee Bean POS is an all-in-one point-of-sale system designed specifically for coffee shops. It streamlines everything from order taking to inventory, so baristas can focus on making great coffee instead of fighting with tools. With real-time storage detection and drink customization, it keeps orders fast, accurate, and flexible.",
    tech: ["Figma", "UI/UX"],
    figmaEmbedUrl:
      "https://embed.figma.com/design/T7nioN2a5NKXyJLPCbNRSS/COFFEE-SHOP-POS?node-id=0-1&embed-host=share",
  },
  {
    title: "Project Two",
    description:
      "Terranova is an online hiking equipment store for people who feel most alive on the trail. From backpacks to outerwear, the UI is built to feel clean, trustworthy, and easy to explore—even with a large catalog of gear.",
    tech: ["Figma", "UI/UX"],
    figmaEmbedUrl:
      "https://embed.figma.com/design/dRuljizwr5tZXK2k0feG8l/UI-UX?node-id=0-1&embed-host=share",
  },
  {
    title: "Project Three",
    description:
      "BLAZR is a bold hiking brand identity that mixes sharp, mountain-inspired shapes with a clean modern wordmark. Built to sit well on patches, apparel, and digital platforms.",
    tech: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    figmaEmbedUrl:
      "https://embed.figma.com/design/arQRAjklRGn2pzfBqPZWNf/PAKITA-BWAS?node-id=0-1&embed-host=share",
  },
  {
    title: "Project Four",
    description:
      "Audio Player UI concept with interactive prototype, focusing on minimal controls, clear hierarchy, and smooth micro-interactions.",
    tech: ["Figma", "UI/UX"],
    figmaEmbedUrl:
      "https://embed.figma.com/design/7J6PvAU4CUORi9Vkali9J7/Audio-Player?node-id=0-1&embed-host=share",
  },
];

// 6 graphic slots
const graphicImages = [
  dnaImage,
  y2kImage,
  cykaImage,
  starImage,
  paintImage,
  QuatreImage,
];

export default function PortfolioLanding() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const [isGraphicModalOpen, setIsGraphicModalOpen] = useState(false);
  const [modalGraphicIndex, setModalGraphicIndex] = useState(0);

  const [graphicStartIndex, setGraphicStartIndex] = useState(0);

  const activeProject = projects[activeProjectIndex];

  const nextProject = () =>
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setActiveProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );

  const openGraphicModal = (index: number) => {
    setModalGraphicIndex(index);
    setIsGraphicModalOpen(true);
  };

  const closeGraphicModal = () => setIsGraphicModalOpen(false);

  const nextGraphicInModal = () =>
    setModalGraphicIndex((prev) => (prev + 1) % graphicImages.length);

  const prevGraphicInModal = () =>
    setModalGraphicIndex(
      (prev) => (prev - 1 + graphicImages.length) % graphicImages.length
    );

  const nextGraphicRow = () =>
    setGraphicStartIndex((prev) => (prev + 3) % graphicImages.length);

  const prevGraphicRow = () =>
    setGraphicStartIndex(
      (prev) => (prev - 3 + graphicImages.length) % graphicImages.length
    );

  const visibleGraphicIndices = [0, 1, 2].map(
    (offset) => (graphicStartIndex + offset) % graphicImages.length
  );

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-10 font-[Poppins,sans-serif] transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* Outer glowing card */}
      <div
        className={`w-full max-w-6xl overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors duration-300 ${
          isDark
            ? "border-slate-800/80 bg-slate-900/80 shadow-[0_0_80px_rgba(56,189,248,0.35)]"
            : "border-slate-200 bg-white shadow-[0_0_40px_rgba(148,163,184,0.45)]"
        }`}
      >
        {/* Navbar */}
        <header
          className={`sticky top-0 z-20 border-b backdrop-blur px-6 py-4 md:px-10 transition-colors duration-300 ${
            isDark
              ? "border-slate-800/70 bg-slate-900/90"
              : "border-slate-200 bg-white/80"
          }`}
        >
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* profile */}
              <div
                className={`h-20 w-20 overflow-hidden rounded-3xl border-2 transition-colors duration-300 shadow-lg ${
                  isDark
                    ? "border-sky-500/60 bg-slate-900 shadow-[0_0_22px_rgba(56,189,248,0.55)]"
                    : "border-slate-300 bg-white shadow-[0_0_18px_rgba(148,163,184,0.35)]"
                }`}
              >
                <img
                  src={isDark ? darkProfile : lightProfile}
                  alt="Dave Lacson"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isDark ? "text-slate-50" : "text-slate-900"
                  }`}
                >
                  Dave Lacson
                </span>
                <span
                  className={`text-xs transition-colors duration-300 ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Graphic Designer & Frontend
                </span>
              </div>
            </div>

            <nav
              className={`hidden gap-7 text-[0.9rem] md:flex transition-colors duration-300 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              <a href="#about" className="hover:text-sky-500 transition-colors">
                About
              </a>
              <a
                href="#projects"
                className="hover:text-sky-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-sky-500 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.7rem] font-medium transition-colors duration-300 ${
                  isDark
                    ? "border-slate-700/70 bg-slate-900/70 text-slate-200 hover:border-sky-500 hover:text-sky-400"
                    : "border-slate-300 bg-white/70 text-slate-700 hover:border-sky-400 hover:text-sky-500"
                }`}
              >
                {isDark ? (
                  <>
                    <Sun className="h-3.5 w-3.5" />
                    <span>Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5" />
                    <span>Dark</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-300 ${
                  isDark
                    ? "border-slate-700 bg-slate-900 text-slate-100 hover:border-sky-500 hover:text-sky-400"
                    : "border-slate-300 bg-white text-slate-800 hover:border-sky-400 hover:text-sky-500"
                }`}
              >
                <Mail className="h-4 w-4" />
                Say Hello
              </a>
            </div>
          </div>
        </header>

        <main className="px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-12 transition-colors duration-300">
          {/* Hero */}
          <section className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p
                className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isDark ? "bg-slate-900/70 text-sky-400" : "bg-sky-50 text-sky-600"
                }`}
              >
                <Code2 className="h-3 w-3" />
                Portfolio
              </p>
              <h1
                className={`text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl transition-colors duration-300 ${
                  isDark ? "text-slate-50" : "text-slate-900"
                }`}
              >
                Hi, I’m <span className="text-sky-500">Dave Lacson</span>. <br />
                I design & build digital experiences.
              </h1>
              <p
                className={`mt-5 text-sm md:text-base transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                I’m focused on <span className="font-medium">graphic design</span>,{" "}
                <span className="font-medium">frontend development</span>, and{" "}
                <span className="font-medium">UI/UX</span>—often working with{" "}
                <span className="font-medium">Photoshop</span> and{" "}
                <span className="font-medium">Adobe Illustrator</span> to turn ideas
                into clean, modern layouts for web and mobile.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
                >
                  <FolderGit2 className="h-4 w-4" />
                  View Projects
                </a>

                {/* Contact Me button */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=dave.lacson@lccbonline.edu.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 text-sm font-medium transition-colors duration-300 ${
                    isDark
                      ? "border-slate-700 text-slate-100 hover:border-sky-500 hover:text-sky-400"
                      : "border-slate-300 text-slate-800 hover:border-sky-400 hover:text-sky-500"
                  }`}
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 text-[0.7rem]">
                <span
                  className={`rounded-full border px-3 py-1 transition-colors duration-300 ${
                    isDark
                      ? "border-slate-700 text-slate-400"
                      : "border-slate-300 text-slate-600"
                  }`}
                >
                  Frontend & React
                </span>
                <span
                  className={`rounded-full border px-3 py-1 transition-colors duration-300 ${
                    isDark
                      ? "border-slate-700 text-slate-400"
                      : "border-slate-300 text-slate-600"
                  }`}
                >
                  UI/UX & Prototyping
                </span>
                <span
                  className={`rounded-full border px-3 py-1 transition-colors duration-300 ${
                    isDark
                      ? "border-slate-700 text-slate-400"
                      : "border-slate-300 text-slate-600"
                  }`}
                >
                  Photoshop & Illustrator
                </span>
              </div>
            </div>

            {/* Side card */}
            <div className="mt-4 w-full max-w-sm md:mt-0">
              <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-linear-to-br from-sky-500/20 via-slate-900 to-slate-900 p-6 shadow-xl">
                <div className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Currently
                </div>
                <p className="text-sm text-slate-100">
                  Designing{" "}
                  <span className="text-sky-400">interfaces & graphics</span>, polishing{" "}
                  <span className="text-sky-400">UI/UX flows</span>, and experimenting
                  with <span className="text-sky-400">frontend builds</span> using modern
                  tools.
                </p>
                <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-slate-600 to-transparent" />
                <p className="mt-4 text-xs text-slate-300">
                  Open to graphic design work, frontend collabs, and capstone projects.
                </p>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mt-16 md:mt-20">
            <h2
              className={`text-2xl font-semibold transition-colors duration-300 ${
                isDark ? "text-slate-50" : "text-slate-900"
              }`}
            >
              About
            </h2>
            <p
              className={`mt-4 max-w-2xl text-sm md:text-base transition-colors duration-300 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I focus on blending <span className="font-medium">graphic design</span> and{" "}
              <span className="font-medium">frontend development</span> to create clean,
              usable interfaces. I enjoy crafting layouts, picking colors and type, and
              then bringing everything to life in code. Tools I often use include React,
              Tailwind, Photoshop, and Adobe Illustrator.
            </p>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-16 md:mt-20">
            <div className="flex items-center justify-between gap-2">
              <h2
                className={`text-2xl font-semibold transition-colors duration-300 ${
                  isDark ? "text-slate-50" : "text-slate-900"
                }`}
              >
                Projects
              </h2>
              <span
                className={`text-xs transition-colors duration-300 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Selected work · {projects.length} items
              </span>
            </div>

            {/* Project card with Figma preview */}
            <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-md shadow-slate-950/60 transition-colors duration-300">
              <article className="flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    {activeProject.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-300">
                    {activeProject.description}
                  </p>

                  {activeProject.figmaEmbedUrl && (
                    <div className="mt-4">
                      <p className="mb-2 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                        Figma Preview
                      </p>
                      <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                        <iframe
                          src={activeProject.figmaEmbedUrl}
                          className="h-full w-full border-0"
                          allowFullScreen
                          loading="lazy"
                          title={`${activeProject.title} – Figma preview`}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-800 px-2.5 py-1 text-[0.65rem] uppercase tracking-wide text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>

              {/* Project carousel controls */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevProject}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-200 hover:border-sky-500 hover:text-sky-400"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextProject}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-200 hover:border-sky-500 hover:text-sky-400"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveProjectIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                        idx === activeProjectIndex ? "bg-sky-400" : "bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Graphic design grid */}
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center rounded-full px-2.5 py-1 transition-colors duration-300 ${
                      isDark ? "bg-slate-900" : "bg-slate-100"
                    }`}
                  >
                    <ImageIcon className="h-3.5 w-3.5 text-sky-400" />
                  </span>
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      isDark ? "text-slate-50" : "text-slate-900"
                    }`}
                  >
                    Graphic Design
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs transition-colors duration-300 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {graphicImages.length} pieces · replace with your artworks
                  </span>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={prevGraphicRow}
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm transition-colors duration-300 ${
                        isDark
                          ? "border-slate-700 text-slate-200 hover:border-sky-500 hover:text-sky-400"
                          : "border-slate-300 text-slate-700 hover:border-sky-400 hover:text-sky-500"
                      }`}
                    >
                      <ChevronLeft className="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      onClick={nextGraphicRow}
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm transition-colors duration-300 ${
                        isDark
                          ? "border-slate-700 text-slate-200 hover:border-sky-500 hover:text-sky-400"
                          : "border-slate-300 text-slate-700 hover:border-sky-400 hover:text-sky-500"
                      }`}
                    >
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {visibleGraphicIndices.map((imgIndex) => {
                  const img = graphicImages[imgIndex];
                  return (
                    <button
                      key={imgIndex}
                      type="button"
                      onClick={() => openGraphicModal(imgIndex)}
                      className={`group relative aspect-square w-full overflow-hidden rounded-2xl border focus:outline-none focus:ring-2 focus:ring-sky-500/70 transition-colors duration-300 ${
                        isDark
                          ? "border-slate-800 bg-slate-900/80"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Graphic design ${imgIndex + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            isDark
                              ? "bg-slate-950/80 text-slate-100"
                              : "bg-white/90 text-slate-800"
                          }`}
                        >
                          View design
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-16 md:mt-20">
            <h2
              className={`text-2xl font-semibold transition-colors duration-300 ${
                isDark ? "text-slate-50" : "text-slate-900"
              }`}
            >
              Contact
            </h2>
            <p
              className={`mt-4 max-w-xl text-sm md:text-base transition-colors duration-300 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Click the business card below to flip it and reveal my contact details and
              social links.
            </p>

            <div className="mt-8">
              <BusinessCard />
            </div>
          </section>

          {/* Footer */}
          <footer
            className={`mt-16 border-t pt-5 text-xs md:mt-20 transition-colors duration-300 ${
              isDark
                ? "border-slate-800 text-slate-500"
                : "border-slate-200 text-slate-400"
            }`}
          >
            © {new Date().getFullYear()} Dave Lacson. Built with Vite + React + Tailwind.
          </footer>
        </main>
      </div>

      {/* Graphic modal (carousel) */}
      {isGraphicModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-3">
              <img
                src={graphicImages[modalGraphicIndex]}
                alt={`Graphic design ${modalGraphicIndex + 1}`}
                className="h-auto w-full max-h-[80vh] object-contain"
              />

              {/* Close button */}
              <button
                type="button"
                onClick={closeGraphicModal}
                className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200 hover:bg-slate-800"
              >
                Close
              </button>

              {/* Left / right controls */}
              <button
                type="button"
                onClick={prevGraphicInModal}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextGraphicInModal}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Dots under modal */}
            <div className="mt-3 flex justify-center gap-1.5">
              {graphicImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setModalGraphicIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                    idx === modalGraphicIndex ? "bg-sky-400" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
