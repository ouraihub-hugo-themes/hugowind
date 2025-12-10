/**
 * HugoWind Tailwind CSS 配置
 * 基于 AstroWind 设计系统精确复刻
 * 参考: docs/design-tokens.md
 * @type {import('tailwindcss').Config}
 */
import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/ts/**/*.ts'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // 颜色系统 - 使用 CSS 变量实现主题切换
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        heading: 'var(--aw-color-text-heading)',
        page: 'var(--aw-color-bg-page)',
      },
      // 字体系统 - 与 AstroWind 保持一致
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      // 行高扩展
      lineHeight: {
        'tighter': '1.1',
      },
      // 字间距扩展
      letterSpacing: {
        'tighter': '-0.04em',
      },
      // 动画系统 - 复刻 AstroWind 动画效果
      animation: {
        'fade': 'fadeInUp 1s both',
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        // AstroWind 核心动画 - fadeInUp
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Hero 背景装饰动画 - blob
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // 排版扩展
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            a: {
              color: 'var(--aw-color-primary)',
              '&:hover': {
                color: 'var(--aw-color-secondary)',
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: 'var(--aw-font-heading)',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.04em',
            },
          },
        },
        // 暗色模式排版
        invert: {
          css: {
            '--tw-prose-headings': 'rgb(203 213 225)',
            a: {
              color: 'rgb(96 165 250)',
            },
          },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
  ],
};
