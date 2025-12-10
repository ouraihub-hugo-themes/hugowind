# AstroWind 设计令牌文档

本文档记录从 AstroWind 主题提取的所有设计令牌，用于 HugoWind 项目的精确复刻。

## 1. 颜色系统

### 1.1 CSS 变量定义

#### 亮色模式 (`:root`)

```css
:root {
  /* 主色调 */
  --aw-color-primary: rgb(1 97 239);      /* #0161EF - 蓝色主色 */
  --aw-color-secondary: rgb(1 84 207);    /* #0154CF - 深蓝色次要色 */
  --aw-color-accent: rgb(109 40 217);     /* #6D28D9 - 紫色强调色 */

  /* 文字颜色 */
  --aw-color-text-heading: rgb(0 0 0);           /* 标题文字 - 纯黑 */
  --aw-color-text-default: rgb(16 16 16);        /* 默认文字 - 深灰 */
  --aw-color-text-muted: rgb(16 16 16 / 66%);    /* 次要文字 - 66%透明度 */

  /* 背景颜色 */
  --aw-color-bg-page: rgb(255 255 255);          /* 页面背景 - 白色 */
  --aw-color-bg-page-dark: rgb(3 6 32);          /* 暗色背景参考 */
}
```

#### 暗色模式 (`.dark`)

```css
.dark {
  /* 主色调 - 暗色模式保持一致 */
  --aw-color-primary: rgb(1 97 239);      /* #0161EF */
  --aw-color-secondary: rgb(1 84 207);    /* #0154CF */
  --aw-color-accent: rgb(109 40 217);     /* #6D28D9 */

  /* 文字颜色 - 暗色模式 */
  --aw-color-text-heading: rgb(247, 248, 248);   /* 标题文字 - 近白色 */
  --aw-color-text-default: rgb(229 236 246);     /* 默认文字 - 浅灰 */
  --aw-color-text-muted: rgb(229 236 246 / 66%); /* 次要文字 - 66%透明度 */

  /* 背景颜色 */
  --aw-color-bg-page: rgb(3 6 32);               /* 页面背景 - 深蓝黑 */
}
```

### 1.2 Tailwind 颜色映射

```javascript
colors: {
  primary: 'var(--aw-color-primary)',
  secondary: 'var(--aw-color-secondary)',
  accent: 'var(--aw-color-accent)',
  default: 'var(--aw-color-text-default)',
  muted: 'var(--aw-color-text-muted)',
}
```

### 1.3 辅助颜色类

```css
/* 背景工具类 */
.bg-page { background-color: var(--aw-color-bg-page); }
.bg-dark { background-color: var(--aw-color-bg-page-dark); }
.bg-light { background-color: var(--aw-color-bg-page); }

/* 文字工具类 */
.text-page { color: var(--aw-color-text-page); }
.text-muted { color: var(--aw-color-text-muted); }
```

### 1.4 特殊颜色用法

| 用途 | 亮色模式 | 暗色模式 |
|------|----------|----------|
| 链接悬停 | `text-primary` | `text-blue-700` |
| 标签文字 | `text-secondary` | `text-blue-200` |
| 下拉菜单背景 | `bg-white/90` | `bg-dark` |
| 边框 | `border-gray-200` | `border-slate-800` |
| 卡片背景 | `bg-gray-400` | `bg-slate-700` |

## 2. 字体系统

### 2.1 字体族定义

```css
:root {
  --aw-font-sans: 'Inter Variable';
  --aw-font-serif: 'Inter Variable';
  --aw-font-heading: 'Inter Variable';
}
```

### 2.2 Tailwind 字体配置

```javascript
fontFamily: {
  sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
  serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
  heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
}
```

### 2.3 字号层次

