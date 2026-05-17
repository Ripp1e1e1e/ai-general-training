import { ReactNode } from "react";

interface KeyTakeawayProps {
  points: string[];
  icon?: string;
}

export default function KeyTakeaway({ points, icon = "🎯" }: KeyTakeawayProps) {
  return (
    <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 my-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">{icon}</span>
        <h4 className="font-semibold text-blue-800">核心要点</h4>
      </div>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">
              {i + 1}
            </span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
