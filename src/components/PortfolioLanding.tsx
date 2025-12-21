// src/components/PortfolioLanding.tsx
import React, { useEffect, useRef, useState } from "react";
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
import darkProfile from "../img/dark.png";
import lightProfile from "../img/light.png";

type BusinessCardProps = { isDark: boolean };

function BusinessCard({ isDark }: BusinessCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full max-w-[400px]" style={{ perspective: "1000px" }}>
      <div
        className="
          relative h-64 w-full cursor-pointer rounded-2xl
          shadow-[0_0_40px_rgba(255,255,255,0.25)]
          transform-3d
          transition-transform duration-700
        "
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        onClick={() => setIsFlipped((p) => !p)}
      >
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 p-5 sm:p-6 flex flex-col justify-between backface-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-3xl border-2 border-white/40 shadow-md">
              <img
                src={isDark ? darkProfile : lightProfile}
                alt="Dave Lacson"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight text-white">
              <p className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.18em] text-white/70">
                Portfolio Card
              </p>
              <p className="text-sm font-semibold">Dave Lacson</p>
            </div>
          </div>

          <div className="text-white">
            <h1 className="mb-1 text-base sm:text-lg font-semibold">
              Graphic Designer &amp; Frontend
            </h1>
            <p className="text-white/80 text-[0.7rem] sm:text-xs">
              Clean visuals, thoughtful UI, and modern web experiences.
            </p>
          </div>

          <div className="flex justify-end">
            <div className="text-[0.65rem] sm:text-[0.7rem] text-white/70">
              Tap to reveal contact details
            </div>
          </div>
        </div>

        <div className="inset-0 rounded-2xl bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 px-5 sm:px-6 py-7 sm:py-9 flex flex-col justify-between backface-hidden transform-[rotateY(180deg)] relative">
          <div>
            <h2 className="text-slate-50 mb-4 text-base font-semibold">Contact Information</h2>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-200">
                <Mail className="w-5 h-5 text-sky-400" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=dave.lacson@lccbonline.edu.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  dave.lacson@lccbonline.edu.ph
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <Phone className="w-5 h-5 text-sky-400" />
                <span>63+ 968 708 1809</span>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span>Bacolod City, Granada</span>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-slate-700 pt-4 flex justify-end">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-4 h-9 text-xs font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          <div className="absolute -bottom-7 left-6 flex gap-3">
            <a
              href="https://github.com/idclla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </a>

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
        </div>
      </div>
    </div>
  );
}