| 元素 | 移动端 | 桌面端 | Tailwind 类 |
|------|--------|--------|-------------|
| Hero 标题 | `text-5xl` | `text-6xl` | `text-5xl md:text-6xl` |
| 页面标题 | `text-4xl` | `text-5xl` | `text-4xl md:text-5xl` |
| 区块标题 | `text-3xl` | `text-4xl` | `text-3xl md:text-4xl` |
| 卡片标题 | `text-xl` | `text-2xl` | `text-xl sm:text-2xl` |
| 副标题 | `text-xl` | `text-2xl` | `text-xl md:text-2xl` |
| 正文 | `text-base` | `text-lg` | `text-base lg:text-lg` |
| 导航链接 | `text-xl` | `text-[0.9375rem]` | `text-xl md:text-[0.9375rem]` |
| 小字 | `text-sm` | `text-sm` | `text-sm` |

### 2.4 字重

| 用途 | 字重 | Tailwind 类 |
|------|------|-------------|
| 标题 | 700 | `font-bold` |
| 导航链接 | 500 | `font-medium` |
| 按钮 | 600 | `font-semibold` |
| 标签 | 700 | `font-bold` |
| 正文 | 400 | `font-normal` |

### 2.5 行高和字间距

```css
/* 标题样式 */
.font-heading {
  @apply leading-tighter tracking-tighter;
}

/* 标签样式 */
.tracking-wide {
  letter-spacing: 0.025em;
}

/* 导航链接 */
.tracking-[0.01rem] {
  letter-spacing: 0.01rem;
}
```

## 3. 间距系统

### 3.1 容器宽度

```css
/* 最大宽度 */
.max-w-7xl { max-width: 80rem; }    /* 1280px - 主容器 */
.max-w-5xl { max-width: 64rem; }    /* 1024px - Hero 内容 */
.max-w-3xl { max-width: 48rem; }    /* 768px - 文章内容 */
```

### 3.2 内边距

| 元素 | 移动端 | 平板 | 桌面端 |
|------|--------|------|--------|
| 容器水平 | `px-4` | `sm:px-6` | `md:px-6` |
| 区块垂直 | `py-12` | `md:py-16` | `lg:py-20` |
| 按钮 | `py-3.5 px-6` | `md:px-8` | - |
| 导航链接 | `px-4 py-3` | - | - |

### 3.3 外边距

| 元素 | 值 | Tailwind 类 |
|------|-----|-------------|
| 标题下方 | 16px | `mb-4` |
| 副标题下方 | 24px | `mb-6` |
| 区块标题下方 | 32px/48px | `mb-8 md:mb-12` |
| 卡片间距 | 24px | `mb-6` |

### 3.4 间隙 (Gap)

```css
/* 按钮组 */
.gap-4 { gap: 1rem; }

/* 网格布局 */
.gap-4 { gap: 1rem; }
.gap-y-8 { row-gap: 2rem; }
.sm:gap-8 { gap: 2rem; }
```

## 4. 圆角系统

| 元素 | 值 | Tailwind 类 |
|------|-----|-------------|
| 按钮 | 9999px | `rounded-full` |
| 卡片 | 8px | `rounded` / `rounded-md` |
| 图片 | 8px | `rounded-md` |
| 下拉菜单 | 8px | `rounded` |
| 输入框 | 8px | `rounded-lg` |

## 5. 阴影系统

### 5.1 阴影定义

```css
/* 卡片阴影 */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

/* 下拉菜单阴影 */
.drop-shadow-xl {
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}

/* Header 滚动阴影 */
#header.scroll > div:first-child {
  box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%);
}
```

### 5.2 阴影使用场景

| 元素 | 默认 | 悬停 |
|------|------|------|
| 卡片 | `shadow-lg` | - |
| 按钮 | - | - |
| 下拉菜单 | `drop-shadow-xl` | - |
| 图片 | `shadow-lg` | - |

## 6. 动画系统

### 6.1 fadeInUp 动画

```javascript
animation: {
  fade: 'fadeInUp 1s both',
},
keyframes: {
  fadeInUp: {
    '0%': { opacity: 0, transform: 'translateY(2rem)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
},
```

### 6.2 动画触发

