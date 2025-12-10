# AstroWind 到 Hugo 组件映射文档

本文档详细记录 AstroWind 组件到 HugoWind Hugo 模板的映射关系，用于指导主题迁移工作。

## 1. 目录结构映射

### AstroWind 组件目录
```
astrowind/src/components/
├── widgets/          # 页面级组件（Hero, Header, Footer 等）
├── blog/             # 博客相关组件
├── common/           # 通用组件（主题切换、菜单等）
├── ui/               # UI 基础组件（Button, Headline 等）
├── CustomStyles.astro
├── Favicons.astro
└── Logo.astro
```

### HugoWind 模板目录
```
hugowind/layouts/
├── _default/         # 默认模板
│   ├── baseof.html   # 基础布局
│   ├── list.html     # 列表页
│   ├── single.html   # 详情页
│   └── index.json    # JSON 输出
├── partials/         # 可复用组件
│   ├── head/         # <head> 相关
│   ├── header/       # 导航头部
│   ├── footer/       # 页脚
│   ├── home/         # 首页组件
│   ├── blog/         # 博客组件
│   └── scripts/      # 脚本加载
└── index.html        # 首页模板
```

## 2. Widgets 组件映射

### 2.1 Header.astro → header/main.html

| AstroWind Props | Hugo 实现 | 说明 |
|-----------------|-----------|------|
| `id` | HTML id 属性 | 默认 "header" |
| `links` | `site.Menus.main` | Hugo 菜单系统 |
| `actions` | `site.Params.header.actions` | CTA 按钮配置 |
| `isSticky` | CSS class `sticky` | 固定头部 |
| `isDark` | CSS class `dark` | 暗色模式 |
| `isFullWidth` | CSS class 控制 | 全宽布局 |
| `showToggleTheme` | `site.Params.features.darkMode` | 主题切换开关 |
| `showRssFeed` | `site.Params.features.rss` | RSS 链接 |
| `position` | `site.Params.header.position` | 导航位置 |

**Hugo 模板结构:**
```
layouts/partials/header/
├── main.html           # 主导航组件
├── logo.html           # Logo 组件
├── nav-menu.html       # 桌面端导航菜单
├── mobile-menu.html    # 移动端菜单
├── mobile-toggle.html  # 汉堡菜单按钮
├── theme-toggle.html   # 主题切换按钮
└── language-switcher.html  # 语言切换器
```

### 2.2 Hero.astro → home/hero.html

| AstroWind Props | Hugo 实现 | 说明 |
|-----------------|-----------|------|
| `title` | `site.Params.hero.title` | 主标题 |
| `subtitle` | `site.Params.hero.subtitle` | 副标题 |
| `tagline` | `site.Params.hero.tagline` | 标语 |
| `content` | Slot 内容 | 额外内容 |
| `actions` | `site.Params.hero.actions` | CTA 按钮数组 |
| `image` | `site.Params.hero.image` | Hero 图片 |
| `bg` | Slot 背景 | 自定义背景 |

**关键样式类:**
- 容器: `relative md:-mt-[76px] not-prose`
- 内容区: `max-w-7xl mx-auto px-4 sm:px-6`
- 标题: `text-5xl md:text-6xl font-bold leading-tighter tracking-tighter font-heading`
- 副标题: `text-xl text-muted mb-6 dark:text-slate-300`
- 动画: `intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade`

### 2.3 Footer.astro → footer/main.html

| AstroWind Props | Hugo 实现 | 说明 |
|-----------------|-----------|------|
| `links` | `site.Params.footer.links` | 页脚链接分组 |
| `secondaryLinks` | `site.Params.footer.secondaryLinks` | 次要链接 |
| `socialLinks` | `site.Params.footer.socialLinks` | 社交媒体链接 |
| `footNote` | `site.Params.footer.footNote` | 页脚备注 |
| `theme` | CSS class | 主题样式 |

**布局结构:**
- 12 列网格: `grid grid-cols-12 gap-4 gap-y-8 sm:gap-8`
- Logo 区域: `col-span-12 lg:col-span-4`
- 链接列: `col-span-6 md:col-span-3 lg:col-span-2`

### 2.4 Features.astro → home/features.html

| AstroWind Props | Hugo 实现 | 说明 |
|-----------------|-----------|------|
| `title` | `site.Params.features.title` | 区块标题 |
| `subtitle` | `site.Params.features.subtitle` | 区块副标题 |
| `tagline` | `site.Params.features.tagline` | 标语 |
| `items` | `site.Params.features.items` | 功能项数组 |
| `columns` | `site.Params.features.columns` | 列数 (2/3/4) |
| `defaultIcon` | 默认图标 | 功能项图标 |

