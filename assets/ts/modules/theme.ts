/**
 * 主题管理模块
 * 精确复刻 AstroWind 主题切换功能
 * 需求: 2.3
 */

export type ThemeMode = 'light' | 'dark' | 'system';

export class ThemeManager {
  private currentTheme: ThemeMode = 'system';
  private defaultTheme: ThemeMode = 'system';
  private isLocked = false;
  private mediaQuery: MediaQueryList;
  private boundSystemThemeHandler: () => void;

  constructor() {
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.boundSystemThemeHandler = this.handleSystemThemeChange.bind(this);
    this.init();
  }

  /**
   * 初始化主题管理器
   */
  init(): void {
    this.loadDefaultTheme();
    this.loadTheme();
    this.setupToggle();
    this.watchSystemTheme();
    this.setupTransition();
    this.updateToggleIcons();
  }

  /**
   * 从页面配置加载默认主题设置
   */
  private loadDefaultTheme(): void {
    const configEl = document.querySelector('[data-theme-config]');
    if (configEl) {
      const config = configEl.getAttribute('data-theme-config') || 'system';
      this.isLocked = config.endsWith(':only');
      this.defaultTheme = config.replace(':only', '') as ThemeMode;
    }
  }

  /**
   * 从 localStorage 加载保存的主题
   */
  private loadTheme(): void {
    if (this.isLocked) {
      this.currentTheme = this.defaultTheme;
    } else {
      const saved = localStorage.getItem('theme') as ThemeMode | null;
      if (saved && ['light', 'dark', 'system'].includes(saved)) {
        this.currentTheme = saved;
      } else if (this.defaultTheme !== 'system') {
        this.currentTheme = this.defaultTheme;
      } else {
        this.currentTheme = 'system';
      }
    }
    this.applyTheme(false);
  }

  /**
   * 应用主题到文档
   * @param withTransition 是否启用过渡动画
   */
  private applyTheme(withTransition = true): void {
    const isDark = this.isDarkMode();

    if (withTransition) {
      this.enableTransition();
    }

    document.documentElement.classList.toggle('dark', isDark);

    // 移除动画延迟（与 AstroWind 保持一致）
    if (withTransition && window.HugoWindObserver) {
      window.HugoWindObserver.removeAnimationDelay();
    }

    this.updateToggleIcons();
  }

  /**
   * 判断当前是否为暗色模式
   */
  private isDarkMode(): boolean {
    if (this.currentTheme === 'dark') return true;
    if (this.currentTheme === 'light') return false;
    return this.mediaQuery.matches;
  }

  /**
   * 设置主题切换按钮事件
   */
  private setupToggle(): void {
    document.querySelectorAll('[data-aw-toggle-color-scheme]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
    });
  }

  /**
   * 监听系统主题变化
   */
  private watchSystemTheme(): void {
    this.mediaQuery.addEventListener('change', this.boundSystemThemeHandler);
  }

  /**
   * 处理系统主题变化
   */
  private handleSystemThemeChange(): void {
    if (this.currentTheme === 'system') {
      this.applyTheme();
    }
  }

  /**
   * 设置主题切换过渡效果
   */
  private setupTransition(): void {
    // 添加过渡样式到 head
    if (!document.getElementById('theme-transition-style')) {
      const style = document.createElement('style');
      style.id = 'theme-transition-style';
      style.textContent = `
        .theme-transition,
        .theme-transition *,
        .theme-transition *::before,
        .theme-transition *::after {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, fill 0.3s ease, stroke 0.3s ease !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * 启用过渡动画
   */
  private enableTransition(): void {
    document.documentElement.classList.add('theme-transition');
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
  }

  /**
   * 更新切换按钮图标状态
   */
  private updateToggleIcons(): void {
    const isDark = document.documentElement.classList.contains('dark');
    
    document.querySelectorAll('[data-aw-toggle-color-scheme]').forEach(btn => {
      const sunIcon = btn.querySelector('.icon-sun');
      const moonIcon = btn.querySelector('.icon-moon');
      
      if (sunIcon && moonIcon) {
        sunIcon.classList.toggle('hidden', isDark);
        moonIcon.classList.toggle('hidden', !isDark);
      }
    });
  }

  /**
   * 切换主题（light <-> dark）
   */
  toggle(): void {
    if (this.isLocked) return;

    const isDark = document.documentElement.classList.contains('dark');
    this.currentTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', this.currentTheme);
    this.applyTheme();
  }

  /**
   * 设置特定主题
   */
  setTheme(theme: ThemeMode): void {
    if (this.isLocked) return;
    
    this.currentTheme = theme;
    if (theme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', theme);
    }
    this.applyTheme();
  }

  /**
   * 获取当前主题
   */
  getTheme(): ThemeMode {
    return this.currentTheme;
  }

  /**
   * 获取实际显示的主题（考虑 system 模式）
   */
  getEffectiveTheme(): 'light' | 'dark' {
    return this.isDarkMode() ? 'dark' : 'light';
  }

  /**
   * 销毁主题管理器
   */
  destroy(): void {
    this.mediaQuery.removeEventListener('change', this.boundSystemThemeHandler);
    document.querySelectorAll('[data-aw-toggle-color-scheme]').forEach(el => {
      el.replaceWith(el.cloneNode(true));
    });
  }
}

// 扩展 Window 接口
declare global {
  interface Window {
    HugoWindObserver?: {
      removeAnimationDelay: () => void;
    };
  }
}
