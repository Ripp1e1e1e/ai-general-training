"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "欢迎", icon: "🏠" },
  { id: "ch1", label: "第1章 理解AI基础", icon: "🧠" },
  { id: "ch2", label: "第2章 写出有效的提示词", icon: "✍️" },
  { id: "ch3", label: "第3章 拓展AI能力", icon: "🔧" },
  { id: "ch4", label: "第4章 高效协作与调试", icon: "🤝" },
  { id: "cheatsheet", label: "速查表", icon: "📋" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

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
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <nav className="sticky top-24 space-y-1 pr-4">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
              activeSection === s.id
                ? "bg-blue-50 text-blue-700 font-medium shadow-sm border-l-2 border-blue-500"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 border-l-2 border-transparent"
            }`}
          >
            <span className="mr-2">{s.icon}</span>
            {s.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
