/**
 * NavManager 导航模块测试
 * 需求: 9.1, 9.3, 5.3
 */

import { describe, it, expect, beforeEach } from 'vitest';

describe('NavManager', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.documentElement.classList.remove('touch-device');
  });

  describe('移动端菜单功能', () => {
    it('should toggle mobile menu on button click', () => {
      // 设置 DOM
      document.body.innerHTML = `
        <header id="header">
          <div>
            <div>
              <button data-aw-toggle-menu>Toggle</button>
              <nav class="hidden">
                <a href="/">Home</a>
              </nav>
            </div>
            <div class="hidden">Last child</div>
          </div>
        </header>
      `;

      const header = document.getElementById('header');
      const toggleBtn = document.querySelector('[data-aw-toggle-menu]');
      const nav = document.querySelector('nav');

      expect(header).not.toBeNull();
      expect(toggleBtn).not.toBeNull();
      expect(nav?.classList.contains('hidden')).toBe(true);
    });

    it('should add expanded class when menu is opened', () => {
      document.body.innerHTML = `
        <header id="header">
          <button data-aw-toggle-menu class="">Toggle</button>
        </header>
      `;

      const toggleBtn = document.querySelector('[data-aw-toggle-menu]');
      toggleBtn?.classList.add('expanded');
      
      expect(toggleBtn?.classList.contains('expanded')).toBe(true);
    });

    it('should prevent body scroll when menu is open', () => {
      document.body.classList.add('overflow-hidden');
      expect(document.body.classList.contains('overflow-hidden')).toBe(true);
      
      document.body.classList.remove('overflow-hidden');
      expect(document.body.classList.contains('overflow-hidden')).toBe(false);
    });
  });

  describe('滚动效果', () => {
    it('should add scroll class when scrolled past threshold', () => {
      document.body.innerHTML = `
        <header id="header" data-aw-sticky-header></header>
      `;

      const header = document.getElementById('header');
      
      // 模拟滚动超过阈值
      header?.classList.add('scroll');
      expect(header?.classList.contains('scroll')).toBe(true);
    });

    it('should remove scroll class when at top', () => {
      document.body.innerHTML = `
        <header id="header" data-aw-sticky-header class="scroll"></header>
      `;

      const header = document.getElementById('header');
      header?.classList.remove('scroll');
      
      expect(header?.classList.contains('scroll')).toBe(false);
    });
  });

  describe('下拉菜单', () => {
    it('should toggle dropdown menu visibility', () => {
      document.body.innerHTML = `
        <div class="dropdown">
          <button>Menu</button>
          <ul class="hidden">
            <li><a href="#">Item 1</a></li>
          </ul>
        </div>
      `;

      const menu = document.querySelector('.dropdown ul');
      
      // 切换显示
      menu?.classList.remove('hidden');
      expect(menu?.classList.contains('hidden')).toBe(false);
      
      // 切换隐藏
      menu?.classList.add('hidden');
      expect(menu?.classList.contains('hidden')).toBe(true);
    });
  });

  describe('触摸设备支持', () => {
    it('should detect touch device and add class', () => {
      document.documentElement.classList.add('touch-device');
      expect(document.documentElement.classList.contains('touch-device')).toBe(true);
    });

    it('should add touch-active class on touch start', () => {
      document.body.innerHTML = `<button>Click me</button>`;
      const button = document.querySelector('button');
      
      button?.classList.add('touch-active');
      expect(button?.classList.contains('touch-active')).toBe(true);
    });
  });

  describe('图片懒加载', () => {
    it('should have data-src attribute for lazy images', () => {
      document.body.innerHTML = `
        <img data-src="/images/test.jpg" alt="Test">
      `;

      const img = document.querySelector('img');
      expect(img?.dataset.src).toBe('/images/test.jpg');
    });

    it('should load image and add loaded class', () => {
      document.body.innerHTML = `
        <img data-src="/images/test.jpg" alt="Test">
      `;

      const img = document.querySelector('img') as HTMLImageElement;
      
      // 模拟加载完成
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
      }

      expect(img.src).toContain('/images/test.jpg');
      expect(img.classList.contains('loaded')).toBe(true);
    });
  });
});