type Project = {
  title: string;
  description: string;
  tech: string[];
  figmaEmbedUrl?: string;
};

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
    figmaEmbedUrl: "https://embed.figma.com/design/dRuljizwr5tZXK2k0feG8l/UI-UX?node-id=0-1&embed-host=share",
  },
  {
    title: "Project Three",
    description:
      "BLAZR is a bold hiking brand identity that mixes sharp, mountain-inspired shapes with a clean modern wordmark. Built to sit well on patches, apparel, and digital platforms.",
    tech: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    figmaEmbedUrl: "https://embed.figma.com/design/arQRAjklRGn2pzfBqPZWNf/PAKITA-BWAS?node-id=0-1&embed-host=share",
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

const graphicImages = [dnaImage, y2kImage, cykaImage, starImage, paintImage, QuatreImage];

type ImgMeta = { w: number; h: number; ratio: number };

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function useReveal<T extends HTMLElement>(opts?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: opts?.threshold ?? 0.15,
        rootMargin: opts?.rootMargin ?? "0px 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shown, opts?.threshold, opts?.rootMargin]);

  return { ref, shown };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[
        className,
        "transition-all duration-700 ease-out will-change-transform",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function PortfolioLanding() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const [isGraphicModalOpen, setIsGraphicModalOpen] = useState(false);
  const [modalGraphicIndex, setModalGraphicIndex] = useState(0);

  const [graphicMeta, setGraphicMeta] = useState<Record<number, ImgMeta>>({});
  const [graphicOrder] = useState<number[]>(() =>
    shuffle(Array.from({ length: graphicImages.length }, (_, i) => i))
  );

  const stripRef = useRef<HTMLDivElement | null>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const didDragRef = useRef(false);

  const activeProject = projects[activeProjectIndex];

  const nextProject = () => setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const openGraphicModal = (index: number) => {
    setModalGraphicIndex(index);
    setIsGraphicModalOpen(true);
  };

  const closeGraphicModal = () => setIsGraphicModalOpen(false);

  const nextGraphicInModal = () => setModalGraphicIndex((prev) => (prev + 1) % graphicImages.length);

  const prevGraphicInModal = () => setModalGraphicIndex((prev) => (prev - 1 + graphicImages.length) % graphicImages.length);

  const setGraphicSize = (index: number, w: number, h: number) => {
    setGraphicMeta((prev) => {
      if (prev[index]) return prev;
      return { ...prev, [index]: { w, h, ratio: w / h } };
    });
  };

  const bentoSpanClass = (imgIndex: number) => {
    const meta = graphicMeta[imgIndex];
    if (!meta) return "col-span-2 row-span-1";
    const r = meta.ratio;

    if (r >= 2.4) return "col-span-5 row-span-1";
    if (r >= 1.85) return "col-span-4 row-span-1";
    if (r >= 1.35) return "col-span-3 row-span-1";
    if (r <= 0.65) return "col-span-3 row-span-2";
    if (r <= 0.85) return "col-span-2 row-span-2";
    return "col-span-2 row-span-1";
  };

  const scrollGraphics = (dir: "left" | "right") => {
    const el = stripRef.current;
    if (!el) return;
    const delta = Math.max(420, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  };

  const onStripPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = stripRef.current;
    if (!el) return;

    isDownRef.current = true;
    didDragRef.current = false;
    startXRef.current = e.clientX;
    startScrollLeftRef.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onStripPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDownRef.current) return;
    const el = stripRef.current;
    if (!el) return;

    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 6) didDragRef.current = true;
    el.scrollLeft = startScrollLeftRef.current - dx;
  };

  const onStripPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = stripRef.current;
    if (!el) return;

    isDownRef.current = false;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {}
  };

  useEffect(() => {
    if (!isGraphicModalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsGraphicModalOpen(false);
      if (e.key === "ArrowLeft") prevGraphicInModal();
      if (e.key === "ArrowRight") nextGraphicInModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isGraphicModalOpen]);

  return (
    <div
      className={`min-h-screen w-full flex items-stretch md:items-center justify-center px-3 sm:px-4 py-6 sm:py-10 font-[Poppins,sans-serif] transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"
      }`}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div
        className={`w-full max-w-6xl overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors duration-300 ${
          isDark
            ? "border-slate-800/80 bg-slate-900/80 shadow-[0_0_80px_rgba(56,189,248,0.35)]"
            : "border-slate-200 bg-white shadow-[0_0_40px_rgba(148,163,184,0.45)]"
        }`}
      >
        <header
          className={`sticky top-0 z-20 border-b backdrop-blur px-4 sm:px-6 md:px-10 py-3 sm:py-4 transition-colors duration-300 ${
            isDark ? "border-slate-800/70 bg-slate-900/90" : "border-slate-200 bg-white/80"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div
                className={`h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-3xl border-2 transition-colors duration-300 shadow-lg ${
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
                  className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                    isDark ? "text-slate-50" : "text-slate-900"
                  }`}
                >
                  Dave Lacson
                </span>
                <span
                  className={`text-xs sm:text-sm transition-colors duration-300 ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Graphic Designer & Frontend
                </span>
              </div>
            </div>

            <nav
              className={`hidden md:flex gap-7 text-[0.9rem] transition-colors duration-300 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              <a href="#about" className="hover:text-sky-500 transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-sky-500 transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-sky-500 transition-colors">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 ml-auto md:ml-0">
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
                className={`inline-flex items-center gap-2 rounded-full border px-3 sm:px-4 py-2 text-[0.7rem] sm:text-xs font-medium transition-colors duration-300 ${
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

        <main className="px-4 sm:px-6 md:px-10 pb-10 sm:pb-12 md:pb-16 pt-6 sm:pt-8 md:pt-12 transition-colors duration-300">
          <Reveal>
            <section className="flex flex-col items-start gap-8 md:gap-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p
                  className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isDark ? "bg-slate-900/70 text-sky-400" : "bg-sky-50 text-sky-600"
                  }`}
                >
                  <Code2 className="h-3 w-3" />
                  Portfolio
                </p>

                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight transition-colors duration-300 ${
                    isDark ? "text-slate-50" : "text-slate-900"
                  }`}
                >
                  Hi, I’m <span className="text-sky-500">Dave Lacson</span>. <br />
                  I design &amp; build digital experiences.
                </h1>

                <p
                  className={`mt-4 sm:mt-5 text-sm md:text-base transition-colors duration-300 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  I’m focused on <span className="font-medium">graphic design</span>,{" "}
                  <span className="font-medium">frontend development</span>, and{" "}
                  <span className="font-medium">UI/UX</span>—often working with{" "}
                  <span className="font-medium">Photoshop</span> and{" "}
                  <span className="font-medium">Adobe Illustrator</span> to turn ideas into clean,
                  modern layouts for web and mobile.
                </p>

                <div className="mt-6 sm:mt-7 flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
                  >
                    <FolderGit2 className="h-4 w-4" />
                    View Projects
                  </a>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dave.lacson@lccbonline.edu.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium transition-colors duration-300 ${
                      isDark
                        ? "border-slate-700 text-slate-100 hover:border-sky-500 hover:text-sky-400"
                        : "border-slate-300 text-slate-800 hover:border-sky-400 hover:text-sky-500"
                    }`}
                  >
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                </div>

                <div className="mt-6 sm:mt-7 flex flex-wrap gap-2 text-[0.7rem]">
                  <span
                    className={`rounded-full border px-3 py-1 transition-colors duration-300 ${
                      isDark ? "border-slate-700 text-slate-400" : "border-slate-300 text-slate-600"
                    }`}
                  >
                    Frontend &amp; React
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 transition-colors duration-300 ${
                      isDark ? "border-slate-700 text-slate-400" : "border-slate-300 text-slate-600"
                    }`}
                  >
                    UI/UX &amp; Prototyping
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 transition-colors duration-300 ${
                      isDark ? "border-slate-700 text-slate-400" : "border-slate-300 text-slate-600"
                    }`}
                  >
                    Photoshop &amp; Illustrator
                  </span>
                </div>
              </div>

              <div className="mt-4 w-full max-w-sm md:mt-0">
                <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-linear-to-br from-sky-500/20 via-slate-900 to-slate-900 p-5 sm:p-6 shadow-xl">
                  <div className="mb-3 sm:mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Currently
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100">
                    Designing <span className="text-sky-400">interfaces &amp; graphics</span>,
                    polishing <span className="text-sky-400">UI/UX flows</span>, and experimenting
                    with <span className="text-sky-400">frontend builds</span> using modern tools.
                  </p>
                  <div className="mt-4 sm:mt-5 h-px w-full bg-linear-to-r from-transparent via-slate-600 to-transparent" />
                  <p className="mt-3 sm:mt-4 text-[0.7rem] sm:text-xs text-slate-300">
                    Open to graphic design work, frontend collabs, and capstone projects.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={80}>
            <section id="about" className="mt-14 sm:mt-16 md:mt-20">
              <h2
                className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
                  isDark ? "text-slate-50" : "text-slate-900"
                }`}
              >
                About
              </h2>
              <p
                className={`mt-3 sm:mt-4 max-w-2xl text-sm md:text-base transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                I focus on blending <span className="font-medium">graphic design</span> and{" "}
                <span className="font-medium">frontend development</span> to create clean, usable
                interfaces. I enjoy crafting layouts, picking colors and type, and then bringing
                everything to life in code. Tools I often use include React, Tailwind, Photoshop,
                and Adobe Illustrator.
              </p>
            </section>
          </Reveal>

          <Reveal delay={120}>
            <section id="projects" className="mt-14 sm:mt-16 md:mt-20">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2
                  className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
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

              <div className="mt-6 sm:mt-7 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5 shadow-md shadow-slate-950/60 transition-colors duration-300">
                <article className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-100">
                      {activeProject.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300">{activeProject.description}</p>

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

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
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

              <div className="mt-8 sm:mt-10">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
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
                      {graphicImages.length} pieces · double-click to view
                    </span>

                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => scrollGraphics("left")}
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
                        onClick={() => scrollGraphics("right")}
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

                <div className="relative">
                  <div
                    ref={stripRef}
                    onPointerDown={onStripPointerDown}
                    onPointerMove={onStripPointerMove}
                    onPointerUp={onStripPointerUp}
                    onPointerCancel={onStripPointerUp}
                    className={`no-scrollbar relative overflow-x-auto overscroll-x-contain touch-pan-y select-none rounded-2xl border transition-colors duration-300 ${
                      isDark ? "border-slate-800 bg-slate-900/40" : "border-slate-200 bg-white/60"
                    }`}
                    style={{ WebkitOverflowScrolling: "touch" }}
                  >
                    <div className="px-3 py-4 sm:px-4 sm:py-5">
                      <div
                        className="grid grid-flow-col-dense gap-4 snap-x snap-mandatory"
                        style={{
                          gridAutoColumns: "clamp(190px, 24vw, 280px)",
                          gridTemplateRows: "repeat(2, clamp(210px, 22vw, 310px))",
                        }}
                      >
                        {graphicOrder.map((imgIndex) => {
                          const img = graphicImages[imgIndex];
                          const meta = graphicMeta[imgIndex];
                          const aspect = meta ? `${meta.w} / ${meta.h}` : "1 / 1";

                          return (
                            <button
                              key={imgIndex}
                              type="button"
                              onClick={() => {
                                if (didDragRef.current) return;
                              }}
                              onDoubleClick={(e) => {
                                if (didDragRef.current) return;
                                if (e.detail < 2) return;
                                openGraphicModal(imgIndex);
                              }}
                              className={`${bentoSpanClass(
                                imgIndex
                              )} snap-start group relative h-full w-full overflow-hidden rounded-2xl border focus:outline-none focus:ring-2 focus:ring-sky-500/70 transition-colors duration-300 ${
                                isDark ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white"
                              }`}
                              style={{ aspectRatio: aspect }}
                            >
                              <img
                                src={img}
                                alt={`Graphic design ${imgIndex + 1}`}
                                loading="lazy"
                                onLoad={(e) => {
                                  const el = e.currentTarget;
                                  setGraphicSize(imgIndex, el.naturalWidth, el.naturalHeight);
                                }}
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                                draggable={false}
                              />

                              <div
                                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                                  isDark
                                    ? "bg-linear-to-b from-black/10 via-black/25 to-black/55"
                                    : "bg-linear-to-b from-black/5 via-black/15 to-black/45"
                                }`}
                              />

                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span
                                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                                    isDark ? "bg-slate-950/80 text-slate-100" : "bg-white/90 text-slate-800"
                                  }`}
                                >
                                  Double-click to view
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-14 ${
                      isDark
                        ? "bg-linear-to-r from-slate-900/90 to-transparent"
                        : "bg-linear-to-r from-white/90 to-transparent"
                    }`}
                  />
                  <div
                    className={`pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-14 ${
                      isDark
                        ? "bg-linear-to-l from-slate-900/90 to-transparent"
                        : "bg-linear-to-l from-white/90 to-transparent"
                    }`}
                  />
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={160}>
            <section id="contact" className="mt-14 sm:mt-16 md:mt-20">
              <h2
                className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
                  isDark ? "text-slate-50" : "text-slate-900"
                }`}
              >
                Contact
              </h2>
              <p
                className={`mt-3 sm:mt-4 max-w-xl text-sm md:text-base transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Tap the business card below to flip it and reveal my contact details and social links.
              </p>

              <div className="mt-6 sm:mt-8 flex justify-start">
                <BusinessCard isDark={isDark} />
              </div>
            </section>
          </Reveal>

          <Reveal delay={200}>
            <footer
              className={`mt-14 sm:mt-16 md:mt-20 border-t pt-4 sm:pt-5 text-[0.7rem] sm:text-xs transition-colors duration-300 ${
                isDark ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-400"
              }`}
            >
              © {new Date().getFullYear()} Dave Lacson. Built with Vite + React + Tailwind.
            </footer>
          </Reveal>
        </main>
      </div>

      {isGraphicModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3 sm:px-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeGraphicModal();
          }}
        >
          <div className="relative w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-3">
              <img
                src={graphicImages[modalGraphicIndex]}
                alt={`Graphic design ${modalGraphicIndex + 1}`}
                className="h-auto w-full max-h-[84vh] object-contain"
              />

              <button
                type="button"
                onClick={closeGraphicModal}
                className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200 hover:bg-slate-800"
              >
                Close
              </button>

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
