# 贡献指南

## 项目架构

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
│   └── js/                # 编译后的 JS
├── layouts/               # Hugo 模板
├── config/                # Hugo 配置
├── i18n/                  # 国际化翻译
└── tests/                 # 测试文件
```

## 源码与产物

| 类型 | 源文件 | 编译产物 | 命令 |
|------|--------|---------|------|
| CSS | `assets/css/main.css` | `static/css/main.css` | `pnpm css:build` |
| JS | `assets/ts/main.ts` | `static/js/main.js` | `pnpm ts:build` |

## 开发流程

```bash
# 安装依赖
pnpm install

# 启动开发
pnpm dev

# 运行测试
pnpm test:run

# 类型检查
pnpm type-check
```

## 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/)：

```bash
feat: 新功能      # → minor 版本
fix: 修复 bug    # → patch 版本
feat!: 重大更新  # → major 版本
docs: 文档更新
style: 样式调整
refactor: 重构
test: 测试
```

## 发布版本

```bash
pnpm release        # 自动判断版本
pnpm release:patch  # 0.1.0 → 0.1.1
pnpm release:minor  # 0.1.0 → 0.2.0
pnpm release:major  # 0.1.0 → 1.0.0
```

发布会自动：更新版本号 → 生成 CHANGELOG → 创建 tag → 推送到 GitHub
