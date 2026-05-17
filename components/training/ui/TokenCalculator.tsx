"use client";

import { useState, useMemo } from "react";

function estimateTokens(text: string): number {
  if (!text.trim()) return 0;
  let tokens = 0;
  for (const ch of text) {
    if (/[一-鿿㐀-䶿]/.test(ch)) {
      tokens += 1;
    } else if (/\s/.test(ch)) {
      tokens += 0.25;
    } else {
      tokens += 0.25;
    }
  }
  const words = text.split(/\s+/).filter(Boolean).length;
  tokens = tokens * 0.6 + words * 0.4;
  return Math.max(1, Math.round(tokens));
}

const RATES = {
  input: 0.003,
  output: 0.015,
};

export default function TokenCalculator() {
  const [prompt, setPrompt] = useState(
    "请分析我们公司上个季度的销售数据，找出业绩增长最快和最慢的产品线，并给出改进建议。"
  );
  const [outputTokens, setOutputTokens] = useState(200);

  const inputTokens = useMemo(() => estimateTokens(prompt), [prompt]);
  const inputCost = (inputTokens / 1000) * RATES.input;
  const outputCost = (outputTokens / 1000) * RATES.output;
  const totalCost = inputCost + outputCost;

  const totalTokens = inputTokens + outputTokens;
  const inputPercent = (inputTokens / totalTokens) * 100;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-6 my-8">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-xl">🧮</span>
        <h3 className="font-semibold text-zinc-800">Token 成本计算器</h3>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">输入你的提示词：</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
            placeholder="输入提示词..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            预计输出长度（Token）：{outputTokens}
          </label>
          <input
            type="range"
            min={50}
            max={2000}
            step={50}
            value={outputTokens}
            onChange={(e) => setOutputTokens(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-zinc-200 accent-blue-500"
          />
          <div className="flex justify-between text-xs text-zinc-400 mt-1">
            <span>简短回答 (50)</span>
            <span>详细回答 (2000)</span>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-lg p-5 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{inputTokens}</div>
              <div className="text-xs text-zinc-500 mt-1">输入 Token</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{outputTokens}</div>
              <div className="text-xs text-zinc-500 mt-1">输出 Token</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-800">{totalTokens}</div>
              <div className="text-xs text-zinc-500 mt-1">总计 Token</div>
            </div>
          </div>

          <div className="h-3 bg-zinc-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${inputPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-zinc-400">
            <span className="text-blue-600">输入 {inputPercent.toFixed(0)}%</span>
            <span className="text-emerald-600">输出 {(100 - inputPercent).toFixed(0)}%</span>
          </div>

          <div className="border-t border-zinc-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-zinc-600">预估总费用</span>
              <span className="text-xl font-bold text-zinc-800">${totalCost.toFixed(5)}</span>
            </div>
            <p className="text-xs text-zinc-400 mt-2">
              基于 Claude Sonnet 模型估算（输入 $0.003/1K tokens，输出 $0.015/1K tokens）
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
