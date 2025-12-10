/**
 * HugoWind 动画模块
 * 实现 AstroWind 风格的滚动动画效果
 * 需求: 11.4, 2.4
 */

export class AnimationManager {
  private observer: IntersectionObserver | null = null;
  private animationCounter = 0;
  private delayBetweenAnimations = 100;

  constructor() {
    this.init();
  }

  private init(): void {
    if (typeof IntersectionObserver === 'undefined') {
      // 如果不支持 IntersectionObserver，直接显示所有元素
      this.showAllElements();
      return;
    }

    this.setupIntersectionObserver();
  }

  /**
   * 设置 IntersectionObserver 监听滚动动画
   */
  private setupIntersectionObserver(): void {
    // 选择所有需要动画的元素
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

    if (elements.length === 0) return;

    // 为每个元素设置初始状态
    elements.forEach((el) => {
      el.setAttribute('no-intersect', '');
      (el as HTMLElement).dataset.intersectionThreshold = String(this.getThreshold(el));
    });

    // 创建观察器
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          requestAnimationFrame(() => {
            const target = entry.target as HTMLElement;
            const threshold = parseFloat(target.dataset.intersectionThreshold || '0');

            if (target.classList.contains('intersect-no-queue')) {
              // 不排队，立即触发
              if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
                this.triggerAnimation(target);
              }
            } else {
              // 排队触发，添加延迟
              if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
                const delay = this.animationCounter * this.delayBetweenAnimations;
                this.animationCounter++;

                setTimeout(() => {
                  this.triggerAnimation(target);
                }, delay);
              }
            }
          });
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.25, 0.5, 0.99]
      }
    );

    // 开始观察所有元素
    elements.forEach((el) => {
      this.observer?.observe(el);
    });
  }

  /**
   * 获取元素的可见阈值
   */
  private getThreshold(element: Element): number {
    if (element.classList.contains('intersect-full')) return 0.99;
    if (element.classList.contains('intersect-half')) return 0.5;
    if (element.classList.contains('intersect-quarter')) return 0.25;
    return 0;
  }

  /**
   * 触发元素动画
   */
  private triggerAnimation(element: HTMLElement): void {
    // 移除 no-intersect 属性
    element.removeAttribute('no-intersect');
    
    // 添加 intersected 类
    element.classList.add('intersected');

    // 如果是只触发一次的元素，停止观察
    if (element.classList.contains('intersect-once')) {
      this.observer?.unobserve(element);
    }
  }

  /**
   * 不支持 IntersectionObserver 时显示所有元素
   */
  private showAllElements(): void {
    const elements = document.querySelectorAll('[no-intersect]');
    elements.forEach((el) => {
      el.removeAttribute('no-intersect');
      el.classList.add('intersected');
    });
  }

  /**
   * 销毁观察器
   */
  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
