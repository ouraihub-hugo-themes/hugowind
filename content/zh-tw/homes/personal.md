---
title: "個人主頁演示"
description: "個人作品集風格落地頁演示"
type: "homes"

sections:
  # Hero Widget
  - type: "hero"
    id: "hero"
    tagline: "個人網站演示"
    title: "李曉華"
    subtitle: "我是一名平面設計師，熱衷於創作視覺故事。<br /> 擁有 5 年經驗和北京設計學院學位，我為品牌和設計注入活力，將概念轉化為引人入勝的現實。"
    actions:
      - variant: "primary"
        text: "聯繫我"
        href: "/zh-tw/contact/"

  # Content Widget - 關於我
  - type: "content"
    id: "about"
    columns: 3
    content: |
      <h2 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">關於我</h2>
      <p>歡迎來到我的創意之旅。我的作品是我致力於將想法變為現實的見證，每個像素都成為想像畫布上的一筆。</p>
      <br />
      <p>我從周圍的世界中尋找靈感，無論是透過一本引人入勝的小說、排版的複雜細節，還是戶外探險中大自然的鮮豔色彩。</p>
      <br />
      <p>如果您想深入了解我的作品，可以關注我：</p>
    items:
      - icon: "tabler:brand-dribbble"
        callToAction:
          target: "_blank"
          text: "Dribbble"
          href: "#"
      - icon: "tabler:brand-behance"
        callToAction:
          target: "_blank"
          text: "Behance"
          href: "#"
      - icon: "tabler:brand-pinterest"
        callToAction:
          target: "_blank"
          text: "Pinterest"
          href: "#"
    image:
      src: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      alt: "個人照片"
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'

  # Steps Widget - 工作經歷
  - type: "steps"
    id: "resume"
    title: "工作經歷"
    items:
      - title: '資深平面設計師 <br /> <span class="font-normal">ABC 設計工作室，台北</span> <br /> <span class="text-sm font-normal">2021 - 至今</span>'
        description: "與客戶合作了解設計需求和目標。<br /> 開發品牌解決方案，包括標誌、色彩方案和品牌指南。<br /> 設計行銷材料，如宣傳冊、海報和數位資產。<br /> 為網站和應用程式創建視覺吸引力的用戶介面。"
        icon: "tabler:briefcase"
      - title: '初級平面設計師 <br /> <span class="font-normal">XYZ 創意機構，高雄</span> <br /> <span class="text-sm font-normal">2018 - 2021</span>'
        description: "協助資深設計師創建設計概念和視覺資產。<br /> 參與品牌標識和行銷材料的開發。<br /> 與行銷團隊合作確保活動設計的一致性。<br /> 在各種設計軟體和工具方面獲得實踐經驗。"
        icon: "tabler:briefcase"
    classes:
      container: "max-w-3xl"

  # Steps Widget - 教育背景
  - type: "steps"
    title: "教育背景"
    items:
      - title: '平面設計藝術碩士 <br /> <span class="font-normal">台灣設計學院</span> <br /> <span class="text-sm font-normal">2018 - 2020</span>'
        icon: "tabler:school"
      - title: '平面設計藝術學士 <br /> <span class="font-normal">台灣設計學院</span> <br /> <span class="text-sm font-normal">2014 - 2018</span>'
        icon: "tabler:school"
    classes:
      container: "max-w-3xl"

  # Features2 Widget - 技能
  - type: "features2"
    title: "專業技能"
    subtitle: "發現讓我能夠透過設計將想像變為現實的專業能力。"
    columns: 3
    items:
      - title: "平面設計"
        description: "精通創作視覺吸引力的設計，有效傳達訊息。"
      - title: "品牌與標識"
        description: "擅長開發統一的品牌標識，包括標誌和品牌指南。"
      - title: "以用戶為中心的設計"
        description: "在創建用戶友好介面和優化用戶體驗方面經驗豐富。"
      - title: "Adobe 創意套件"
        description: "熟練使用 Photoshop、Illustrator 和 InDesign 創建和編輯視覺元素。"
      - title: "排版設計"
        description: "善於選擇和處理字體以增強設計美感。"
      - title: "色彩理論"
        description: "精通使用色彩喚起情感並增強視覺和諧。"
      - title: "印刷與數位設計"
        description: "了解印刷材料和數位平台的設計。"
      - title: "注重細節"
        description: "在所有設計工作中保持精確和品質。"
      - title: "適應能力"
        description: "快速適應新的設計趨勢、技術和客戶偏好。"

  # Content Widget - 作品集專案 1
  - type: "content"
    id: "portfolio"
    title: "提升視覺敘事"
    subtitle: "踏上超越像素的設計之旅，進入想像的領域。探索我的作品集，在這裡熱情與創意交匯，塑造引人入勝的視覺敘事。"
    isReversed: true
    content: '<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">專案 1：<br /><span class="text-2xl">科技創新者品牌標識</span></h3>'
    items:
      - title: "描述："
        description: "為專注於顛覆性創新的科技新創公司「科技創新者」開發了全面的品牌標識。目標是傳達現代而平易近人的形象，與企業客戶和科技愛好者產生共鳴。"
      - title: "角色："
        description: "領導從概念到執行的整個品牌流程。創建了象徵創新的動態標誌，選擇了充滿活力的色彩方案，並設計了企業文具、網站圖形和社群媒體資產。"
    image:
      src: "https://images.unsplash.com/photo-1658248165252-71e116af1b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
      alt: "科技設計圖片"
    callToAction:
      target: "_blank"
      text: "查看專案"
      icon: "tabler:chevron-right"
      href: "#"
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'

  # Content Widget - 作品集專案 2
  - type: "content"
    isReversed: true
    isAfterContent: true
    content: '<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">專案 2：<br /><span class="text-2xl">藝術音樂節活動海報</span></h3>'
    items:
      - title: "描述："
        description: '為藝術音樂節「藝術浪潮融合」設計了引人注目的活動海報，旨在展示視覺藝術與音樂流派之間的協同效應。'
      - title: "角色："
        description: "將節日的創意主題轉化為視覺震撼的海報。使用大膽的排版、鮮豔的色彩和抽象元素來描繪藝術與音樂的融合。確保設計捕捉到節日充滿活力的氛圍。"
    image:
      src: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      alt: "藝術音樂海報圖片"
    callToAction:
      target: "_blank"
      text: "查看專案"
      icon: "tabler:chevron-right"
      href: "#"
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'

  # Content Widget - 作品集專案 3
  - type: "content"
    isReversed: true
    isAfterContent: true
    content: '<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">專案 3：<br /><span class="text-2xl">時尚品牌電商網站重設計</span></h3>'
    items:
      - title: "描述："
        description: "為環保時尚品牌「綠色時尚」重新設計了電商網站。目標是使品牌的線上形象與其永續發展理念保持一致，並改善用戶體驗。"
      - title: "角色："
        description: "對品牌價值觀和客戶群進行了深入分析，以確定設計方向。創建了具有直觀導航的視覺吸引力介面，突出永續材料，並整合了用戶友好的購物體驗。"
    image:
      src: "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      alt: "時尚電商圖片"
    callToAction:
      target: "_blank"
      text: "查看專案"
      icon: "tabler:chevron-right"
      href: "#"
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'

  # Testimonials Widget
  - type: "testimonials"
    title: "客戶評價"
    subtitle: "了解客戶對與我合作體驗的評價。"
    testimonials:
      - testimonial: "她把我們模糊的概念變成了完美符合我們目標的視覺傑作。她對細節的關注和將想法轉化為引人注目視覺效果的能力超出了我們的預期。"
        name: "陳志強"
        job: "創意總監"
        image:
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt: "陳志強頭像"
      - testimonial: "她以創意才華改變了我們的品牌標識，在每個元素中捕捉我們的本質。她的奉獻精神和才華真正透過她的作品閃耀。"
        name: "劉美玲"
        job: "執行長"
        image:
          src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
          alt: "劉美玲頭像"
      - testimonial: "她有一種不可思議的能力來傳達情感和故事。她為我們的公益組織設計了一個標誌，不僅代表了我們的事業，還喚起了同理心。她的專業精神和承諾使她成為一位卓越的設計師。"
        name: "趙麗娜"
        job: "公益組織創辦人"
        image:
          src: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt: "趙麗娜頭像"
      - testimonial: "我們委託她改造我們網站的用戶介面，結果令人驚嘆。她直觀的設計感增強了用戶體驗，導致參與度顯著提高。她是一位真正理解美學與功能協同作用的設計師。"
        name: "孫建國"
        job: "網路服務總監"
        image:
          src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt: "孫建國頭像"
      - testimonial: "她把我們的願景提升到了超乎想像的高度。她捕捉品牌本質並將其轉化為設計的能力非同尋常。與她合作是一段鼓舞人心的旅程。"
        name: "周雪梅"
        job: "產品經理"
        image:
          src: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80"
          alt: "周雪梅頭像"
      - testimonial: "她將概念轉化為引人入勝視覺效果的能力非同尋常。她把我們的活動海報創意變成了完美捕捉節日精髓的視覺傑作。她的奉獻精神、創造力和超越預期的能力使她成為任何專案的寶貴資產。"
        name: "吳明輝"
        job: "活動協調員"
        image:
          src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt: "吳明輝頭像"

  # CallToAction Widget
  - type: "cta"
    title: "讓我們一起創作"
    subtitle: "準備好將您的願景轉化為引人入勝的設計了嗎？"
    actions:
      - variant: "primary"
        text: "聯繫我"
        href: "/zh-tw/contact/"

  # BlogLatestPosts Widget
  - type: "blog-latest"
    id: "blog"
    title: "探索我部落格上的深度文章"
    information: "深入設計智慧和創意靈感的領域，在這裡您將找到寶貴的見解、實用技巧和引人入勝的敘事，提升和豐富您的創意之旅。"
    count: 4
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'
---

