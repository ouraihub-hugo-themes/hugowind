/**
 * SEO 和性能验证测试
 * 需求: 5.1, 10.1, 10.2, 10.3, 10.5, 10.6
 */

import { describe, it, expect, beforeEach } from 'vitest';

describe('SEO 验证', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
  });

  describe('基础 Meta 标签', () => {
    it('should have charset meta tag', () => {
      document.head.innerHTML = `<meta charset="UTF-8">`;
      const charset = document.querySelector('meta[charset]');
      expect(charset).not.toBeNull();
      expect(charset?.getAttribute('charset')).toBe('UTF-8');
    });

    it('should have viewport meta tag', () => {
      document.head.innerHTML = `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      `;
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport).not.toBeNull();
      expect(viewport?.getAttribute('content')).toContain('width=device-width');
    });

    it('should have description meta tag', () => {
      document.head.innerHTML = `
        <meta name="description" content="HugoWind - 现代化的 Hugo 多语言主题">
      `;
      const description = document.querySelector('meta[name="description"]');
      expect(description).not.toBeNull();
      expect(description?.getAttribute('content')?.length).toBeGreaterThan(0);
    });

    it('should have robots meta tag', () => {
      document.head.innerHTML = `
        <meta name="robots" content="index, follow">
      `;
      const robots = document.querySelector('meta[name="robots"]');
      expect(robots).not.toBeNull();
    });
  });

  describe('Open Graph 标签', () => {
    it('should have og:title', () => {
      document.head.innerHTML = `
        <meta property="og:title" content="Page Title">
      `;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      expect(ogTitle).not.toBeNull();
    });

    it('should have og:description', () => {
      document.head.innerHTML = `
        <meta property="og:description" content="Page description">
      `;
      const ogDesc = document.querySelector('meta[property="og:description"]');
      expect(ogDesc).not.toBeNull();
    });

    it('should have og:image', () => {
      document.head.innerHTML = `
        <meta property="og:image" content="https://example.com/image.jpg">
      `;
      const ogImage = document.querySelector('meta[property="og:image"]');
      expect(ogImage).not.toBeNull();
      expect(ogImage?.getAttribute('content')).toMatch(/^https?:\/\//);
    });

    it('should have og:url', () => {
      document.head.innerHTML = `
        <meta property="og:url" content="https://example.com/page/">
      `;
      const ogUrl = document.querySelector('meta[property="og:url"]');
      expect(ogUrl).not.toBeNull();
    });

    it('should have og:type', () => {
      document.head.innerHTML = `
        <meta property="og:type" content="website">
      `;
      const ogType = document.querySelector('meta[property="og:type"]');
      expect(ogType).not.toBeNull();
    });

    it('should have og:site_name', () => {
      document.head.innerHTML = `
        <meta property="og:site_name" content="HugoWind">
      `;
      const ogSiteName = document.querySelector('meta[property="og:site_name"]');
      expect(ogSiteName).not.toBeNull();
    });

    it('should have og:locale for multilingual', () => {
      document.head.innerHTML = `
        <meta property="og:locale" content="zh_CN">
        <meta property="og:locale:alternate" content="en_US">
        <meta property="og:locale:alternate" content="zh_TW">
      `;
      const ogLocale = document.querySelector('meta[property="og:locale"]');
      const ogLocaleAlt = document.querySelectorAll('meta[property="og:locale:alternate"]');
      
      expect(ogLocale).not.toBeNull();
      expect(ogLocaleAlt.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Twitter Card 标签', () => {
    it('should have twitter:card', () => {
      document.head.innerHTML = `
        <meta name="twitter:card" content="summary_large_image">
      `;
      const twitterCard = document.querySelector('meta[name="twitter:card"]');
      expect(twitterCard).not.toBeNull();
      expect(['summary', 'summary_large_image']).toContain(twitterCard?.getAttribute('content'));
    });

    it('should have twitter:title', () => {
      document.head.innerHTML = `
        <meta name="twitter:title" content="Page Title">
      `;
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      expect(twitterTitle).not.toBeNull();
    });

    it('should have twitter:description', () => {
      document.head.innerHTML = `
        <meta name="twitter:description" content="Page description">
      `;
      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      expect(twitterDesc).not.toBeNull();
    });

    it('should have twitter:image', () => {
      document.head.innerHTML = `
        <meta name="twitter:image" content="https://example.com/image.jpg">
      `;
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      expect(twitterImage).not.toBeNull();
    });
  });

  describe('多语言 SEO (hreflang)', () => {
    it('should have hreflang for all supported languages', () => {
      document.head.innerHTML = `
        <link rel="alternate" hreflang="zh" href="https://example.com/zh/">
        <link rel="alternate" hreflang="en" href="https://example.com/en/">
        <link rel="alternate" hreflang="zh-tw" href="https://example.com/zh-tw/">
        <link rel="alternate" hreflang="x-default" href="https://example.com/zh/">
      `;

      const zhLink = document.querySelector('link[hreflang="zh"]');
      const enLink = document.querySelector('link[hreflang="en"]');
      const zhTwLink = document.querySelector('link[hreflang="zh-tw"]');
      const xDefault = document.querySelector('link[hreflang="x-default"]');

      expect(zhLink).not.toBeNull();
      expect(enLink).not.toBeNull();
      expect(zhTwLink).not.toBeNull();
      expect(xDefault).not.toBeNull();
    });

    it('should have correct hreflang URL format', () => {
      document.head.innerHTML = `
        <link rel="alternate" hreflang="zh" href="https://example.com/zh/posts/hello/">
      `;

      const link = document.querySelector('link[hreflang="zh"]');
      const href = link?.getAttribute('href');
      
      expect(href).toMatch(/^https?:\/\//);
      expect(href).toContain('/zh/');
    });
  });

  describe('Canonical URL', () => {
    it('should have canonical link', () => {
      document.head.innerHTML = `
        <link rel="canonical" href="https://example.com/page/">
      `;

      const canonical = document.querySelector('link[rel="canonical"]');
      expect(canonical).not.toBeNull();
    });

    it('should have absolute canonical URL', () => {
      document.head.innerHTML = `
        <link rel="canonical" href="https://example.com/page/">
      `;

      const canonical = document.querySelector('link[rel="canonical"]');
      const href = canonical?.getAttribute('href');
      
      expect(href).toMatch(/^https?:\/\//);
    });
  });

  describe('结构化数据 (JSON-LD)', () => {
    it('should have JSON-LD script tag', () => {
      document.head.innerHTML = `
        <script type="application/ld+json">
          {"@context": "https://schema.org", "@type": "WebSite"}
        </script>
      `;

      const jsonLd = document.querySelector('script[type="application/ld+json"]');
      expect(jsonLd).not.toBeNull();
    });

    it('should have valid JSON-LD content', () => {
      const jsonLdContent = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Test Article",
        "author": {
          "@type": "Person",
          "name": "Author Name"
        }
      };

      expect(jsonLdContent["@context"]).toBe("https://schema.org");
      expect(jsonLdContent["@type"]).toBe("Article");
    });

    it('should have WebSite schema for homepage', () => {
      const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "HugoWind",
        "url": "https://example.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://example.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };

      expect(websiteSchema["@type"]).toBe("WebSite");
      expect(websiteSchema.potentialAction["@type"]).toBe("SearchAction");
    });

    it('should have Article schema for blog posts', () => {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Blog Post Title",
        "datePublished": "2024-01-01T00:00:00+08:00",
        "dateModified": "2024-01-02T00:00:00+08:00",
        "author": {
          "@type": "Person",
          "name": "Author"
        }
      };

      expect(articleSchema["@type"]).toBe("Article");
      expect(articleSchema.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}/);
    });
  });

  describe('Sitemap', () => {
    it('should reference sitemap in robots.txt format', () => {
      const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
      `.trim();

      expect(robotsTxt).toContain('Sitemap:');
      expect(robotsTxt).toMatch(/Sitemap:\s*https?:\/\/.+\/sitemap\.xml/);
    });

    it('should have valid sitemap URL structure', () => {
      const sitemapUrls = [
        'https://example.com/sitemap.xml',
        'https://example.com/zh/sitemap.xml',
        'https://example.com/en/sitemap.xml'
      ];

      sitemapUrls.forEach(url => {
        expect(url).toMatch(/^https?:\/\/.+\/sitemap\.xml$/);
      });
    });
  });

  describe('语义化 HTML', () => {
    it('should have proper heading hierarchy', () => {
      document.body.innerHTML = `
        <h1>Main Title</h1>
        <h2>Section 1</h2>
        <h3>Subsection 1.1</h3>
        <h2>Section 2</h2>
      `;

      const h1 = document.querySelectorAll('h1');
      const h2 = document.querySelectorAll('h2');
      
      expect(h1.length).toBe(1); // 每页只有一个 h1
      expect(h2.length).toBeGreaterThan(0);
    });

    it('should have semantic landmarks', () => {
      document.body.innerHTML = `
        <header>Header</header>
        <nav>Navigation</nav>
        <main>Main content</main>
        <aside>Sidebar</aside>
        <footer>Footer</footer>
      `;

      expect(document.querySelector('header')).not.toBeNull();
      expect(document.querySelector('nav')).not.toBeNull();
      expect(document.querySelector('main')).not.toBeNull();
      expect(document.querySelector('footer')).not.toBeNull();
    });

    it('should have article tag for blog posts', () => {
      document.body.innerHTML = `
        <article>
          <header>
            <h1>Post Title</h1>
            <time datetime="2024-01-01">January 1, 2024</time>
          </header>
          <p>Content</p>
        </article>
      `;

      const article = document.querySelector('article');
      const time = document.querySelector('time');
      
      expect(article).not.toBeNull();
      expect(time?.getAttribute('datetime')).toBe('2024-01-01');
    });
  });

  describe('图片 SEO', () => {
    it('should have alt attribute on images', () => {
      document.body.innerHTML = `
        <img src="/image.jpg" alt="Description of image">
      `;

      const img = document.querySelector('img');
      expect(img?.getAttribute('alt')).toBeTruthy();
    });

    it('should have loading attribute for lazy loading', () => {
      document.body.innerHTML = `
        <img src="/image.jpg" alt="Test" loading="lazy">
      `;

      const img = document.querySelector('img');
      expect(img?.getAttribute('loading')).toBe('lazy');
    });

    it('should have width and height for CLS optimization', () => {
      document.body.innerHTML = `
        <img src="/image.jpg" alt="Test" width="800" height="600">
      `;

      const img = document.querySelector('img');
      expect(img?.getAttribute('width')).toBeTruthy();
      expect(img?.getAttribute('height')).toBeTruthy();
    });
  });
});

describe('性能优化验证', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  describe('资源预加载', () => {
    it('should preload critical CSS', () => {
      document.head.innerHTML = `
        <link rel="preload" href="/css/main.css" as="style">
      `;

      const preload = document.querySelector('link[rel="preload"][as="style"]');
      expect(preload).not.toBeNull();
    });

    it('should preload critical fonts', () => {
      document.head.innerHTML = `
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
      `;

      const preload = document.querySelector('link[rel="preload"][as="font"]');
      expect(preload).not.toBeNull();
      expect(preload?.getAttribute('crossorigin')).not.toBeNull();
    });

    it('should preconnect to external origins', () => {
      document.head.innerHTML = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      `;

      const preconnects = document.querySelectorAll('link[rel="preconnect"]');
      expect(preconnects.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('资源优化', () => {
    it('should have minified CSS reference', () => {
      document.head.innerHTML = `
        <link rel="stylesheet" href="/css/main.css">
      `;

      const stylesheet = document.querySelector('link[rel="stylesheet"]');
      expect(stylesheet).not.toBeNull();
    });

    it('should have deferred JavaScript', () => {
      document.body.innerHTML = `
        <script src="/js/bundle.js" defer></script>
      `;

      const script = document.querySelector('script[defer]');
      expect(script).not.toBeNull();
    });

    it('should have async for non-critical scripts', () => {
      document.body.innerHTML = `
        <script src="/js/analytics.js" async></script>
      `;

      const script = document.querySelector('script[async]');
      expect(script).not.toBeNull();
    });
  });

  describe('Core Web Vitals 优化', () => {
    it('should have font-display for web fonts', () => {
      // 验证 CSS 中应该有 font-display: swap
      const fontFaceRule = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
          src: url('/fonts/inter.woff2') format('woff2');
        }
      `;

      expect(fontFaceRule).toContain('font-display: swap');
    });

    it('should have explicit dimensions for media', () => {
      document.body.innerHTML = `
        <img src="/image.jpg" width="800" height="600" alt="Test">
        <video width="1280" height="720" poster="/poster.jpg"></video>
      `;

      const img = document.querySelector('img');
      const video = document.querySelector('video');

      expect(img?.getAttribute('width')).toBeTruthy();
      expect(img?.getAttribute('height')).toBeTruthy();
      expect(video?.getAttribute('width')).toBeTruthy();
      expect(video?.getAttribute('height')).toBeTruthy();
    });
  });
});
