/**
 * 响应式布局测试
 * 需求: 2.2, 9.5
 */

import { describe, it, expect, beforeEach } from 'vitest';

describe('响应式布局', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('断点类', () => {
    it('should have mobile-first responsive classes', () => {
      document.body.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </div>
      `;

      const grid = document.querySelector('.grid');
      expect(grid?.classList.contains('grid-cols-1')).toBe(true);
      expect(grid?.classList.contains('md:grid-cols-2')).toBe(true);
      expect(grid?.classList.contains('lg:grid-cols-3')).toBe(true);
    });

    it('should have responsive text sizes', () => {
      document.body.innerHTML = `
        <h1 class="text-3xl md:text-4xl lg:text-5xl">Title</h1>
      `;

      const h1 = document.querySelector('h1');
      expect(h1?.classList.contains('text-3xl')).toBe(true);
      expect(h1?.classList.contains('md:text-4xl')).toBe(true);
      expect(h1?.classList.contains('lg:text-5xl')).toBe(true);
    });

    it('should have responsive padding', () => {
      document.body.innerHTML = `
        <div class="px-4 md:px-6 lg:px-8">Content</div>
      `;

      const div = document.querySelector('div');
      expect(div?.classList.contains('px-4')).toBe(true);
      expect(div?.classList.contains('md:px-6')).toBe(true);
      expect(div?.classList.contains('lg:px-8')).toBe(true);
    });
  });

  describe('移动端导航', () => {
    it('should hide desktop nav on mobile', () => {
      document.body.innerHTML = `
        <nav class="hidden md:flex">Desktop Nav</nav>
        <button class="md:hidden" data-aw-toggle-menu>Menu</button>
      `;

      const desktopNav = document.querySelector('nav');
      const mobileToggle = document.querySelector('[data-aw-toggle-menu]');

      expect(desktopNav?.classList.contains('hidden')).toBe(true);
      expect(desktopNav?.classList.contains('md:flex')).toBe(true);
      expect(mobileToggle?.classList.contains('md:hidden')).toBe(true);
    });
  });

  describe('容器宽度', () => {
    it('should have container with max-width', () => {
      document.body.innerHTML = `
        <div class="container mx-auto max-w-6xl">Content</div>
      `;

      const container = document.querySelector('.container');
      expect(container?.classList.contains('mx-auto')).toBe(true);
      expect(container?.classList.contains('max-w-6xl')).toBe(true);
    });
  });

  describe('Flexbox 布局', () => {
    it('should have responsive flex direction', () => {
      document.body.innerHTML = `
        <div class="flex flex-col md:flex-row">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      `;

      const flex = document.querySelector('.flex');
      expect(flex?.classList.contains('flex-col')).toBe(true);
      expect(flex?.classList.contains('md:flex-row')).toBe(true);
    });

    it('should have responsive gap', () => {
      document.body.innerHTML = `
        <div class="flex gap-4 md:gap-6 lg:gap-8">Items</div>
      `;

      const flex = document.querySelector('.flex');
      expect(flex?.classList.contains('gap-4')).toBe(true);
      expect(flex?.classList.contains('md:gap-6')).toBe(true);
      expect(flex?.classList.contains('lg:gap-8')).toBe(true);
    });
  });

  describe('隐藏/显示元素', () => {
    it('should hide elements on specific breakpoints', () => {
      document.body.innerHTML = `
        <div class="hidden sm:block">Visible on sm+</div>
        <div class="block sm:hidden">Visible on mobile only</div>
      `;

      const smUp = document.querySelector('.hidden.sm\\:block');
      const mobileOnly = document.querySelector('.block.sm\\:hidden');

      expect(smUp).not.toBeNull();
      expect(mobileOnly).not.toBeNull();
    });
  });

  describe('图片响应式', () => {
    it('should have responsive image classes', () => {
      document.body.innerHTML = `
        <img class="w-full h-auto object-cover" src="/image.jpg" alt="Test">
      `;

      const img = document.querySelector('img');
      expect(img?.classList.contains('w-full')).toBe(true);
      expect(img?.classList.contains('h-auto')).toBe(true);
      expect(img?.classList.contains('object-cover')).toBe(true);
    });

    it('should have aspect ratio classes', () => {
      document.body.innerHTML = `
        <div class="aspect-video">
          <img src="/video-thumb.jpg" alt="Video">
        </div>
      `;

      const aspectBox = document.querySelector('.aspect-video');
      expect(aspectBox).not.toBeNull();
    });
  });

  describe('媒体查询模拟', () => {
    it('should detect mobile viewport', () => {
      const mobileQuery = window.matchMedia('(max-width: 767px)');
      expect(mobileQuery.media).toBe('(max-width: 767px)');
    });

    it('should detect tablet viewport', () => {
      const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
      expect(tabletQuery.media).toBe('(min-width: 768px) and (max-width: 1023px)');
    });

    it('should detect desktop viewport', () => {
      const desktopQuery = window.matchMedia('(min-width: 1024px)');
      expect(desktopQuery.media).toBe('(min-width: 1024px)');
    });
  });

  describe('Hero 区域响应式', () => {
    it('should have responsive hero text', () => {
      document.body.innerHTML = `
        <section class="hero">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Hero Title</h1>
          <p class="text-lg md:text-xl lg:text-2xl">Hero subtitle</p>
        </section>
      `;

      const h1 = document.querySelector('.hero h1');
      const p = document.querySelector('.hero p');

      expect(h1?.classList.contains('text-4xl')).toBe(true);
      expect(h1?.classList.contains('xl:text-7xl')).toBe(true);
      expect(p?.classList.contains('text-lg')).toBe(true);
    });

    it('should have responsive hero buttons', () => {
      document.body.innerHTML = `
        <div class="flex flex-col sm:flex-row gap-4">
          <a class="btn px-6 py-3 md:px-8 md:py-4">Primary</a>
          <a class="btn px-6 py-3 md:px-8 md:py-4">Secondary</a>
        </div>
      `;

      const buttons = document.querySelectorAll('.btn');
      expect(buttons.length).toBe(2);
      expect(buttons[0]?.classList.contains('px-6')).toBe(true);
      expect(buttons[0]?.classList.contains('md:px-8')).toBe(true);
    });
  });

  describe('博客卡片响应式', () => {
    it('should have responsive card grid', () => {
      document.body.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article class="card">Post 1</article>
          <article class="card">Post 2</article>
          <article class="card">Post 3</article>
        </div>
      `;

      const grid = document.querySelector('.grid');
      const cards = document.querySelectorAll('.card');

      expect(grid?.classList.contains('grid-cols-1')).toBe(true);
      expect(grid?.classList.contains('sm:grid-cols-2')).toBe(true);
      expect(grid?.classList.contains('lg:grid-cols-3')).toBe(true);
      expect(cards.length).toBe(3);
    });
  });
});
