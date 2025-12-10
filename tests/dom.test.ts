/**
 * DOM 工具函数测试
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { qs, qsa, debounce, throttle } from '../assets/ts/utils/dom';

describe('DOM Utils', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('qs - 查询单个元素', () => {
    it('should return element when found', () => {
      document.body.innerHTML = `<div id="test">Test</div>`;
      const element = qs('#test');
      expect(element).not.toBeNull();
      expect(element?.id).toBe('test');
    });

    it('should return null when not found', () => {
      const element = qs('#nonexistent');
      expect(element).toBeNull();
    });

    it('should work with class selectors', () => {
      document.body.innerHTML = `<div class="test-class">Test</div>`;
      const element = qs('.test-class');
      expect(element).not.toBeNull();
    });
  });

  describe('qsa - 查询多个元素', () => {
    it('should return all matching elements', () => {
      document.body.innerHTML = `
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
      `;
      const elements = qsa('.item');
      expect(elements.length).toBe(3);
    });

    it('should return empty NodeList when no matches', () => {
      const elements = qsa('.nonexistent');
      expect(elements.length).toBe(0);
    });
  });

  describe('debounce - 防抖函数', () => {
    it('should delay function execution', async () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const debouncedFn = debounce(fn, 100);

      debouncedFn();
      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(50);
      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(50);
      expect(fn).toHaveBeenCalledTimes(1);

      vi.useRealTimers();
    });

    it('should reset timer on subsequent calls', async () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const debouncedFn = debounce(fn, 100);

      debouncedFn();
      vi.advanceTimersByTime(50);
      debouncedFn();
      vi.advanceTimersByTime(50);
      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(50);
      expect(fn).toHaveBeenCalledTimes(1);

      vi.useRealTimers();
    });

    it('should pass arguments to debounced function', async () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const debouncedFn = debounce(fn, 100);

      debouncedFn('arg1', 'arg2');
      vi.advanceTimersByTime(100);

      expect(fn).toHaveBeenCalledWith('arg1', 'arg2');
      vi.useRealTimers();
    });
  });

  describe('throttle - 节流函数', () => {
    it('should execute immediately on first call', () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn();
      expect(fn).toHaveBeenCalledTimes(1);

      vi.useRealTimers();
    });

    it('should ignore calls within throttle period', () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn();
      throttledFn();
      throttledFn();
      expect(fn).toHaveBeenCalledTimes(1);

      vi.useRealTimers();
    });

    it('should allow calls after throttle period', () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn();
      expect(fn).toHaveBeenCalledTimes(1);

      vi.advanceTimersByTime(100);
      throttledFn();
      expect(fn).toHaveBeenCalledTimes(2);

      vi.useRealTimers();
    });

    it('should pass arguments to throttled function', () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn('arg1', 'arg2');
      expect(fn).toHaveBeenCalledWith('arg1', 'arg2');

      vi.useRealTimers();
    });
  });
});
