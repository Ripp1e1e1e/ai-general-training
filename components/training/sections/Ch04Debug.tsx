import TipCard from "../ui/TipCard";
import KeyTakeaway from "../ui/KeyTakeaway";

export default function Ch04Debug() {
  return (
    <section id="ch4" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🤝</span>
          <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">第4章</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">高效协作与调试</h2>
        <p className="text-lg text-zinc-600 mt-3">与 AI 高效协作是一门可以练习的技能。</p>

        <div className="mt-12 space-y-10">
          {/* 沟通公式 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">调试沟通公式</h3>
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-5 mb-5 text-center">
                <p className="text-lg font-bold text-zinc-800">
                  完整错误日志 + 操作步骤 + 预期结果 = 快速解决方案
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-700 text-sm mb-2">📋 完整错误日志</h4>
                  <p className="text-xs text-blue-600">
                    不要只复制最后一行。把完整的报错信息——包括看起来最复杂、最长的部分——全部发给 AI。
                  </p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-2">👣 操作步骤</h4>
                  <p className="text-xs text-emerald-600">
                    你做了什么才触发了这个错误？比如"运行 pnpm dev 后"、"点击登录按钮后"。
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-700 text-sm mb-2">🎯 预期结果</h4>
                  <p className="text-xs text-amber-600">
                    你希望发生什么？"页面应该跳转到首页"、"应该显示成功提示"。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 好 vs 不好 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">对比：低效 vs 高效</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-rose-200 rounded-xl p-5 bg-rose-50/30">
                <h4 className="text-sm font-semibold text-rose-700 mb-4">❌ 低效沟通</h4>
                <div className="space-y-3">
                  <div className="bg-rose-100/50 rounded-lg p-3 text-sm text-zinc-700">
                    "报错了，帮我看看"
                  </div>
                  <div className="flex items-center gap-2 text-xs text-rose-600">
                    <span>← AI 需要追问 2-3 轮才能开始解决问题</span>
                  </div>
                </div>
              </div>
              <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50/30">
                <h4 className="text-sm font-semibold text-emerald-700 mb-4">✅ 高效沟通</h4>
                <div className="space-y-3">
                  <div className="bg-emerald-100/50 rounded-lg p-3 text-sm text-zinc-700 leading-relaxed">
                    我运行 pnpm dev 后终端报错：<br />
                    [完整错误日志粘贴]<br />
                    我预期是正常启动，在 localhost:3000 能访问。
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-600">
                    <span>← AI 直接定位问题，0 轮追问</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 循环修复 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">循环修复模式</h3>
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <p className="text-zinc-700 leading-relaxed mb-6">
                AI 第一次没修好？很正常。大多数问题需要 <strong className="text-zinc-900">2-3 轮迭代</strong>才能解决。
                关键在于：每次把新的结果反馈给 AI。
              </p>

              <div className="flex items-center justify-center mb-6">
                <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
                  <div className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">尝试修复</div>
                  <svg className="w-5 h-5 text-zinc-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="px-4 py-2 rounded-lg bg-amber-100 text-amber-700 font-medium">解决了？</div>
                  <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-700 font-medium">完成 ✓</div>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-lg p-5">
                <p className="text-sm font-medium text-zinc-700 mb-2">💬 反馈模板：</p>
                <div className="text-sm text-zinc-600 font-mono bg-white rounded border border-zinc-200 p-4">
                  "按你的方法改了，但现在出现了新的错误：<br />
                  [新错误日志]<br />
                  请继续分析原因。"
                </div>
              </div>
            </div>
          </div>

          {/* 常见错误模式 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">常见错误速查</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-50">
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 rounded-tl-lg">错误类型</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700">典型表现</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 rounded-tr-lg">解决方案方向</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {[
                    { type: "类型错误", symptom: "类型不匹配", solution: "检查类型定义，修正类型" },
                    { type: "空值错误", symptom: "读取了 undefined 的属性", solution: "添加空值检查、可选链" },
                    { type: "导入错误", symptom: "找不到模块", solution: "安装依赖、修正路径" },
                    { type: "网络错误", symptom: "连接被拒绝", solution: "检查服务状态、URL" },
                    { type: "端口占用", symptom: "地址已被使用", solution: "关闭占用端口的进程" },
                    { type: "语法错误", symptom: "意外的符号", solution: "检查语法拼写，注意括号匹配" },
                  ].map((row) => (
                    <tr key={row.type} className="hover:bg-zinc-50">
                      <td className="px-4 py-3 font-medium text-zinc-800">{row.type}</td>
                      <td className="px-4 py-3 text-zinc-600">{row.symptom}</td>
                      <td className="px-4 py-3 text-zinc-600">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 终极大招 */}
          <TipCard type="warning" title="💪 终极大招：让 AI 自己 Build">
            <p className="mb-3">
              遇到一堆报错不知道从哪开始？试试这个：
            </p>
            <div className="bg-white rounded border border-amber-200 p-3 font-mono text-sm mb-3">
              "请帮我运行构建，如果遇到错误请自行修复，直到构建成功"
            </div>
            <p>
              小问题（版本冲突、缺失依赖）AI 自己就能解决。你先 git commit 保存现场，
              然后让 AI 自己跑，去看杯咖啡回来就好了。
            </p>
          </TipCard>

          <KeyTakeaway
            icon="🤝"
            points={[
              "调试公式：完整日志 + 操作步骤 + 预期结果 = 快速解决",
              "不要只复制最后一行错误，完整的报错信息更有价值",
              "通常需要 2-3 轮迭代，坚持反馈就能解决问题",
              "先 git commit 保存，然后让 AI 自己尝试修复",
              "提供明确上下文比让 AI 猜测高效得多",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
