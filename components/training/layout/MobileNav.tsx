"use client";

const sections = ["ch1", "ch2", "ch3", "ch4"];

export default function MobileNav() {
  const handleNext = () => {
    const currentScrollY = window.scrollY;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop > currentScrollY + 100) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-40">
      <button
        onClick={handleNext}
        className="w-12 h-12 rounded-full training-gradient text-white shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all active:scale-95"
        aria-label="下一章节"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  );
}
