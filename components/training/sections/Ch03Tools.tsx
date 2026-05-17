import TipCard from "../ui/TipCard";
import KeyTakeaway from "../ui/KeyTakeaway";

export default function Ch03Tools() {
  return (
    <section id="ch3" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🔧</span>
          <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">第3章</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">拓展 AI 能力</h2>
        <p className="text-lg text-zinc-600 mt-3">除了对话，AI 还能做更多。</p>

        <div className="mt-12 space-y-10">
          {/* AI能做什么 vs 不能做什么 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">AI 能做什么？不能做什么？</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h4 className="font-semibold text-emerald-800 mb-3">✅ AI 能做的</h4>
                <ul className="space-y-2 text-sm text-emerald-700">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>读取和分析项目文件</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>运行你允许的命令</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>理解代码结构和逻辑</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>连接已配置的外部服务</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>自动选择合适的工具完成任务</span>
                  </li>
                </ul>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                <h4 className="font-semibold text-rose-800 mb-3">❌ AI 不能做的</h4>
                <ul className="space-y-2 text-sm text-rose-700">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>访问未被授权的文件路径</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>"记住"上次对话之外的内容</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>绕过系统安全限制</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>猜测你心里在想什么</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>执行需要图形界面的操作</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 三种扩展方式 */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">三种扩展方式</h3>
            <p className="text-zinc-600 mb-6 text-sm">当 AI 的内置能力不够用时，有三种方式可以扩展：</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-xl">📦</div>
                <h4 className="font-semibold text-zinc-800 mb-2">插件</h4>
                <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                  一键安装的功能包，最简单的扩展方式。就像手机上的 App，搜到想要的插件，点击安装即可使用。
                </p>
                <p className="text-xs text-zinc-400">例子：前端设计、代码审查、数据库连接</p>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 text-xl">🔌</div>
                <h4 className="font-semibold text-zinc-800 mb-2">MCP 连接</h4>
                <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                  让 AI 连接外部服务，比如数据库、GitHub、API。就像给 AI 接上"数据线"。
                </p>
                <p className="text-xs text-zinc-400">例子：连接 PostgreSQL、GitHub、文件系统</p>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 text-xl">📋</div>
                <h4 className="font-semibold text-zinc-800 mb-2">Skills 技能</h4>
                <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                  让 AI 记住特定的工作流程。比如"分析代码质量"这个指令背后可以有一整套检查流程。
                </p>
                <p className="text-xs text-zinc-400">例子：代码审查流程、部署流程</p>
              </div>
            </div>
          </div>

          <TipCard type="tip" title="你不需要记住工具的名字">
            <p>
              你不需要记住 AI 是用 Read、Edit、Grep、Bash 还是其他工具来完成任务。
              只需要用自然语言描述你想做的事情，AI 会自动选择合适的方法。
            </p>
          </TipCard>

          <KeyTakeaway
            icon="🔧"
            points={[
              "AI 内置能力已经很强大，先试试够不够用",
              "需要扩展时：优先用插件，不够再配 MCP",
              "你不需要知道 AI 用哪个工具，描述需求即可",
              "Skills 让 AI 记住你的工作流程，提高效率",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