### 2.5 BlogLatestPosts.astro → home/recent-posts.html

| AstroWind Props | Hugo 实现 | 说明 |
|-----------------|-----------|------|
| `title` | `site.Params.recentPosts.title` | 区块标题 |
| `linkText` | `site.Params.recentPosts.linkText` | 查看更多文字 |
| `linkUrl` | 博客列表 URL | 链接地址 |
| `information` | `site.Params.recentPosts.info` | 说明文字 |
| `count` | `site.Params.recentPosts.count` | 显示数量 |

**Hugo 数据获取:**
```go
{{ $posts := first 4 (where .Site.RegularPages "Section" "posts") }}
```

### 2.6 CallToAction.astro → home/cta.html

| AstroWind Props | Hugo 实现 | 说明 |
|-----------------|-----------|------|
| `title` | `site.Params.cta.title` | CTA 标题 |
| `subtitle` | `site.Params.cta.subtitle` | CTA 副标题 |
| `actions` | `site.Params.cta.actions` | 按钮数组 |

## 3. Blog 组件映射

### 3.1 Grid.astro / GridItem.astro → blog/post-grid.html, blog/post-card.html

**文章卡片结构:**
```html
<article class="mb-6 transition">
  <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
    <!-- 封面图片 -->
  </div>
  <h3 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">
    <!-- 标题链接 -->
  </h3>
  <p class="text-muted dark:text-slate-400 text-lg">
    <!-- 摘要 -->
  </p>
</article>
```

### 3.2 SinglePost.astro → _default/single.html

**文章详情结构:**
- 元信息: 日期、作者、分类、阅读时间
- 标题: `text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading`
- 摘要: `text-xl md:text-2xl text-muted`
- 内容: `prose prose-md lg:prose-xl dark:prose-invert`
- 标签和分享

### 3.3 Pagination.astro → blog/pagination.html

**Hugo 分页:**
```go
{{ $paginator := .Paginate (where .Site.RegularPages "Section" "posts") }}
```

### 3.4 RelatedPosts.astro → blog/related-posts.html

**Hugo 相关文章:**
```go
{{ $related := .Site.RegularPages.Related . | first 4 }}
```

### 3.5 Tags.astro → blog/tags.html

**标签显示组件**

## 4. Common 组件映射

### 4.1 ToggleTheme.astro → header/theme-toggle.html

**Props:**
- `label`: 无障碍标签
- `class`: 按钮样式类
- `iconClass`: 图标样式类
- `iconName`: 图标名称

**关键属性:** `data-aw-toggle-color-scheme`

### 4.2 ToggleMenu.astro → header/mobile-toggle.html

**汉堡菜单动画:**
- 三条横线变 X 动画
- 使用 CSS transform 实现
- 关键属性: `data-aw-toggle-menu`

### 4.3 Metadata.astro → head/seo.html

**SEO 元数据:**
- Open Graph 标签
- Twitter Cards
- 结构化数据 (JSON-LD)
- hreflang 标签

### 4.4 CommonMeta.astro → head/meta.html

**基础 meta 标签:**
- charset, viewport
- robots
- 主题色

### 4.5 BasicScripts.astro → scripts/main.html

**脚本加载:**
- 主题初始化
- 滚动监听
- 交叉观察器

## 5. UI 组件映射

### 5.1 Button.astro → 内联样式类

**变体映射:**
| 变体 | CSS 类 |
|------|--------|
| `primary` | `.btn-primary` |
| `secondary` | `.btn-secondary` (`.btn`) |
| `tertiary` | `.btn-tertiary` |
| `link` | `cursor-pointer hover:text-primary` |

### 5.2 Headline.astro → 内联模板

**标题组件结构:**
```html
<div class="mb-8 md:mx-auto md:mb-12 text-center max-w-3xl">
  <p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">
    <!-- tagline -->
  </p>
  <h2 class="font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl">
    <!-- title -->
  </h2>
  <p class="mt-4 text-muted text-xl">
    <!-- subtitle -->
  </p>
</div>
```

### 5.3 WidgetWrapper.astro → 区块包装模式

