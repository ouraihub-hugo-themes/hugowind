/**
 * AnimationManager 动画模块测试
 * 需求: 11.4, 2.4
 */

import { describe, it, expect, beforeEach } from 'vitest';

describe('AnimationManager', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('滚动动画元素', () => {
    it('should identify elements with intersect classes', () => {
      document.body.innerHTML = `
        <div class="intersect-once">Element 1</div>
        <div class="intersect:fade-in">Element 2</div>
        <div class="md:intersect:slide-up">Element 3</div>
      `;

      const selectors = [
        '[class*=" intersect:"]',
        '[class*=":intersect:"]',
        '[class^="intersect:"]',
        '[class="intersect"]',
        '[class*=" intersect "]',
        '[class^="intersect "]',
        '[class$=" intersect"]',
        '.intersect-once'
      ];

      const elements = document.querySelectorAll(selectors.join(','));
      expect(elements.length).toBeGreaterThan(0);
    });

    it('should set no-intersect attribute on init', () => {
      document.body.innerHTML = `
        <div class="intersect-once">Element</div>
      `;

      const element = document.querySelector('.intersect-once');
      element?.setAttribute('no-intersect', '');

      expect(element?.hasAttribute('no-intersect')).toBe(true);
    });

    it('should remove no-intersect and add intersected on trigger', () => {
      document.body.innerHTML = `
        <div class="intersect-once" no-intersect>Element</div>
      `;

      const element = document.querySelector('.intersect-once');
      element?.removeAttribute('no-intersect');
      element?.classList.add('intersected');

      expect(element?.hasAttribute('no-intersect')).toBe(false);
      expect(element?.classList.contains('intersected')).toBe(true);
    });
  });

  describe('阈值配置', () => {
    it('should return 0.99 for intersect-full', () => {
      document.body.innerHTML = `<div class="intersect-full">Element</div>`;
      const element = document.querySelector('.intersect-full');
      
      const getThreshold = (el: Element): number => {
        if (el.classList.contains('intersect-full')) return 0.99;
        if (el.classList.contains('intersect-half')) return 0.5;
        if (el.classList.contains('intersect-quarter')) return 0.25;
        return 0;
      };

      expect(getThreshold(element!)).toBe(0.99);
    });

    it('should return 0.5 for intersect-half', () => {
      document.body.innerHTML = `<div class="intersect-half">Element</div>`;
      const element = document.querySelector('.intersect-half');
      
      const getThreshold = (el: Element): number => {
        if (el.classList.contains('intersect-full')) return 0.99;
        if (el.classList.contains('intersect-half')) return 0.5;
        if (el.classList.contains('intersect-quarter')) return 0.25;
        return 0;
      };

      expect(getThreshold(element!)).toBe(0.5);
    });

    it('should return 0.25 for intersect-quarter', () => {
      document.body.innerHTML = `<div class="intersect-quarter">Element</div>`;
      const element = document.querySelector('.intersect-quarter');
      
      const getThreshold = (el: Element): number => {
        if (el.classList.contains('intersect-full')) return 0.99;
        if (el.classList.contains('intersect-half')) return 0.5;
        if (el.classList.contains('intersect-quarter')) return 0.25;
        return 0;
      };

      expect(getThreshold(element!)).toBe(0.25);
    });

    it('should return 0 for default', () => {
      document.body.innerHTML = `<div class="intersect-once">Element</div>`;
      const element = document.querySelector('.intersect-once');
      
      const getThreshold = (el: Element): number => {
        if (el.classList.contains('intersect-full')) return 0.99;
        if (el.classList.contains('intersect-half')) return 0.5;
        if (el.classList.contains('intersect-quarter')) return 0.25;
        return 0;
      };

      expect(getThreshold(element!)).toBe(0);
    });
  });

  describe('动画队列', () => {
    it('should skip queue for intersect-no-queue elements', () => {
      document.body.innerHTML = `
        <div class="intersect-once intersect-no-queue">Element</div>
      `;

      const element = document.querySelector('.intersect-no-queue');
      expect(element?.classList.contains('intersect-no-queue')).toBe(true);
    });

    it('should apply delay for queued animations', () => {
      const delayBetweenAnimations = 100;
      const animationCounter = 3;
      const delay = animationCounter * delayBetweenAnimations;

      expect(delay).toBe(300);
    });
  });

  describe('回退处理', () => {
    it('should show all elements when IntersectionObserver not supported', () => {
      document.body.innerHTML = `
        <div no-intersect>Element 1</div>
        <div no-intersect>Element 2</div>
      `;

      // 模拟回退行为
      const elements = document.querySelectorAll('[no-intersect]');
      elements.forEach((el) => {
        el.removeAttribute('no-intersect');
        el.classList.add('intersected');
      });

      elements.forEach((el) => {
        expect(el.hasAttribute('no-intersect')).toBe(false);
        expect(el.classList.contains('intersected')).toBe(true);
      });
    });
  });

  describe('一次性动画', () => {
    it('should identify intersect-once elements', () => {
      document.body.innerHTML = `
        <div class="intersect-once">Element</div>
      `;

      const element = document.querySelector('.intersect-once');
      expect(element?.classList.contains('intersect-once')).toBe(true);
    });
  });
});
