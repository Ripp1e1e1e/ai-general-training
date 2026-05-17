"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "欢迎" },
  { id: "ch1", label: "第1章 AI基础" },
  { id: "ch2", label: "第2章 提示词技巧" },
  { id: "ch3", label: "第3章 拓展AI能力" },
  { id: "ch4", label: "第4章 高效协作与调试" },
  { id: "cheatsheet", label: "速查表" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const currentIndex = sections.findIndex((s) => s.id === activeSection);
  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg training-gradient flex items-center justify-center text-white text-sm font-bold">AI</div>
            <span className="font-semibold text-zinc-900 hidden sm:inline">AI 通识培训</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  activeSection === s.id
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-zinc-600 hover:bg-zinc-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="h-0.5 bg-zinc-100 rounded-full -mx-4 sm:-mx-6 lg:-mx-8">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === s.id
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