```css
/* 交叉观察器触发 */
.intersect-once { /* 只触发一次 */ }
.intersect-quarter { /* 25% 可见时触发 */ }
.intersect-no-queue { /* 不排队 */ }

/* 动画应用 */
.motion-safe:md:opacity-0 { /* 初始透明 */ }
.motion-safe:md:intersect:animate-fade { /* 进入视口时动画 */ }
```

### 6.3 过渡效果

```css
/* 通用过渡 */
.transition { transition-property: all; }
.transition-[opacity] { transition-property: opacity; }
.duration-150 { transition-duration: 150ms; }
.duration-200 { transition-duration: 200ms; }
.ease-in { transition-timing-function: ease-in; }
.ease-in-out { transition-timing-function: ease-in-out; }

/* 常用组合 */
.transition.duration-150.ease-in-out { /* 链接悬停 */ }
.ease-in.duration-200 { /* 按钮悬停 */ }
```

### 6.4 汉堡菜单动画

```css
[data-aw-toggle-menu] path {
  @apply transition;
}
[data-aw-toggle-menu].expanded g > path:first-child {
  @apply -rotate-45 translate-y-[15px] translate-x-[-3px];
}
[data-aw-toggle-menu].expanded g > path:last-child {
  @apply rotate-45 translate-y-[-8px] translate-x-[14px];
}
```

## 7. 响应式断点

### 7.1 Tailwind 默认断点

| 断点 | 最小宽度 | 用途 |
|------|----------|------|
| `sm` | 640px | 小平板 |
| `md` | 768px | 平板/导航切换 |
| `lg` | 1024px | 桌面 |
| `xl` | 1280px | 大桌面 |
| `2xl` | 1536px | 超大屏幕 |

### 7.2 关键响应式模式

```css
/* 导航切换 */
.hidden.md:flex { /* 移动端隐藏，平板显示 */ }
.md:hidden { /* 平板及以上隐藏 */ }

/* 网格布局 */
.grid-cols-12 { /* 12列网格 */ }
.col-span-12.lg:col-span-4 { /* 移动端全宽，桌面端1/3 */ }
.col-span-6.md:col-span-3.lg:col-span-2 { /* 响应式列宽 */ }

/* 弹性布局 */
.flex-col.sm:flex-row { /* 移动端垂直，平板水平 */ }
```

## 8. 组件样式令牌

### 8.1 按钮样式

```css
/* 基础按钮 */
.btn {
  @apply inline-flex items-center justify-center;
  @apply rounded-full border border-gray-400 bg-transparent;
  @apply font-medium text-center text-base text-page leading-snug;
  @apply py-3.5 px-6 md:px-8;
  @apply transition ease-in duration-200;
  @apply focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2;
  @apply hover:bg-gray-100 hover:border-gray-600;
  @apply dark:text-slate-300 dark:border-slate-500;
  @apply dark:hover:bg-slate-800 dark:hover:border-slate-800;
  @apply cursor-pointer;
}

/* 主要按钮 */
.btn-primary {
  @apply btn font-semibold;
  @apply bg-primary text-white border-primary;
  @apply hover:bg-secondary hover:border-secondary hover:text-white;
  @apply dark:text-white dark:bg-primary dark:border-primary;
  @apply dark:hover:border-secondary dark:hover:bg-secondary;
}

/* 次要按钮 */
.btn-secondary {
  @apply btn;
}

/* 文字按钮 */
.btn-tertiary {
  @apply btn border-none shadow-none;
  @apply text-muted hover:text-gray-900;
  @apply dark:text-gray-400 dark:hover:text-white;
}
```

### 8.2 Header 样式

```css
/* 固定头部 */
header.sticky {
  @apply top-0 z-40 flex-none mx-auto w-full;
  @apply border-b border-gray-50/0;
  @apply transition-[opacity] ease-in-out;
}

/* 滚动状态 */
#header.scroll > div:first-child {
  @apply bg-page md:bg-white/90 md:backdrop-blur-md;
  box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%);
}

/* 暗色模式滚动状态 */
.dark #header.scroll > div:first-child {
  @apply bg-page md:bg-[#030621e6] border-b border-gray-500/20;
  box-shadow: none;
}
```

