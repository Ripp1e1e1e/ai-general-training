import ComparisonCard from "../ui/ComparisonCard";
import TipCard from "../ui/TipCard";
import KeyTakeaway from "../ui/KeyTakeaway";

export default function Ch02Prompts() {
  return (
    <section id="ch2" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">✍️</span>
          <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">第2章</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">写出有效的提示词</h2>
        <p className="text-lg text-zinc-600 mt-3">与 AI 沟通是一门艺术，掌握它并不难。</p>

        <div className="mt-12 space-y-10">
          {/* 核心观念 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">核心观念：你是导演，AI 是演员</h3>
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <p className="text-zinc-700 leading-relaxed mb-4">
                AI 编程的核心不是"让 AI 替你写代码"，而是<strong className="text-zinc-900">你驾驭 AI 写代码</strong>。
                你的价值不在于写多少行代码，而在于<strong>你做决策、定方向、承担责任</strong>。
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
                <p className="font-medium text-amber-800 mb-1">🎬 想想看</p>
                <p className="text-amber-700">
                  导演不需要亲自演戏，但他要知道他要什么效果。同样，你不需要告诉 AI
                  "用 for 循环、建一个临时数组、push 符合条件的元素"——你只需要说
                  "过滤出大于 10 的数字"。<strong>告诉 AI 做什么，而不是怎么做</strong>。
                </p>
              </div>
            </div>
          </div>

          {/* 好提示词 vs 坏提示词 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">好提示词 vs 坏提示词</h3>
            <p className="text-zinc-600 mb-6 text-sm">点击按钮切换查看推荐和不推荐的写法对比：</p>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-zinc-500 mb-3">场景一：写邮件</h4>
                <ComparisonCard
                  bad={{
                    prompt: "帮我写一封邮件",
                    reason: "没有说明收件人、目的、语气、关键信息，AI 只能随便猜",
                    analysis: ["没有指明收件人是谁", "没有说明邮件目的", "没有指定语气和风格"],
                  }}
                  good={{
                    prompt: "帮我写一封邮件给客户张经理：项目进度比预期延迟了两周，需要说明原因并致歉。语气要诚恳但专业，提到我们正在加班追赶进度，预计下月底前交付。",
                    reason: "包含了收件人、目的、语气、关键信息和期望结果",
                    analysis: ["明确收件人和主题", "说明了需要表达的核心内容", "指定了语气风格"],
                  }}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-500 mb-3">场景二：分析数据</h4>
                <ComparisonCard
                  bad={{
                    prompt: "分析这份报告",
                    reason: "太模糊，AI 不知道该分析什么维度、输出什么格式",
                    analysis: ["没有说明分析维度", "没有指定输出格式", "没有目标受众信息"],
                  }}
                  good={{
                    prompt: "分析附件中的 Q3 销售数据，请从以下三个角度输出：1）各产品线收入对比 2）同比/环比增长率 3）Top 5 增长最快的产品。用表格展示，每项附一句话解读。受众：部门总监。",
                    reason: "告诉了 AI 分析维度、输出格式和受众，结果一次到位",
                    analysis: ["明确三个分析维度", "指定表格格式", "说明了受众身份"],
                  }}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-500 mb-3">场景三：修改代码</h4>
                <ComparisonCard
                  bad={{
                    prompt: "修复这个 bug",
                    reason: "没有提供错误信息、复现步骤，AI 无从下手",
                    analysis: ["没有错误信息", "没有复现步骤", "没有期望结果"],
                  }}
                  good={{
                    prompt: "修复 Bug：文件 app/login/page.tsx，问题：用户登录后没有跳转到首页。完整错误日志：[粘贴日志]。当前代码：[相关代码]。预期：点登录后跳转到 /dashboard。",
                    reason: "提供了文件、问题描述、错误日志、当前代码和期望结果",
                    analysis: ["精确定位文件位置", "提供完整错误日志", "说明期望行为"],
                  }}
                />
              </div>
            </div>
          </div>

          {/* 提示词模板 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">提示词模板</h3>
            <p className="text-zinc-600 mb-6 text-sm">以下模板可以直接复制使用：</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 text-sm mb-3">📧 写邮件/文档</h4>
                <div className="bg-zinc-50 rounded-lg p-4 text-xs font-mono text-zinc-700 leading-relaxed">
                  帮我写一封[邮件/报告/通知]<br />
                  给：[收件人]<br />
                  主题：[主题]<br />
                  要点：[关键信息1、2、3]<br />
                  语气：[正式/轻松/诚恳]<br />
                  格式：[段落/列表]
                </div>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 text-sm mb-3">📊 分析数据</h4>
                <div className="bg-zinc-50 rounded-lg p-4 text-xs font-mono text-zinc-700 leading-relaxed">
                  分析[数据/报告]，从以下角度：<br />
                  1. [维度1]<br />
                  2. [维度2]<br />
                  3. [维度3]<br />
                  用[表格/列表]展示<br />
                  受众：[谁来看]
                </div>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 text-sm mb-3">🔧 解决问题</h4>
                <div className="bg-zinc-50 rounded-lg p-4 text-xs font-mono text-zinc-700 leading-relaxed">
                  遇到问题：[描述]<br />
                  尝试过：[已尝试的方法]<br />
                  错误信息：[完整粘贴]<br />
                  期望结果：[想要什么]<br />
                  环境：[操作系统/工具版本]
                </div>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 text-sm mb-3">💡 头脑风暴</h4>
                <div className="bg-zinc-50 rounded-lg p-4 text-xs font-mono text-zinc-700 leading-relaxed">
                  我们要[目标]，请帮我想：<br />
                  1. 至少 5 个方案<br />
                  2. 每个方案列出优缺点<br />
                  3. 按[成本/可行性/效果]排序<br />
                  4. 给出你的推荐和理由
                </div>
              </div>
            </div>
          </div>

          {/* 标准工作流 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">标准工作流：五步法</h3>
            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
                {[
                  { step: "1", title: "探索", desc: "让 AI 先了解项目/问题的背景和结构", color: "text-blue-600", bg: "bg-blue-50" },
                  { step: "2", title: "规划", desc: "AI 给出实施步骤，你来确认方向", color: "text-emerald-600", bg: "bg-emerald-50" },
                  { step: "3", title: "执行", desc: "AI 开始实施，你关注结果", color: "text-amber-600", bg: "bg-amber-50" },
                  { step: "4", title: "验证", desc: "检查结果是否正确，反馈给 AI", color: "text-purple-600", bg: "bg-purple-50" },
                  { step: "5", title: "完成", desc: "确认无误，保存结果", color: "text-rose-600", bg: "bg-rose-50" },
                ].map((item) => (
                  <div key={item.step} className="p-5 text-center">
                    <div className={`w-10 h-10 rounded-full ${item.bg} ${item.color} flex items-center justify-center mx-auto mb-3 font-bold text-lg`}>
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-zinc-800 text-sm">{item.title}</h4>
                    <p className="text-xs text-zinc-500 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <TipCard type="tip" title="核心公式">
            <p>
              <strong>VibeCoding = 提示词 + 工作流</strong>
            </p>
            <p className="mt-2">
              提示词告诉 AI 做什么，工作流决定怎么做。缺一不可。
              好的提示词 + 混乱的工作流 = 效果不稳定；
              普通的提示词 + 标准的工作流 = 稳定产出。
            </p>
          </TipCard>

          <KeyTakeaway
            icon="🎯"
            points={[
              "不要绕弯子：直接告诉 AI 你要什么，不要角色扮演",
              "不要模糊：具体说明任务、格式、受众",
              "给 AI 一个出口：告诉它不确定就说不确定，不要编造",
              "用好公式：完整日志 + 操作步骤 + 预期结果 = 快速解决",
              "五步工作流：探索 → 规划 → 执行 → 验证 → 完成",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
