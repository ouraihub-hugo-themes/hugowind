/**
 * 搜索功能模块
 * 使用 Pagefind 实现全站搜索
 * 需求: 8.1, 8.2, 8.3, 8.4
 */

interface PagefindResult {
  id: string;
  data: () => Promise<PagefindResultData>;
  excerpt: string;
  score: number;
}

interface PagefindResultData {
  url: string;
  content: string;
  word_count: number;
  meta: {
    title: string;
    image?: string;
  };
  excerpt: string;
  raw_url: string;
}

interface PagefindSearchResponse {
  results: PagefindResult[];
  unfilteredResultCount: number;
  filters: Record<string, Record<string, number>>;
  timings: {
    preload: number;
    search: number;
    total: number;
  };
}

declare global {
  interface Window {
    pagefind?: {
      search: (query: string, options?: Record<string, unknown>) => Promise<PagefindSearchResponse | null>;
      debouncedSearch: (query: string, options?: { debounce?: number }) => Promise<PagefindSearchResponse | null>;
      init: () => Promise<void>;
    };
  }
}

export class SearchManager {
  private modal: HTMLElement | null = null;
  private input: HTMLInputElement | null = null;
  private results: HTMLElement | null = null;
  private stats: HTMLElement | null = null;
  private loading: HTMLElement | null = null;
  private isOpen = false;

  constructor() {
    this.init();
  }

  /**
   * 初始化搜索功能
   */
  init(): void {
    this.modal = document.getElementById('search-modal');
    this.input = document.getElementById('search-input') as HTMLInputElement;
    this.results = document.getElementById('search-results');
    this.stats = document.getElementById('search-stats');
    this.loading = document.getElementById('search-loading');

    if (!this.modal) return;

    this.setupEventListeners();
    this.loadPagefind();
  }

  /**
   * 设置事件监听器
   */
  private setupEventListeners(): void {
    // 打开搜索按钮
    document.querySelectorAll('[data-search-trigger]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });

    // 关闭按钮
    document.querySelectorAll('[data-search-close]').forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    // 遮罩层点击关闭
    const overlay = this.modal?.querySelector('.search-overlay');
    overlay?.addEventListener('click', () => this.close());

    // ESC 键关闭
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
      // Ctrl/Cmd + K 打开搜索
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.toggle();
      }
    });

    // 搜索输入
    this.input?.addEventListener('input', () => {
      this.performSearch(this.input?.value || '');
    });
  }

  /**
   * 加载 Pagefind
   */
  private async loadPagefind(): Promise<void> {
    try {
      // 动态加载 Pagefind
      const script = document.createElement('script');
      script.src = '/_pagefind/pagefind.js';
      script.async = true;
      
      script.onload = () => {
        console.log('✨ Pagefind loaded');
      };
      
      script.onerror = () => {
        console.warn('Pagefind not available - search disabled');
      };
      
      document.head.appendChild(script);
    } catch (error) {
      console.error('Failed to load Pagefind:', error);
    }
  }

  /**
   * 打开搜索模态框
   */
  open(): void {
    if (!this.modal) return;
    
    this.isOpen = true;
    this.modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      this.input?.focus();
    }, 100);
  }

  /**
   * 关闭搜索模态框
   */
  close(): void {
    if (!this.modal) return;
    
    this.isOpen = false;
    this.modal.classList.remove('show');
    document.body.style.overflow = '';
    
    // 清空搜索
    if (this.input) this.input.value = '';
    if (this.results) this.results.innerHTML = '';
    if (this.stats) this.stats.innerHTML = '';
  }

  /**
   * 切换搜索模态框
   */
  toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * 执行搜索
   */
  private async performSearch(query: string): Promise<void> {
    if (!query.trim()) {
      this.clearResults();
      return;
    }

    if (!window.pagefind) {
      this.showError('搜索功能未加载');
      return;
    }

    this.showLoading(true);

    try {
      const response = await window.pagefind.debouncedSearch(query, {
        debounce: 300
      });

      this.showLoading(false);

      if (!response || response.results.length === 0) {
        this.showNoResults(query);
        return;
      }

      await this.renderResults(response.results, query);
    } catch (error) {
      console.error('Search error:', error);
      this.showLoading(false);
      this.showError('搜索出错，请稍后重试');
    }
  }

  /**
   * 渲染搜索结果
   */
  private async renderResults(results: PagefindResult[], query: string): Promise<void> {
    if (!this.results || !this.stats) return;

    const items: string[] = [];

    for (const result of results.slice(0, 10)) {
      try {
        const data = await result.data();
        const title = this.highlightKeyword(data.meta.title || '无标题', query);
        const excerpt = this.highlightKeyword(data.excerpt || '', query);

        items.push(`
          <li class="search-result-item">
            <a href="${data.url}" class="block p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <h3 class="text-lg font-semibold text-heading mb-2">${title}</h3>
              <p class="text-sm text-muted line-clamp-2">${excerpt}</p>
            </a>
          </li>
        `);
      } catch (error) {
        console.error('Error processing result:', error);
      }
    }

    this.results.innerHTML = `<ul class="space-y-2">${items.join('')}</ul>`;
    this.stats.innerHTML = `<p class="text-sm text-muted">找到 ${results.length} 条结果</p>`;
  }

  /**
   * 高亮关键词
   */
  private highlightKeyword(text: string, keyword: string): string {
    if (!keyword) return text;
    const regex = new RegExp(`(${this.escapeRegex(keyword)})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800 px-0.5 rounded">$1</mark>');
  }

  /**
   * 转义正则特殊字符
   */
  private escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * 显示加载状态
   */
  private showLoading(show: boolean): void {
    if (this.loading) {
      this.loading.classList.toggle('hidden', !show);
    }
  }

  /**
   * 清空结果
   */
  private clearResults(): void {
    if (this.results) this.results.innerHTML = '';
    if (this.stats) this.stats.innerHTML = '';
  }

  /**
   * 显示无结果
   */
  private showNoResults(query: string): void {
    if (this.results) {
      this.results.innerHTML = `
        <div class="text-center py-8">
          <p class="text-muted">未找到 "${query}" 的相关结果</p>
        </div>
      `;
    }
    if (this.stats) this.stats.innerHTML = '';
  }

  /**
   * 显示错误
   */
  private showError(message: string): void {
    if (this.results) {
      this.results.innerHTML = `
        <div class="text-center py-8">
          <p class="text-red-500">${message}</p>
        </div>
      `;
    }
  }

  /**
   * 销毁搜索管理器
   */
  destroy(): void {
    this.close();
  }
}
