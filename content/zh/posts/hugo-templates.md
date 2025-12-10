---
title: "Hugo 模板系统详解"
description: "掌握 Hugo 的 Go 模板语法和最佳实践"
date: 2024-01-25
draft: false
translationKey: "hugo-templates"
categories:
  - 技术
tags:
  - Hugo
  - Go 模板
  - 静态网站
author: "HugoWind 团队"
---

## Hugo 模板基础

Hugo 使用 Go 的 `text/template` 和 `html/template` 库作为模板引擎。

### 基本语法

```go-html-template
{{ .Title }}
{{ .Content }}
{{ range .Pages }}
  <h2>{{ .Title }}</h2>
{{ end }}
```

### 模板类型

1. **baseof.html** - 基础模板
2. **list.html** - 列表页模板
3. **single.html** - 单页模板
4. **partials/** - 可复用组件

### 条件语句

```go-html-template
{{ if .Params.featured }}
  <span class="badge">Featured</span>
{{ end }}
```

### 循环

```go-html-template
{{ range .Site.RegularPages }}
  <article>{{ .Title }}</article>
{{ end }}
```
