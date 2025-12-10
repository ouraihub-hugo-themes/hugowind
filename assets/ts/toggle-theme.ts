/**
 * 主题切换初始化脚本（独立入口）
 * 必须在 <head> 中同步加载，防止页面闪烁
 * 参考: hugo-theme-paper 的 toggle-theme.ts
 */

(function () {
  // 获取默认主题配置
  const getDefaultTheme = (): string => {
    const configEl = document.querySelector('[data-theme-config]');
    return configEl?.getAttribute('data-theme-config') || 'system';
  };

  // 应用主题
  const applyTheme = (theme: string): void => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // 获取系统主题偏好
  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // 主逻辑
  const defaultTheme = getDefaultTheme();
  const isLocked = defaultTheme.endsWith(':only');
  const baseTheme = defaultTheme.replace(':only', '');

  let effectiveTheme: string;

  if (isLocked) {
    // 锁定模式：使用固定主题
    effectiveTheme = baseTheme;
  } else {
    // 正常模式：优先使用 localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      effectiveTheme = savedTheme;
    } else if (baseTheme !== 'system') {
      effectiveTheme = baseTheme;
    } else {
      effectiveTheme = getSystemTheme();
    }
  }

  applyTheme(effectiveTheme);
})();
