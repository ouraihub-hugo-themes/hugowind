# HugoWind

一个现代化的 Hugo 多语言主题，灵感来自 AstroWind，采用 Tailwind CSS v4 构建。

## ⚠️ 你是用户还是开发者?

### 👤 如果你想使用这个主题

请使用以下方式:

1. 🚀 **推荐: Starter 模板**（最简单）

   ```bash
   git clone https://github.com/ouraihub-hugo-themes/hugowind-starter.git my-blog
   cd my-blog
   hugo server
   ```

2. 📦 **使用 Hugo Modules**

   ```toml
   [module]
   [[module.imports]]
     path = "github.com/ouraihub-hugo-themes/hugowind-dist"
   ```

### 👨‍💻 如果你想贡献代码

欢迎！继续阅读下面的开发指南。

## ✨ 特性

- 🌍 **多语言支持** - 内置中文、英文、繁体中文支持
- 🎨 **现代设计** - 精确复刻 AstroWind 的视觉风格
- 🌙 **暗色模式** - 支持亮色/暗色/跟随系统三种模式
- 🔍 **全文搜索** - 集成 Pagefind 搜索引擎
- 📱 **响应式布局** - 完美适配各种设备
- ⚡ **高性能** - PageSpeed 90+ 分数
- 🔧 **TypeScript** - 类型安全的前端代码
- 🧪 **完整测试** - 139 个测试用例

## 🛠️ 开发环境设置

### 前置要求

- [Hugo Extended](https://gohugo.io/installation/) v0.120.0+
- [Go](https://golang.org/) 1.21+ (Hugo Modules 依赖)
- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) v10+

### 克隆和安装

```bash
# 克隆仓库
git clone https://github.com/ouraihub-hugo-themes/hugowind.git
cd hugowind

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 开发命令速查

```bash
# 开发
pnpm dev          # 启动完整开发环境 (TypeScript + CSS + Hugo)
pnpm dev:fast     # 快速启动 (仅 Hugo，不编译资源)

# 构建
pnpm build        # 生产构建 (完整优化)
pnpm build:dev    # 开发构建 (包含 sourcemap)

# 资源编译
pnpm ts:build     # 编译 TypeScript
pnpm ts:watch     # 监听 TypeScript 变化
pnpm css:build    # 编译 CSS
pnpm css:watch    # 监听 CSS 变化

# 代码质量
pnpm type-check   # TypeScript 类型检查
pnpm lint:ts      # TypeScript 代码检查
pnpm lint:css     # CSS 代码检查
pnpm format       # 代码格式化

# 测试
pnpm test         # 运行测试 (监听模式)
pnpm test:run     # 单次运行测试
pnpm test:ui      # 测试 UI 界面
pnpm test:coverage # 生成覆盖率报告
```

## 📁 项目结构

```
hugowind/
├── assets/                 # 源文件（开发用）
│   ├── css/main.css       # Tailwind CSS 源文件
│   └── ts/                # TypeScript 源文件
│       ├── main.ts        # 主入口
│       ├── toggle-theme.ts # 主题切换（独立打包）
│       └── modules/       # 功能模块
├── static/                 # 编译后的文件（分发用）
│   ├── css/main.css       # 编译后的 CSS
│   ├── js/main.js         # 编译后的 JS
│   └── js/toggle-theme.js # 主题切换脚本
├── layouts/               # Hugo 模板
├── config/                # Hugo 配置
├── content/               # 内容文件
├── i18n/                  # 国际化翻译
├── tests/                 # 测试文件
└── docs/                  # 文档
```

详见: [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

## 🚀 构建和发布

### 构建流程

```bash
# 1. 类型检查
pnpm type-check

# 2. 运行测试
pnpm test:run

# 3. 构建
pnpm build
```

### 发布新版本

使用 standard-version 自动化版本管理:

```bash
# 1. 按规范提交代码
git commit -m "feat: 添加新功能"
git commit -m "fix: 修复 bug"

# 2. 发布 (自动判断版本号)
pnpm release

# 自动完成:
# - 分析 commits
# - 更新版本号
# - 生成 CHANGELOG
# - 创建 tag
# - 推送到 GitHub
```

详见: [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

## 🔧 技术栈

### 核心技术

- **Hugo**: v0.120+ (Extended)
- **Tailwind CSS**: v4.0+
- **TypeScript**: v5.3+
- **esbuild**: v0.20+ (打包工具)

### 开发工具

- **Vitest**: v4.0+ (测试框架)
- **Stylelint**: v16.0+ (CSS 检查)
- **Prettier**: v3.1+ (代码格式化)
- **standard-version**: v9.5+ (版本管理)

## 📝 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: 新功能      → minor 版本
fix: 修复 bug    → patch 版本
feat!: 重大更新  → major 版本
docs: 文档更新   → 不影响版本
style: 样式调整  → 不影响版本
refactor: 重构   → 不影响版本
test: 测试       → 不影响版本
chore: 其他      → 不影响版本
```

## 🤝 贡献

欢迎贡献！请遵循以下步骤:

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

### 贡献前请确保:

- ✅ 所有测试通过 (`pnpm test:run`)
- ✅ 类型检查通过 (`pnpm type-check`)
- ✅ 代码已格式化 (`pnpm format`)

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

## 🙏 致谢

- [AstroWind](https://github.com/ouraihub-hugo-themes/hugowind-dist) - 设计灵感来源
- [Hugo](https://gohugo.io/) - 静态网站生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Pagefind](https://pagefind.app/) - 搜索引擎
