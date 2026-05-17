interface TipCardProps {
  type?: "tip" | "warning" | "info";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  tip: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "💡",
    iconBg: "bg-blue-100",
    title: "blue-700",
    text: "blue-800",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "⚠️",
    iconBg: "bg-amber-100",
    title: "amber-700",
    text: "amber-800",
  },
  info: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "ℹ️",
    iconBg: "bg-emerald-100",
    title: "emerald-700",
    text: "emerald-800",
  },
};

export default function TipCard({ type = "tip", title, children }: TipCardProps) {
  const s = styles[type];

  return (
    <div className={`rounded-xl border ${s.bg} ${s.border} p-5 my-6`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-full ${s.iconBg} flex items-center justify-center flex-shrink-0 text-lg`}>
          {s.icon}
        </div>
        <div className="min-w-0">
          {title && <h4 className={`font-semibold text-sm text-${s.title} mb-1`}>{title}</h4>}
          <div className={`text-sm text-${s.text} leading-relaxed`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
