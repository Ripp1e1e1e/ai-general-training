# AI 通识培训

面向公司员工的 AI 通识培训网页，涵盖 AI 基础概念、提示词技巧、工具使用和调试方法。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **包管理**: pnpm

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认 http://localhost:3000）
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 即可访问培训页面。

## 常用命令

| 命令 | 作用 |
|------|------|
| `pnpm dev` | 启动开发服务器（热更新） |
| `pnpm build` | 构建生产版本 |
| `pnpm start` | 启动生产服务器（需先执行 build） |
| `pnpm lint` | 运行代码检查 |

## 停止服务

- **开发环境**: 在终端按 `Ctrl + C`，然后输入 `Y` 确认停止
- **生产环境**: 在终端按 `Ctrl + C`

## 项目结构

```
my-app/
├── app/
│   ├── globals.css          # 全局样式与主题配置
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页（重定向到 /training）
│   └── training/
│       └── page.tsx         # 培训主页面
├── components/training/
│   ├── layout/              # 布局组件
│   │   ├── Header.tsx       # 顶部导航 + 进度条
│   │   ├── Sidebar.tsx      # 侧边栏导航
│   │   ├── MobileNav.tsx    # 移动端导航
│   │   └── Footer.tsx       # 页脚
│   ├── sections/            # 内容章节
│   │   ├── HeroSection.tsx  # 欢迎页
│   │   ├── Ch01Basics.tsx   # AI 基础
│   │   ├── Ch02Prompts.tsx  # 提示词技巧
│   │   ├── Ch03Tools.tsx    # 工具生态
│   │   ├── Ch04Debug.tsx    # 协作调试
│   │   └── CheatSheet.tsx   # 速查表
│   └── ui/                  # UI 组件
│       ├── ComparisonCard.tsx  # 好/坏对比卡片
│       ├── TipCard.tsx         # 提示卡片
│       ├── KeyTakeaway.tsx     # 要点总结
│       └── TokenCalculator.tsx # Token 计算器
└── public/                  # 静态资源
```

## 内容结构

| 章节 | 内容 |
|------|------|
| 欢迎页 | 课程介绍、为什么学 AI |
| 第1章：理解 AI 基础 | Token 机制、上下文窗口、成本优化 |
| 第2章：写出有效的提示词 | 提示词原则、好/坏对比、标准工作流 |
| 第3章：拓展 AI 能力 | 插件、MCP、Skills 介绍 |
| 第4章：高效协作与调试 | 调试公式、循环修复模式 |
| 速查表 | 核心知识点一页纸总结 |
  
