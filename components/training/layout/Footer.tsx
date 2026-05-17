export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-md training-gradient flex items-center justify-center text-white text-xs font-bold">
            AI
          </div>
          <span className="font-semibold text-zinc-700">AI 通识培训</span>
        </div>
        <p className="text-sm text-zinc-500">
          让每个人都能理解和使用 AI，提升工作效率与创造力
        </p>
        <p className="text-xs text-zinc-400 mt-4">
          内容基于 DataWhaleChina Vibe Vibe 教程整理
        </p>
      </div>
    </footer>
  );
}
