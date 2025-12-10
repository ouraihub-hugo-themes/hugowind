/**
 * Vitest 测试环境设置
 */

import { beforeEach, afterEach } from 'vitest';

// 每个测试前重置 DOM
beforeEach(() => {
  document.body.innerHTML = '';
  document.head.innerHTML = '';
  localStorage.clear();
  sessionStorage.clear();
});

// 每个测试后清理
afterEach(() => {
  document.body.innerHTML = '';
});

// 模拟 matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
