import TipCard from "../ui/TipCard";

export default function CheatSheet() {
  return (
    <section id="cheatsheet" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">📋</span>
          <span className="text-sm font-medium text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full">速查表</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">核心知识速查表</h2>
        <p className="text-lg text-zinc-600 mt-3">一页纸总结所有关键知识点。</p>

        <div className="mt-12 space-y-6">
          {/* 优化原则 */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-semibold text-lg text-zinc-800 mb-4">📌 成本优化四大原则</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: "📁", title: "指定路径", desc: "缩小 AI 搜索范围" },
                { icon: "🎯", title: "明确范围", desc: "指明具体功能" },
                { icon: "✂️", title: "删除客套", desc: "直接说事" },
                { icon: "🧹", title: "清理历史", desc: "定期开启新对话" },
              ].map((item) => (
                <div key={item.title} className="text-center p-3 bg-zinc-50 rounded-lg">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="font-medium text-sm text-zinc-800">{item.title}</div>
                  <div className="text-xs text-zinc-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 提示词原则 */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-semibold text-lg text-zinc-800 mb-4">✍️ 写好提示词的原则</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { do: "直接说任务", dont: "角色扮演（你是一位专家...）" },
                { do: "提供上下文和具体约束", dont: "模糊描述（优化一下代码）" },
                { do: "告诉 AI 不确定时就说不知道", dont: "强行要求 AI 必须给出答案" },
                { do: "一句话讲清楚要做什么", dont: "长篇大论地铺垫" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg text-sm">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <div>
                    <div className="text-zinc-800">{item.do}</div>
                    <div className="text-zinc-400 line-through text-xs mt-0.5">{item.dont}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 工作流 */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-semibold text-lg text-zinc-800 mb-4">🔄 标准五步工作流</h3>
            <div className="grid grid-cols-5 gap-2 text-center">
              {["探索", "规划", "执行", "验证", "完成"].map((step, i) => (
                <div key={step} className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="text-xs font-medium text-zinc-700">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 调试公式 */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-semibold text-lg text-zinc-800 mb-4">🔧 调试公式</h3>
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-4 text-center font-semibold text-zinc-800">
              完整错误日志 + 操作步骤 + 预期结果 = 快速解决方案
            </div>
          </div>

          {/* 模板速查 */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-semibold text-lg text-zinc-800 mb-4">📝 常用模板速查</h3>
            <div className="space-y-3">
              {[
                { label: "写邮件", template: "写一封[邮件]给[谁]，内容要点：[1、2、3]，语气：[正式/轻松]" },
                { label: "分析数据", template: "分析[数据]，从[维度1/维度2/维度3]角度，用[表格]展示，受众：[谁]" },
                { label: "解决问题", template: "遇到[问题]，尝试过[方法]，错误信息：[粘贴]，期望：[结果]" },
                { label: "头脑风暴", template: "关于[主题]，请给至少5个方案，列出优缺点，推荐最佳" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
                  <span className="text-sm font-medium text-zinc-700 w-16 flex-shrink-0">{item.label}</span>
                  <span className="text-sm text-zinc-500">{item.template}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Token换算 */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-semibold text-lg text-zinc-800 mb-4">🧮 Token 换算参考</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-700">1 汉字</div>
                <div className="text-xs text-blue-600">≈ 1 Token</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-700">0.75 英文词</div>
                <div className="text-xs text-blue-600">≈ 1 Token</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-700">5-15 行代码</div>
                <div className="text-xs text-blue-600">≈ 1 Token</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            返回顶部
          </a>
        </div>
      </div>
    </section>
  );
}
