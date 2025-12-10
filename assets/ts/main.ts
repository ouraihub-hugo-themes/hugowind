/**
 * HugoWind 主入口文件
 * 参考: TypeScript 模块开发规范
 */

import { ThemeManager } from './modules/theme';
import { NavManager } from './modules/nav';
import { AnimationManager } from './modules/animations';
import { SearchManager } from './modules/search';

// 初始化所有模块
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new NavManager();
  new AnimationManager();
  new SearchManager();
});
