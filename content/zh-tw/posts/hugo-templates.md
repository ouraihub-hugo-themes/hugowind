---
title: "Hugo 模板系統詳解"
description: "掌握 Hugo 的 Go 模板語法和最佳實踐"
date: 2024-01-25
draft: false
translationKey: "hugo-templates"
categories:
  - 技術
tags:
  - Hugo
  - Go 模板
  - 靜態網站
author: "HugoWind 團隊"
---

## Hugo 模板基礎

Hugo 使用 Go 的 `text/template` 和 `html/template` 函式庫作為模板引擎。

### 基本語法

```go-html-template
{{ .Title }}
{{ .Content }}
{{ range .Pages }}
  <h2>{{ .Title }}</h2>
{{ end }}
```

### 模板類型

1. **baseof.html** - 基礎模板
2. **list.html** - 列表頁模板
3. **single.html** - 單頁模板
4. **partials/** - 可複用元件

### 條件語句

```go-html-template
{{ if .Params.featured }}
  <span class="badge">Featured</span>
{{ end }}
```

### 迴圈

```go-html-template
{{ range .Site.RegularPages }}
  <article>{{ .Title }}</article>
{{ end }}
```
