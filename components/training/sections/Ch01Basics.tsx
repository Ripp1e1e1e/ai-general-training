import TipCard from "../ui/TipCard";
import KeyTakeaway from "../ui/KeyTakeaway";
import TokenCalculator from "../ui/TokenCalculator";

export default function Ch01Basics() {
  return (
    <section id="ch1" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🧠</span>
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">第1章</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">理解 AI 基础</h2>
        <p className="text-lg text-zinc-600 mt-3">AI 是如何工作的？它和你想象的可能不太一样。</p>

        <div className="mt-12 space-y-10">
          {/* 什么是AI/LLM */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">什么是大语言模型（LLM）？</h3>
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <p className="text-zinc-700 leading-relaxed mb-4">
                想象你有一个极其聪明的助手，它读了几乎整个互联网的内容——书籍、文章、代码、对话。
                当你问它一个问题时，它不是在"百度搜索"答案，而是基于它读过的所有内容，
                <strong className="text-zinc-900">预测最合理的回答</strong>。
              </p>

              <div className="bg-zinc-50 rounded-lg p-5 text-sm">
                <p className="font-medium text-zinc-700 mb-2">💡 类比一下</p>
                <p className="text-zinc-600">
                  AI 就像一位读过百万本书的实习生。它知识丰富，但需要你清楚地告诉它要做什么、
                  怎么做。它不会读心术，所以<strong>你的指令越清晰，它的表现就越好</strong>。
                </p>
              </div>
            </div>
          </div>

          {/* Token 概念 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">Token：AI 的"语言颗粒"</h3>
            <div className="bg-white rounded-xl border border-zinc-200 p-6 space-y-4">
              <p className="text-zinc-700 leading-relaxed">
                AI 不是按"字"来理解文本的，而是按 <strong className="text-zinc-900">Token</strong>（令牌）来处理的。
                Token 是 AI 处理文本的基本单位，也是计费的基本单位。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">1 汉字</div>
                  <div className="text-sm text-zinc-600 mt-1">≈ 1 Token</div>
                  <div className="text-xs text-zinc-400 mt-1">"你好" = 2 Tokens</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">0.75 英文词</div>
                  <div className="text-sm text-zinc-600 mt-1">≈ 1 Token</div>
                  <div className="text-xs text-zinc-400 mt-1">"Hello" = 1 Token</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">5-15 行代码</div>
                  <div className="text-sm text-zinc-600 mt-1">≈ 1 Token</div>
                  <div className="text-xs text-zinc-400 mt-1">代码比文本更"贵"</div>
                </div>
              </div>

              <TipCard type="tip" title="为什么要关心 Token？">
                <p>
                  Token 直接关系到<strong>成本</strong>和<strong>质量</strong>。
                  上下文越大，消耗的 Token 越多，花费越高。
                  更重要的是——无关的上下文会分散 AI 的注意力，降低回答质量。
                </p>
              </TipCard>
            </div>
          </div>

          {/* Token计算器 */}
          <TokenCalculator />

          {/* 成本优化 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">如何高效使用 AI？</h3>
            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
              <div className="p-6 space-y-6">
                <p className="text-zinc-700 leading-relaxed">
                  <strong className="text-zinc-900">关键认知</strong>：提示词本身消耗很少，
                  真正消耗 Token 的是 AI 需要读取的<strong>上下文</strong>——项目文件、代码、历史对话等。
                  优化提示词不是在"打磨话术"，而是<strong>减少不必要的上下文</strong>。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-rose-200 rounded-lg p-4 bg-rose-50/30">
                    <div className="text-sm font-semibold text-rose-700 mb-2">❌ 模糊描述</div>
                    <p className="text-sm text-zinc-600">"帮我看看项目有什么问题"</p>
                    <p className="text-xs text-rose-600 mt-2">→ AI 不确定从哪开始，读取大量无关文件</p>
                  </div>
                  <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/30">
                    <div className="text-sm font-semibold text-emerald-700 mb-2">✅ 精准描述</div>
                    <p className="text-sm text-zinc-600">"帮我检查登录功能的问题"</p>
                    <p className="text-xs text-emerald-600 mt-2">→ AI 定位相关文件，只读取必要内容</p>
                  </div>
                </div>

                <div className="border-t border-zinc-100 pt-5">
                  <h4 className="font-semibold text-zinc-800 mb-3">优化四大原则</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: "📁", title: "指定路径", desc: "告诉 AI 具体看哪个文件" },
                      { icon: "🎯", title: "明确范围", desc: "说明是哪个功能有问题" },
                      { icon: "✂️", title: "删除客套", desc: "不用'请''谢谢'，直接说事" },
                      { icon: "📝", title: "直接指令", desc: "不要铺垫，直接描述任务" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-50">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <div className="font-medium text-sm text-zinc-800">{item.title}</div>
                          <div className="text-xs text-zinc-500">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 常见问题 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">常见问题</h3>
            <div className="space-y-4">
              {[
                { q: 'AI 为什么会"一本正经地胡说八道"？', a: '这叫做"幻觉"。所有 AI 模型都有这个问题。解决方法：给 AI 明确的上下文，告诉它不确定时就说"不确定"，不要强行编造。' },
                { q: "Token 超限了怎么办？", a: "通常不会超限 —— AI 会自动切分读取大文件。如果遇到超限，说明项目太大了，考虑清理对话历史或拆分任务。" },
                { q: "用 AI 是不是很贵？", a: "单次调用很便宜（几分钱）。关键在于养成良好的使用习惯：精准描述问题、定期清理对话历史、避免让 AI 读取无关文件。" },
              ].map((item) => (
                <details key={item.q} className="group bg-white rounded-xl border border-zinc-200 overflow-hidden">
                  <summary className="px-5 py-4 font-medium text-zinc-800 cursor-pointer hover:bg-zinc-50 flex items-center justify-between">
                    <span>❓ {item.q}</span>
                    <svg className="w-4 h-4 text-zinc-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <KeyTakeaway
            points={[
              "Token 是 AI 的计价单位，上下文越大花费越高",
              "提示词优化的核心是减少不必要的上下文，不是打磨话术",
              "精准的上下文既省钱，又让 AI 的回答更准确",
              "养成好习惯：指定路径、明确范围、删除客套、直接说事",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
