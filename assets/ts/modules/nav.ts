/**
 * 导航管理模块
 * 参考: AstroWind Header 组件
 * 需求: 9.3, 5.3
 */

export class NavManager {
  private header: HTMLElement | null;
  private toggleBtn: HTMLElement | null;
  private nav: HTMLElement | null;
  private lastChild: HTMLElement | null;
  private mediaQuery: MediaQueryList;
  private boundResizeHandler: () => void;
  private boundScrollHandler: () => void;
  private lastScrollY = 0;
  private ticking = false;

  constructor() {
    this.header = document.getElementById('header');
    this.toggleBtn = document.querySelector('[data-aw-toggle-menu]');
    this.nav = document.querySelector('#header nav');
    this.lastChild = document.querySelector('#header > div > div:last-child');
    this.mediaQuery = window.matchMedia('(max-width: 767px)');
    this.boundResizeHandler = this.handleResize.bind(this);
    this.boundScrollHandler = this.handleScroll.bind(this);
    this.init();
  }

  init(): void {
    this.setupMobileMenu();
    this.setupScrollEffect();
    this.setupDropdowns();
    this.setupResizeHandler();
    this.setupTouchInteractions();
    this.setupLazyLoading();
  }

  /**
   * 设置移动端菜单
   */
  private setupMobileMenu(): void {
    if (!this.toggleBtn) return;

    this.toggleBtn.addEventListener('click', () => {
      this.toggleMenu();
    });

    // 点击导航链接后关闭菜单
    this.nav?.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && !target.closest('.dropdown')) {
        this.closeMenu();
      }
    });
  }

  /**
   * 切换菜单状态
   */
  private toggleMenu(): void {
    const isExpanded = this.toggleBtn?.classList.contains('expanded');
    
    if (isExpanded) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  /**
   * 打开菜单
   */
  private openMenu(): void {
    this.toggleBtn?.classList.add('expanded');
    this.header?.classList.add('h-screen', 'expanded', 'bg-page');
    this.nav?.classList.remove('hidden');
    this.lastChild?.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  /**
   * 关闭菜单
   */
  private closeMenu(): void {
    this.toggleBtn?.classList.remove('expanded');
    this.header?.classList.remove('h-screen', 'expanded', 'bg-page');
    this.nav?.classList.add('hidden');
    this.lastChild?.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  /**
   * 设置滚动效果
   */
  private setupScrollEffect(): void {
    if (!this.header?.hasAttribute('data-aw-sticky-header')) return;

    window.addEventListener('scroll', this.boundScrollHandler, { passive: true });
    this.applyScrollStyles();
  }

  /**
   * 处理滚动事件
   */
  private handleScroll(): void {
    this.lastScrollY = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.applyScrollStyles();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  /**
   * 应用滚动样式
   */
  private applyScrollStyles(): void {
    if (!this.header) return;

    if (this.lastScrollY > 60) {
      this.header.classList.add('scroll');
    } else {
      this.header.classList.remove('scroll');
    }
  }

  /**
   * 设置下拉菜单
   */
  private setupDropdowns(): void {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      const btn = dropdown.querySelector('button');
      const menu = dropdown.querySelector('ul');

      if (!btn || !menu) return;

      // 移动端点击展开
      btn.addEventListener('click', (e) => {
        if (window.innerWidth < 768) {
          e.preventDefault();
          e.stopPropagation();
          menu.classList.toggle('hidden');
          
          // 关闭其他下拉菜单
          document.querySelectorAll('.dropdown ul').forEach(otherMenu => {
            if (otherMenu !== menu) {
              otherMenu.classList.add('hidden');
            }
          });
        }
      });
    });

    // 点击外部关闭下拉菜单
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown ul').forEach(menu => {
          if (window.innerWidth < 768) {
            menu.classList.add('hidden');
          }
        });
      }
    });
  }

  /**
   * 设置窗口大小变化处理
   */
  private setupResizeHandler(): void {
    this.mediaQuery.addEventListener('change', this.boundResizeHandler);
  }

  /**
   * 处理窗口大小变化
   */
  private handleResize(): void {
    // 切换到桌面端时重置菜单状态
    if (!this.mediaQuery.matches) {
      this.closeMenu();
      // 重置下拉菜单
      document.querySelectorAll('.dropdown ul').forEach(menu => {
        menu.classList.remove('hidden');
      });
    }
  }

  /**
   * 设置触摸友好交互
   */
  private setupTouchInteractions(): void {
    // 检测触摸设备
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      document.documentElement.classList.add('touch-device');
      
      // 为可点击元素添加触摸反馈
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('touchstart', () => {
          el.classList.add('touch-active');
        }, { passive: true });

        el.addEventListener('touchend', () => {
          setTimeout(() => {
            el.classList.remove('touch-active');
          }, 100);
        }, { passive: true });
      });
    }
  }

  /**
   * 设置图片懒加载
   */
  private setupLazyLoading(): void {
    // 使用原生懒加载
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;
            
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
            }
            
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // 回退：直接加载所有图片
      images.forEach(img => {
        const imgEl = img as HTMLImageElement;
        const src = imgEl.dataset.src;
        if (src) {
          imgEl.src = src;
          imgEl.removeAttribute('data-src');
        }
      });
    }
  }

  /**
   * 销毁导航管理器
   */
  destroy(): void {
    window.removeEventListener('scroll', this.boundScrollHandler);
    this.mediaQuery.removeEventListener('change', this.boundResizeHandler);
  }
}
