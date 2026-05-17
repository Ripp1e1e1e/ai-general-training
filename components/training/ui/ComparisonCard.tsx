"use client";

import { useState } from "react";

interface ComparisonItem {
  prompt: string;
  reason: string;
  analysis: string[];
}

interface ComparisonCardProps {
  bad: ComparisonItem;
  good: ComparisonItem;
}

export default function ComparisonCard({ bad, good }: ComparisonCardProps) {
  const [showGood, setShowGood] = useState(false);

  const current = showGood ? good : bad;
  const label = showGood ? "✅ 推荐写法" : "❌ 不推荐写法";

  return (
    <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-zinc-50 border-b border-zinc-100">
        <span className="font-medium text-sm text-zinc-700">{label}</span>
        <button
          onClick={() => setShowGood(!showGood)}
          className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
            showGood
              ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              : "bg-rose-50 text-rose-700 hover:bg-rose-100"
          }`}
        >
          查看{showGood ? "不推荐" : "推荐"}写法
        </button>
      </div>

      <div className={`p-5 ${showGood ? "bg-emerald-50/30" : "bg-rose-50/30"}`}>
        <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-zinc-800">
          {current.prompt}
        </div>
      </div>

      <div className="px-5 py-4 border-t border-zinc-100">
        <p className="text-sm font-medium text-zinc-700 mb-2">{showGood ? "为什么好？" : "为什么不好？"}</p>
        <p className="text-sm text-zinc-600 mb-3">{current.reason}</p>
        <div className="space-y-1">
          {current.analysis.map((point, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-zinc-600">
              <span className={`mt-0.5 ${showGood ? "text-emerald-500" : "text-rose-500"}`}>
                {showGood ? "✓" : "✗"}
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