**通用区块结构:**
```html
<section class="relative not-prose scroll-mt-[72px]">
  <div class="absolute inset-0 pointer-events-none -z-1">
    <!-- 背景 -->
  </div>
  <div class="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
    <!-- 内容 -->
  </div>
</section>
```

### 5.4 Background.astro → 背景组件

**暗色背景:**
```html
<div class="absolute inset-0 bg-dark dark:bg-transparent">
  <!-- slot -->
</div>
```

### 5.5 ItemGrid.astro → home/item-grid.html

**网格布局:**
- 2 列: `sm:grid-cols-2`
- 3 列: `lg:grid-cols-3 sm:grid-cols-2`
- 4 列: `lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2`

## 6. 配置参数映射

### 6.1 站点配置

| AstroWind (config.yaml) | Hugo (params.toml) |
|-------------------------|-------------------|
| `site.name` | `title` (hugo.toml) |
| `site.site` | `baseURL` (hugo.toml) |
| `metadata.title.default` | `title` |
| `metadata.description` | `description` |
| `ui.theme` | `features.darkMode` |

### 6.2 博客配置

| AstroWind | Hugo |
|-----------|------|
| `apps.blog.postsPerPage` | `paginate` (hugo.toml) |
| `apps.blog.post.permalink` | `permalinks.posts` |
| `apps.blog.isRelatedPostsEnabled` | `params.blog.relatedPosts` |

## 7. 数据属性映射

### 7.1 交互属性

| AstroWind 属性 | 用途 | Hugo 实现 |
|----------------|------|-----------|
| `data-aw-toggle-color-scheme` | 主题切换 | 保持一致 |
| `data-aw-toggle-menu` | 菜单切换 | 保持一致 |
| `data-aw-sticky-header` | 固定头部 | 保持一致 |

### 7.2 动画属性

| 类名 | 用途 |
|------|------|
| `intersect-once` | 只触发一次动画 |
| `intersect-quarter` | 25% 可见时触发 |
| `intersect-no-queue` | 不排队执行 |
| `motion-safe:md:opacity-0` | 初始透明 |
| `motion-safe:md:intersect:animate-fade` | 进入视口动画 |

## 8. Hugo Partials 完整清单

```
layouts/partials/
├── head/
│   ├── meta.html           # 基础 meta 标签
│   ├── seo.html            # SEO 元数据
│   ├── assets.html         # CSS/JS 资源
│   └── fonts.html          # 字体加载
├── header/
│   ├── main.html           # 主导航
│   ├── logo.html           # Logo
│   ├── nav-menu.html       # 桌面导航
│   ├── mobile-menu.html    # 移动端菜单
│   ├── mobile-toggle.html  # 汉堡按钮
│   ├── theme-toggle.html   # 主题切换
│   └── language-switcher.html  # 语言切换
├── footer/
│   ├── main.html           # 主页脚
│   └── social-links.html   # 社交链接
├── home/
│   ├── hero.html           # Hero 区域
│   ├── features.html       # 功能展示
│   ├── recent-posts.html   # 最新文章
│   ├── cta.html            # 行动号召
│   └── item-grid.html      # 网格布局
├── blog/
│   ├── post-card.html      # 文章卡片
│   ├── post-grid.html      # 文章网格
│   ├── pagination.html     # 分页
│   ├── related-posts.html  # 相关文章
│   ├── tags.html           # 标签
│   ├── toc.html            # 目录
│   └── social-share.html   # 社交分享
├── widgets/
│   ├── headline.html       # 标题组件
│   └── widget-wrapper.html # 区块包装
└── scripts/
    └── main.html           # 脚本加载
```

## 9. 迁移注意事项

### 9.1 Astro 特性替代

| Astro 特性 | Hugo 替代方案 |
|------------|---------------|
| `set:html` | `| safeHTML` |
| `class:list` | `printf` 或条件判断 |
| Slots | Hugo blocks 或 partials |
| Props | Partial 参数 |
| `Astro.url` | `.Permalink` |

### 9.2 图标系统

AstroWind 使用 `astro-icon` 组件，Hugo 需要：
- 使用 SVG 内联
- 或使用 Hugo 的 `resources.Get` 加载 SVG
- 或使用图标字体 (如 Tabler Icons)

### 9.3 图片处理

| AstroWind | Hugo |
|-----------|------|
| `<Image>` 组件 | Hugo 图片处理管道 |
| `widths` prop | `Resize` 方法 |
| `aspectRatio` | CSS aspect-ratio |
| 懒加载 | `loading="lazy"` |
