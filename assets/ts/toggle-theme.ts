/**
 * 主题切换初始化脚本（独立入口）
 * 必须在 <head> 中同步加载，防止页面闪烁
 */
import { ThemeManager } from '@ouraihub/hugo-shared';

const tm = new ThemeManager();

window.addEventListener('load', () => {
  document.querySelector('[data-aw-toggle-color-scheme]')
    ?.addEventListener('click', () => tm.toggle());
});
