---
title: "Tailwind CSS 實用指南"
description: "深入瞭解 Tailwind CSS 的核心概念和最佳實踐"
date: 2024-01-20
draft: false
translationKey: "tailwind-css-guide"
categories:
  - 教學
tags:
  - Tailwind CSS
  - CSS
  - 前端開發
author: "HugoWind 團隊"
---

## 什麼是 Tailwind CSS？

Tailwind CSS 是一個功能類優先的 CSS 框架，它提供了大量的原子類，讓您可以直接在 HTML 中建構自訂設計。

### 核心概念

1. **功能類優先** - 使用預定義的類別來建構設計
2. **響應式設計** - 內建的響應式斷點
3. **深色模式** - 簡單的深色模式支援
4. **自訂設定** - 高度可自訂的設定系統

### 範例程式碼

```html
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
    Hello Tailwind!
  </h2>
</div>
```

### 最佳實踐

- 使用元件抽象重複的樣式
- 利用 `@apply` 指令建立自訂類別
- 設定設計令牌以保持一致性
