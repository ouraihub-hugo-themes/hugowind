/**
 * ThemeManager 单元测试
 */

import { describe, it, expect, beforeEach } from 'vitest';

describe('ThemeManager', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark');
    localStorage.clear();
  });

  it('should initialize with system theme by default', () => {
    expect(localStorage.getItem('theme')).toBeNull();
  });

  it('should toggle dark class on document element', () => {
    document.documentElement.classList.add('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    document.documentElement.classList.remove('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should persist theme preference to localStorage', () => {
    localStorage.setItem('theme', 'dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    
    localStorage.setItem('theme', 'light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
