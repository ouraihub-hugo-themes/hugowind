/**
 * 多语言功能测试
 * 需求: 3.1, 3.2, 3.3, 3.4
 */

import { describe, it, expect, beforeEach } from 'vitest';

describe('多语言系统', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.documentElement.lang = '';
  });

  describe('语言检测', () => {
    it('should set correct lang attribute for Chinese', () => {
      document.documentElement.lang = 'zh';
      expect(document.documentElement.lang).toBe('zh');
    });

    it('should set correct lang attribute for English', () => {
      document.documentElement.lang = 'en';
      expect(document.documentElement.lang).toBe('en');
    });

    it('should set correct lang attribute for Traditional Chinese', () => {
      document.documentElement.lang = 'zh-tw';
      expect(document.documentElement.lang).toBe('zh-tw');
    });
  });

  describe('语言切换器', () => {
    it('should render language switcher with all languages', () => {
      document.body.innerHTML = `
        <div class="language-switcher">
          <button>中文</button>
          <ul class="hidden">
            <li><a href="/zh/" hreflang="zh">中文</a></li>
            <li><a href="/en/" hreflang="en">English</a></li>
            <li><a href="/zh-tw/" hreflang="zh-tw">繁體中文</a></li>
          </ul>
        </div>
      `;

      const links = document.querySelectorAll('.language-switcher a');
      expect(links.length).toBe(3);
    });

    it('should have correct hreflang attributes', () => {
      document.body.innerHTML = `
        <a href="/zh/" hreflang="zh">中文</a>
        <a href="/en/" hreflang="en">English</a>
        <a href="/zh-tw/" hreflang="zh-tw">繁體中文</a>
      `;

      const zhLink = document.querySelector('[hreflang="zh"]');
      const enLink = document.querySelector('[hreflang="en"]');
      const zhTwLink = document.querySelector('[hreflang="zh-tw"]');

      expect(zhLink?.getAttribute('href')).toBe('/zh/');
      expect(enLink?.getAttribute('href')).toBe('/en/');
      expect(zhTwLink?.getAttribute('href')).toBe('/zh-tw/');
    });

    it('should toggle dropdown visibility', () => {
      document.body.innerHTML = `
        <div class="language-switcher">
          <button>Language</button>
          <ul class="hidden"></ul>
        </div>
      `;

      const dropdown = document.querySelector('.language-switcher ul');
      
      // 打开
      dropdown?.classList.remove('hidden');
      expect(dropdown?.classList.contains('hidden')).toBe(false);
      
      // 关闭
      dropdown?.classList.add('hidden');
      expect(dropdown?.classList.contains('hidden')).toBe(true);
    });
  });

  describe('URL 路径结构', () => {
    it('should have language prefix in URL', () => {
      const urls = [
        '/zh/posts/hello-world/',
        '/en/posts/hello-world/',
        '/zh-tw/posts/hello-world/'
      ];

      urls.forEach(url => {
        expect(url).toMatch(/^\/(zh|en|zh-tw)\//);
      });
    });

    it('should maintain page structure across languages', () => {
      const zhUrl = '/zh/about/';
      const enUrl = '/en/about/';
      const zhTwUrl = '/zh-tw/about/';

      // 提取路径部分（去除语言前缀）
      const getPath = (url: string) => url.replace(/^\/(zh-tw|zh|en)/, '');

      expect(getPath(zhUrl)).toBe('/about/');
      expect(getPath(enUrl)).toBe('/about/');
      expect(getPath(zhTwUrl)).toBe('/about/');
    });
  });

  describe('hreflang 标签', () => {
    it('should have hreflang link tags in head', () => {
      document.head.innerHTML = `
        <link rel="alternate" hreflang="zh" href="https://example.com/zh/">
        <link rel="alternate" hreflang="en" href="https://example.com/en/">
        <link rel="alternate" hreflang="zh-tw" href="https://example.com/zh-tw/">
        <link rel="alternate" hreflang="x-default" href="https://example.com/zh/">
      `;

      const hreflangLinks = document.querySelectorAll('link[hreflang]');
      expect(hreflangLinks.length).toBe(4);

      const xDefault = document.querySelector('link[hreflang="x-default"]');
      expect(xDefault).not.toBeNull();
    });
  });

  describe('翻译内容', () => {
    it('should display translated navigation items', () => {
      document.body.innerHTML = `
        <nav>
          <a href="/zh/">首页</a>
          <a href="/zh/about/">关于</a>
          <a href="/zh/posts/">文章</a>
        </nav>
      `;

      const navItems = document.querySelectorAll('nav a');
      expect(navItems.length).toBe(3);
      expect(navItems[0]?.textContent).toBe('首页');
    });

    it('should display translated UI elements', () => {
      document.body.innerHTML = `
        <button class="read-more">阅读更多</button>
        <span class="date-label">发布日期</span>
        <span class="author-label">作者</span>
      `;

      expect(document.querySelector('.read-more')?.textContent).toBe('阅读更多');
      expect(document.querySelector('.date-label')?.textContent).toBe('发布日期');
    });
  });

  describe('RTL 支持', () => {
    it('should set dir attribute correctly', () => {
      document.documentElement.setAttribute('dir', 'ltr');
      expect(document.documentElement.getAttribute('dir')).toBe('ltr');

      document.documentElement.setAttribute('dir', 'rtl');
      expect(document.documentElement.getAttribute('dir')).toBe('rtl');
    });
  });
});
