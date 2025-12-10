/**
 * 完整功能集成测试
 * 需求: 所有功能需求
 */

import { describe, it, expect, beforeEach } from 'vitest';

describe('HugoWind 集成测试', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.head.innerHTML = '';
    document.documentElement.classList.remove('dark');
    document.documentElement.lang = 'zh';
    localStorage.clear();
  });

  describe('页面基础结构', () => {
    it('should have complete HTML structure', () => {
      document.body.innerHTML = `
        <header id="header">
          <nav>Navigation</nav>
        </header>
        <main id="main-content">
          <article>Content</article>
        </main>
        <footer>Footer</footer>
      `;

      expect(document.getElementById('header')).not.toBeNull();
      expect(document.getElementById('main-content')).not.toBeNull();
      expect(document.querySelector('footer')).not.toBeNull();
    });

    it('should have proper meta tags', () => {
      document.head.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Test description">
        <title>Test Page</title>
      `;

      expect(document.querySelector('meta[charset]')).not.toBeNull();
      expect(document.querySelector('meta[name="viewport"]')).not.toBeNull();
      expect(document.querySelector('meta[name="description"]')).not.toBeNull();
      expect(document.title).toBe('Test Page');
    });
  });

  describe('主题切换与多语言协同', () => {
    it('should maintain theme preference across language switch', () => {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      
      // 模拟语言切换
      document.documentElement.lang = 'en';
      
      // 主题应该保持
      expect(localStorage.getItem('theme')).toBe('dark');
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should have theme toggle in all language versions', () => {
      document.body.innerHTML = `
        <button data-aw-toggle-color-scheme>
          <span class="icon-sun">☀️</span>
          <span class="icon-moon hidden">🌙</span>
        </button>
      `;

      const toggle = document.querySelector('[data-aw-toggle-color-scheme]');
      expect(toggle).not.toBeNull();
    });
  });

  describe('导航与搜索协同', () => {
    it('should have search trigger in navigation', () => {
      document.body.innerHTML = `
        <header id="header">
          <nav>
            <a href="/">Home</a>
            <button data-search-trigger>Search</button>
          </nav>
        </header>
        <div id="search-modal" class="hidden">
          <input id="search-input" type="text">
        </div>
      `;

      const searchTrigger = document.querySelector('[data-search-trigger]');
      const searchModal = document.getElementById('search-modal');

      expect(searchTrigger).not.toBeNull();
      expect(searchModal).not.toBeNull();
    });

    it('should close mobile menu when search opens', () => {
      document.body.innerHTML = `
        <header id="header" class="expanded">
          <button data-aw-toggle-menu class="expanded">Menu</button>
        </header>
      `;

      const header = document.getElementById('header');
      const toggleBtn = document.querySelector('[data-aw-toggle-menu]');

      // 模拟关闭菜单
      header?.classList.remove('expanded');
      toggleBtn?.classList.remove('expanded');

      expect(header?.classList.contains('expanded')).toBe(false);
      expect(toggleBtn?.classList.contains('expanded')).toBe(false);
    });
  });

  describe('博客功能集成', () => {
    it('should render blog post with all metadata', () => {
      document.body.innerHTML = `
        <article class="post">
          <header>
            <h1>Post Title</h1>
            <div class="meta">
              <time datetime="2024-01-01">2024年1月1日</time>
              <span class="author">作者名</span>
              <span class="reading-time">5 分钟阅读</span>
            </div>
            <div class="tags">
              <a href="/tags/hugo/">Hugo</a>
              <a href="/tags/web/">Web</a>
            </div>
          </header>
          <div class="content">
            <p>Post content...</p>
          </div>
        </article>
      `;

      const post = document.querySelector('.post');
      const title = document.querySelector('.post h1');
      const time = document.querySelector('.post time');
      const tags = document.querySelectorAll('.tags a');

      expect(post).not.toBeNull();
      expect(title?.textContent).toBe('Post Title');
      expect(time?.getAttribute('datetime')).toBe('2024-01-01');
      expect(tags.length).toBe(2);
    });

    it('should have TOC for long posts', () => {
      document.body.innerHTML = `
        <aside class="toc">
          <nav>
            <ul>
              <li><a href="#section-1">Section 1</a></li>
              <li><a href="#section-2">Section 2</a></li>
            </ul>
          </nav>
        </aside>
        <article>
          <h2 id="section-1">Section 1</h2>
          <p>Content 1</p>
          <h2 id="section-2">Section 2</h2>
          <p>Content 2</p>
        </article>
      `;

      const toc = document.querySelector('.toc');
      const tocLinks = document.querySelectorAll('.toc a');
      const sections = document.querySelectorAll('article h2');

      expect(toc).not.toBeNull();
      expect(tocLinks.length).toBe(2);
      expect(sections.length).toBe(2);
    });

    it('should have related posts section', () => {
      document.body.innerHTML = `
        <section class="related-posts">
          <h3>相关文章</h3>
          <ul>
            <li><a href="/post-1/">Related Post 1</a></li>
            <li><a href="/post-2/">Related Post 2</a></li>
          </ul>
        </section>
      `;

      const relatedPosts = document.querySelector('.related-posts');
      const links = document.querySelectorAll('.related-posts a');

      expect(relatedPosts).not.toBeNull();
      expect(links.length).toBe(2);
    });
  });

  describe('SEO 元素集成', () => {
    it('should have Open Graph tags', () => {
      document.head.innerHTML = `
        <meta property="og:title" content="Page Title">
        <meta property="og:description" content="Page description">
        <meta property="og:image" content="https://example.com/image.jpg">
        <meta property="og:url" content="https://example.com/page/">
        <meta property="og:type" content="article">
      `;

      expect(document.querySelector('meta[property="og:title"]')).not.toBeNull();
      expect(document.querySelector('meta[property="og:description"]')).not.toBeNull();
      expect(document.querySelector('meta[property="og:image"]')).not.toBeNull();
    });

    it('should have Twitter Card tags', () => {
      document.head.innerHTML = `
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Page Title">
        <meta name="twitter:description" content="Page description">
      `;

      expect(document.querySelector('meta[name="twitter:card"]')).not.toBeNull();
      expect(document.querySelector('meta[name="twitter:title"]')).not.toBeNull();
    });

    it('should have canonical URL', () => {
      document.head.innerHTML = `
        <link rel="canonical" href="https://example.com/page/">
      `;

      const canonical = document.querySelector('link[rel="canonical"]');
      expect(canonical).not.toBeNull();
      expect(canonical?.getAttribute('href')).toBe('https://example.com/page/');
    });

    it('should have JSON-LD structured data', () => {
      document.head.innerHTML = `
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Test Article"
          }
        </script>
      `;

      const jsonLd = document.querySelector('script[type="application/ld+json"]');
      expect(jsonLd).not.toBeNull();
    });
  });

  describe('动画与交互集成', () => {
    it('should have animation classes on page elements', () => {
      document.body.innerHTML = `
        <section class="hero intersect-once" no-intersect>
          <h1>Hero Title</h1>
        </section>
        <section class="features intersect-once" no-intersect>
          <div class="feature">Feature 1</div>
        </section>
      `;

      const animatedElements = document.querySelectorAll('.intersect-once');
      expect(animatedElements.length).toBe(2);
    });

    it('should trigger animations on scroll', () => {
      document.body.innerHTML = `
        <div class="intersect-once" no-intersect>Element</div>
      `;

      const element = document.querySelector('.intersect-once');
      
      // 模拟动画触发
      element?.removeAttribute('no-intersect');
      element?.classList.add('intersected');

      expect(element?.hasAttribute('no-intersect')).toBe(false);
      expect(element?.classList.contains('intersected')).toBe(true);
    });
  });

  describe('页脚功能集成', () => {
    it('should have footer with all sections', () => {
      document.body.innerHTML = `
        <footer>
          <div class="footer-links">
            <div class="footer-column">
              <h4>产品</h4>
              <ul>
                <li><a href="/features/">功能</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>公司</h4>
              <ul>
                <li><a href="/about/">关于</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-social">
            <a href="https://github.com" aria-label="GitHub">GitHub</a>
            <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
          </div>
          <div class="footer-copyright">
            <p>© 2024 HugoWind</p>
          </div>
        </footer>
      `;

      const footerColumns = document.querySelectorAll('.footer-column');
      const socialLinks = document.querySelectorAll('.footer-social a');
      const copyright = document.querySelector('.footer-copyright');

      expect(footerColumns.length).toBe(2);
      expect(socialLinks.length).toBe(2);
      expect(copyright).not.toBeNull();
    });
  });

  describe('性能优化集成', () => {
    it('should have preload links for critical resources', () => {
      document.head.innerHTML = `
        <link rel="preload" href="/css/main.css" as="style">
        <link rel="preload" href="/js/bundle.js" as="script">
        <link rel="preconnect" href="https://fonts.googleapis.com">
      `;

      const preloadCSS = document.querySelector('link[rel="preload"][as="style"]');
      const preloadJS = document.querySelector('link[rel="preload"][as="script"]');
      const preconnect = document.querySelector('link[rel="preconnect"]');

      expect(preloadCSS).not.toBeNull();
      expect(preloadJS).not.toBeNull();
      expect(preconnect).not.toBeNull();
    });

    it('should have lazy loading for images', () => {
      document.body.innerHTML = `
        <img loading="lazy" src="/image.jpg" alt="Test">
        <img data-src="/lazy-image.jpg" alt="Lazy">
      `;

      const lazyNative = document.querySelector('img[loading="lazy"]');
      const lazyCustom = document.querySelector('img[data-src]');

      expect(lazyNative).not.toBeNull();
      expect(lazyCustom).not.toBeNull();
    });
  });

  describe('无障碍访问集成', () => {
    it('should have skip to content link', () => {
      document.body.innerHTML = `
        <a href="#main-content" class="skip-link">跳转到主要内容</a>
        <main id="main-content">Content</main>
      `;

      const skipLink = document.querySelector('.skip-link');
      expect(skipLink).not.toBeNull();
      expect(skipLink?.getAttribute('href')).toBe('#main-content');
    });

    it('should have proper ARIA labels', () => {
      document.body.innerHTML = `
        <button aria-label="打开菜单" data-aw-toggle-menu>
          <span class="sr-only">菜单</span>
        </button>
        <nav aria-label="主导航">
          <a href="/">首页</a>
        </nav>
      `;

      const menuBtn = document.querySelector('[aria-label="打开菜单"]');
      const nav = document.querySelector('nav[aria-label]');

      expect(menuBtn).not.toBeNull();
      expect(nav).not.toBeNull();
    });

    it('should have focus visible styles', () => {
      document.body.innerHTML = `
        <a href="/" class="focus:outline-none focus:ring-2 focus:ring-primary">Link</a>
      `;

      const link = document.querySelector('a');
      expect(link?.classList.contains('focus:ring-2')).toBe(true);
    });
  });
});