### 8.3 卡片样式

```css
/* 博客卡片 */
article.mb-6 {
  @apply transition;
}

/* 卡片图片容器 */
.relative.md:h-64 {
  @apply bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6;
}

/* 卡片标题 */
h3 {
  @apply text-xl sm:text-2xl font-bold leading-tight mb-2;
  @apply font-heading dark:text-slate-300;
}

/* 卡片链接悬停 */
a.hover:text-primary {
  @apply dark:hover:text-blue-700 transition ease-in duration-200;
}
```

### 8.4 Footer 样式

```css
footer {
  @apply relative border-t border-gray-200 dark:border-slate-800 not-prose;
}

/* Footer 链接 */
a.text-muted {
  @apply hover:text-gray-700 dark:text-gray-400;
  @apply hover:underline transition duration-150 ease-in-out;
}

/* 社交链接 */
a.text-muted.dark:text-gray-400 {
  @apply hover:bg-gray-100 dark:hover:bg-gray-700;
  @apply focus:outline-none focus:ring-4;
  @apply focus:ring-gray-200 dark:focus:ring-gray-700;
  @apply rounded-lg text-sm p-2.5 inline-flex items-center;
}
```

## 9. 排版样式 (Prose)

### 9.1 文章内容样式

```css
.prose {
  @apply prose-md lg:prose-xl;
  @apply dark:prose-invert;
  @apply dark:prose-headings:text-slate-300;
  @apply prose-headings:font-heading;
  @apply prose-headings:leading-tighter;
  @apply prose-headings:tracking-tighter;
  @apply prose-headings:font-bold;
  @apply prose-a:text-primary dark:prose-a:text-blue-400;
  @apply prose-img:rounded-md prose-img:shadow-lg;
  @apply prose-headings:scroll-mt-[80px];
  @apply prose-li:my-0;
}
```

## 10. 选择文本样式

```css
:root {
  ::selection {
    background-color: lavender;
  }
}

.dark {
  ::selection {
    background-color: black;
    color: snow;
  }
}
```

## 11. 图标样式

```css
/* 细线图标 */
[astro-icon].icon-light > * {
  stroke-width: 1.2;
}

/* 粗线图标 */
[astro-icon].icon-bold > * {
  stroke-width: 2.4;
}

/* 常用图标尺寸 */
.w-5.h-5 { /* 20px - 默认 */ }
.w-6.h-6 { /* 24px - 大图标 */ }
.w-4.h-4 { /* 16px - 小图标 */ }
.w-3.5.h-3.5 { /* 14px - 下拉箭头 */ }
```

---

## 附录：颜色值速查表

| 变量名 | RGB 值 | HEX 值 | 用途 |
|--------|--------|--------|------|
| `--aw-color-primary` | `rgb(1 97 239)` | `#0161EF` | 主色调 |
| `--aw-color-secondary` | `rgb(1 84 207)` | `#0154CF` | 次要色 |
| `--aw-color-accent` | `rgb(109 40 217)` | `#6D28D9` | 强调色 |
| `--aw-color-text-heading` (light) | `rgb(0 0 0)` | `#000000` | 标题 |
| `--aw-color-text-default` (light) | `rgb(16 16 16)` | `#101010` | 正文 |
| `--aw-color-bg-page` (light) | `rgb(255 255 255)` | `#FFFFFF` | 背景 |
| `--aw-color-text-heading` (dark) | `rgb(247 248 248)` | `#F7F8F8` | 标题 |
| `--aw-color-text-default` (dark) | `rgb(229 236 246)` | `#E5ECF6` | 正文 |
| `--aw-color-bg-page` (dark) | `rgb(3 6 32)` | `#030620` | 背景 |
