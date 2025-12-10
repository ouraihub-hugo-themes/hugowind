/**
 * DOM 工具函数
 */

/**
 * 安全获取单个元素
 */
export function qs(selector: string): HTMLElement | null {
  return document.querySelector(selector);
}

/**
 * 安全获取多个元素
 */
export function qsa(selector: string): NodeListOf<HTMLElement> {
  return document.querySelectorAll(selector);
}

/**
 * 防抖函数
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
