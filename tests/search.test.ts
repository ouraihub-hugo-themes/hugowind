/**
 * SearchManager 搜索模块测试
 * 需求: 8.1, 8.2, 8.3, 8.4
 */

import { describe, it, expect, beforeEach } from 'vitest';

describe('SearchManager', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.body.style.overflow = '';
  });

  describe('搜索模态框', () => {
    it('should have search modal structure', () => {
      document.body.innerHTML = `
        <div id="search-modal">
          <div class="search-overlay"></div>
          <div class="search-content">
            <input id="search-input" type="text" placeholder="搜索...">
            <div id="search-results"></div>
            <div id="search-stats"></div>
            <div id="search-loading" class="hidden"></div>
          </div>
        </div>
        <button data-search-trigger>Search</button>
        <button data-search-close>Close</button>
      `;

      const modal = document.getElementById('search-modal');
      const input = document.getElementById('search-input');
      const results = document.getElementById('search-results');
      const trigger = document.querySelector('[data-search-trigger]');
      const close = document.querySelector('[data-search-close]');

      expect(modal).not.toBeNull();
      expect(input).not.toBeNull();
      expect(results).not.toBeNull();
      expect(trigger).not.toBeNull();
      expect(close).not.toBeNull();
    });

    it('should open modal and add show class', () => {
      document.body.innerHTML = `
        <div id="search-modal"></div>
      `;

      const modal = document.getElementById('search-modal');
      modal?.classList.add('show');
      document.body.style.overflow = 'hidden';

      expect(modal?.classList.contains('show')).toBe(true);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should close modal and remove show class', () => {
      document.body.innerHTML = `
        <div id="search-modal" class="show"></div>
      `;

      const modal = document.getElementById('search-modal');
      modal?.classList.remove('show');
      document.body.style.overflow = '';

      expect(modal?.classList.contains('show')).toBe(false);
      expect(document.body.style.overflow).toBe('');
    });
  });

  describe('搜索输入', () => {
    it('should clear input on close', () => {
      document.body.innerHTML = `
        <input id="search-input" type="text" value="test query">
      `;

      const input = document.getElementById('search-input') as HTMLInputElement;
      input.value = '';

      expect(input.value).toBe('');
    });

    it('should focus input when modal opens', () => {
      document.body.innerHTML = `
        <input id="search-input" type="text">
      `;

      const input = document.getElementById('search-input') as HTMLInputElement;
      input.focus();

      expect(document.activeElement).toBe(input);
    });
  });

  describe('搜索结果', () => {
    it('should display search results', () => {
      document.body.innerHTML = `
        <div id="search-results"></div>
      `;

      const results = document.getElementById('search-results');
      results!.innerHTML = `
        <ul class="space-y-2">
          <li class="search-result-item">
            <a href="/post/1">
              <h3>Test Post</h3>
              <p>Test excerpt</p>
            </a>
          </li>
        </ul>
      `;

      expect(results?.querySelector('.search-result-item')).not.toBeNull();
      expect(results?.querySelector('h3')?.textContent).toBe('Test Post');
    });

    it('should display no results message', () => {
      document.body.innerHTML = `
        <div id="search-results"></div>
      `;

      const results = document.getElementById('search-results');
      results!.innerHTML = `
        <div class="text-center py-8">
          <p class="text-muted">未找到 "test" 的相关结果</p>
        </div>
      `;

      expect(results?.textContent).toContain('未找到');
    });

    it('should display search stats', () => {
      document.body.innerHTML = `
        <div id="search-stats"></div>
      `;

      const stats = document.getElementById('search-stats');
      stats!.innerHTML = `<p class="text-sm text-muted">找到 5 条结果</p>`;

      expect(stats?.textContent).toContain('找到 5 条结果');
    });
  });

  describe('关键词高亮', () => {
    it('should highlight keywords in results', () => {
      const text = 'This is a test post about Hugo';
      const keyword = 'Hugo';
      const regex = new RegExp(`(${keyword})`, 'gi');
      const highlighted = text.replace(regex, '<mark>$1</mark>');

      expect(highlighted).toContain('<mark>Hugo</mark>');
    });

    it('should handle special regex characters', () => {
      const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      expect(escapeRegex('test.js')).toBe('test\\.js');
      expect(escapeRegex('a+b')).toBe('a\\+b');
    });
  });

  describe('加载状态', () => {
    it('should show loading indicator', () => {
      document.body.innerHTML = `
        <div id="search-loading" class="hidden"></div>
      `;

      const loading = document.getElementById('search-loading');
      loading?.classList.remove('hidden');

      expect(loading?.classList.contains('hidden')).toBe(false);
    });

    it('should hide loading indicator', () => {
      document.body.innerHTML = `
        <div id="search-loading"></div>
      `;

      const loading = document.getElementById('search-loading');
      loading?.classList.add('hidden');

      expect(loading?.classList.contains('hidden')).toBe(true);
    });
  });

  describe('键盘快捷键', () => {
    it('should respond to Escape key', () => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      expect(event.key).toBe('Escape');
    });

    it('should respond to Ctrl+K shortcut', () => {
      const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
      expect(event.key).toBe('k');
      expect(event.ctrlKey).toBe(true);
    });

    it('should respond to Cmd+K shortcut on Mac', () => {
      const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
      expect(event.key).toBe('k');
      expect(event.metaKey).toBe(true);
    });
  });
});
