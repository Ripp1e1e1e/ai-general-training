import TipCard from "../ui/TipCard";
import KeyTakeaway from "../ui/KeyTakeaway";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 training-gradient opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
          <span>🎓</span>
          企业内训课程
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
          AI 通识培训
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-600 mt-4 max-w-2xl mx-auto">
          让每个人都能理解和使用 AI
        </p>

        <p className="text-base text-zinc-500 mt-6 max-w-2xl mx-auto leading-relaxed">
          AI 正在改变我们的工作方式。本课程将帮助你从零开始了解 AI 的基本概念，
          学会如何有效地与 AI 协作，让你的日常工作更高效、更出色。
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#ch1"
            className="px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            开始学习 →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20">
          {[
            { icon: "🧠", title: "理解AI基础", desc: "Token、上下文、成本概念" },
            { icon: "✍️", title: "提示词技巧", desc: "写出有效的指令" },
            { icon: "🔧", title: "拓展能力", desc: "工具与插件生态" },
            { icon: "🤝", title: "协作调试", desc: "高效迭代与问题排查" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-3 text-2xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-zinc-800 text-sm">{item.title}</h3>
              <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
