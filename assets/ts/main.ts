/**
 * HugoWind 主入口文件
 */

import { NavManager } from './modules/nav';
import { AnimationManager } from './modules/animations';
import { SearchManager } from './modules/search';

// 初始化所有模块（ThemeManager 已在 toggle-theme.ts 中独立加载）
document.addEventListener('DOMContentLoaded', () => {
  new NavManager();
  new AnimationManager();
  new SearchManager();
});
