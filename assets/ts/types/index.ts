/**
 * HugoWind 类型定义
 */

export interface SiteConfig {
  baseURL: string;
  language: string;
  darkMode: boolean;
}

export interface MenuItem {
  name: string;
  url: string;
  children?: MenuItem[];
}

export interface FooterLink {
  title: string;
  items: {
    text: string;
    href: string;
  }[];
}

export interface SocialLink {
  ariaLabel: string;
  icon: string;
  href: string;
}
