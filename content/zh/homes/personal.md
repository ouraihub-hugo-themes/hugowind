---
title: "个人主页演示"
description: "个人作品集风格落地页演示"
type: "homes"

sections:
  # Hero Widget
  - type: "hero"
    id: "hero"
    tagline: "个人网站演示"
    title: "李晓华"
    subtitle: "我是一名平面设计师，热衷于创作视觉故事。<br /> 拥有 5 年经验和北京设计学院学位，我为品牌和设计注入活力，将概念转化为引人入胜的现实。"
    actions:
      - variant: "primary"
        text: "联系我"
        href: "/zh/contact/"

  # Content Widget - 关于我
  - type: "content"
    id: "about"
    columns: 3
    content: |
      <h2 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">关于我</h2>
      <p>欢迎来到我的创意之旅。我的作品是我致力于将想法变为现实的见证，每个像素都成为想象画布上的一笔。</p>
      <br />
      <p>我从周围的世界中寻找灵感，无论是通过一本引人入胜的小说、排版的复杂细节，还是户外探险中大自然的鲜艳色彩。</p>
      <br />
      <p>如果您想深入了解我的作品，可以关注我：</p>
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
      alt: "个人照片"
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'

  # Steps Widget - 工作经历
  - type: "steps"
    id: "resume"
    title: "工作经历"
    items:
      - title: '高级平面设计师 <br /> <span class="font-normal">ABC 设计工作室，北京</span> <br /> <span class="text-sm font-normal">2021 - 至今</span>'
        description: "与客户合作了解设计需求和目标。<br /> 开发品牌解决方案，包括标志、色彩方案和品牌指南。<br /> 设计营销材料，如宣传册、海报和数字资产。<br /> 为网站和应用程序创建视觉吸引力的用户界面。"
        icon: "tabler:briefcase"
      - title: '初级平面设计师 <br /> <span class="font-normal">XYZ 创意机构，上海</span> <br /> <span class="text-sm font-normal">2018 - 2021</span>'
        description: "协助高级设计师创建设计概念和视觉资产。<br /> 参与品牌标识和营销材料的开发。<br /> 与营销团队合作确保活动设计的一致性。<br /> 在各种设计软件和工具方面获得实践经验。"
        icon: "tabler:briefcase"
    classes:
      container: "max-w-3xl"

  # Steps Widget - 教育背景
  - type: "steps"
    title: "教育背景"
    items:
      - title: '平面设计艺术硕士 <br /> <span class="font-normal">北京设计学院</span> <br /> <span class="text-sm font-normal">2018 - 2020</span>'
        icon: "tabler:school"
      - title: '平面设计艺术学士 <br /> <span class="font-normal">北京设计学院</span> <br /> <span class="text-sm font-normal">2014 - 2018</span>'
        icon: "tabler:school"
    classes:
      container: "max-w-3xl"

  # Features2 Widget - 技能
  - type: "features2"
    title: "专业技能"
    subtitle: "发现让我能够通过设计将想象变为现实的专业能力。"
    columns: 3
    items:
      - title: "平面设计"
        description: "精通创作视觉吸引力的设计，有效传达信息。"
      - title: "品牌与标识"
        description: "擅长开发统一的品牌标识，包括标志和品牌指南。"
      - title: "以用户为中心的设计"
        description: "在创建用户友好界面和优化用户体验方面经验丰富。"
      - title: "Adobe 创意套件"
        description: "熟练使用 Photoshop、Illustrator 和 InDesign 创建和编辑视觉元素。"
      - title: "排版设计"
        description: "善于选择和处理字体以增强设计美感。"
      - title: "色彩理论"
        description: "精通使用色彩唤起情感并增强视觉和谐。"
      - title: "印刷与数字设计"
        description: "了解印刷材料和数字平台的设计。"
      - title: "注重细节"
        description: "在所有设计工作中保持精确和质量。"
      - title: "适应能力"
        description: "快速适应新的设计趋势、技术和客户偏好。"

  # Content Widget - 作品集项目 1
  - type: "content"
    id: "portfolio"
    title: "提升视觉叙事"
    subtitle: "踏上超越像素的设计之旅，进入想象的领域。探索我的作品集，在这里激情与创意交汇，塑造引人入胜的视觉叙事。"
    isReversed: true
    content: '<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">项目 1：<br /><span class="text-2xl">科技创新者品牌标识</span></h3>'
    items:
      - title: "描述："
        description: '为专注于颠覆性创新的科技初创公司「科技创新者」开发了全面的品牌标识。目标是传达现代而平易近人的形象，与企业客户和科技爱好者产生共鸣。'
      - title: "角色："
        description: "领导从概念到执行的整个品牌流程。创建了象征创新的动态标志，选择了充满活力的色彩方案，并设计了企业文具、网站图形和社交媒体资产。"
    image:
      src: "https://images.unsplash.com/photo-1658248165252-71e116af1b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
      alt: "科技设计图片"
    callToAction:
      target: "_blank"
      text: "查看项目"
      icon: "tabler:chevron-right"
      href: "#"
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'

  # Content Widget - 作品集项目 2
  - type: "content"
    isReversed: true
    isAfterContent: true
    content: '<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">项目 2：<br /><span class="text-2xl">艺术音乐节活动海报</span></h3>'
    items:
      - title: "描述："
        description: '为艺术音乐节"艺术浪潮融合"设计了引人注目的活动海报，旨在展示视觉艺术与音乐流派之间的协同效应。'
      - title: "角色："
        description: "将节日的创意主题转化为视觉震撼的海报。使用大胆的排版、鲜艳的色彩和抽象元素来描绘艺术与音乐的融合。确保设计捕捉到节日充满活力的氛围。"
    image:
      src: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      alt: "艺术音乐海报图片"
    callToAction:
      target: "_blank"
      text: "查看项目"
      icon: "tabler:chevron-right"
      href: "#"
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'

  # Content Widget - 作品集项目 3
  - type: "content"
    isReversed: true
    isAfterContent: true
    content: '<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">项目 3：<br /><span class="text-2xl">时尚品牌电商网站重设计</span></h3>'
    items:
      - title: "描述："
        description: '为环保时尚品牌「绿色时尚」重新设计了电商网站。目标是使品牌的在线形象与其可持续发展理念保持一致，并改善用户体验。'
      - title: "角色："
        description: "对品牌价值观和客户群进行了深入分析，以确定设计方向。创建了具有直观导航的视觉吸引力界面，突出可持续材料，并整合了用户友好的购物体验。"
    image:
      src: "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      alt: "时尚电商图片"
    callToAction:
      target: "_blank"
      text: "查看项目"
      icon: "tabler:chevron-right"
      href: "#"
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'

  # Testimonials Widget
  - type: "testimonials"
    title: "客户评价"
    subtitle: "了解客户对与我合作体验的评价。"
    testimonials:
      - testimonial: "她把我们模糊的概念变成了完美符合我们目标的视觉杰作。她对细节的关注和将想法转化为引人注目视觉效果的能力超出了我们的预期。"
        name: "陈志强"
        job: "创意总监"
        image:
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt: "陈志强头像"
      - testimonial: "她以创意才华改变了我们的品牌标识，在每个元素中捕捉我们的本质。她的奉献精神和才华真正通过她的作品闪耀。"
        name: "刘美玲"
        job: "首席执行官"
        image:
          src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
          alt: "刘美玲头像"
      - testimonial: "她有一种不可思议的能力来传达情感和故事。她为我们的公益组织设计了一个标志，不仅代表了我们的事业，还唤起了同理心。她的专业精神和承诺使她成为一位卓越的设计师。"
        name: "赵丽娜"
        job: "公益组织创始人"
        image:
          src: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt: "赵丽娜头像"
      - testimonial: "我们委托她改造我们网站的用户界面，结果令人惊叹。她直观的设计感增强了用户体验，导致参与度显著提高。她是一位真正理解美学与功能协同作用的设计师。"
        name: "孙建国"
        job: "网络服务总监"
        image:
          src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt: "孙建国头像"
      - testimonial: "她把我们的愿景提升到了超乎想象的高度。她捕捉品牌本质并将其转化为设计的能力非同寻常。与她合作是一段鼓舞人心的旅程。"
        name: "周雪梅"
        job: "产品经理"
        image:
          src: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80"
          alt: "周雪梅头像"
      - testimonial: "她将概念转化为引人入胜视觉效果的能力非同寻常。她把我们的活动海报创意变成了完美捕捉节日精髓的视觉杰作。她的奉献精神、创造力和超越预期的能力使她成为任何项目的宝贵资产。"
        name: "吴明辉"
        job: "活动协调员"
        image:
          src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt: "吴明辉头像"

  # CallToAction Widget
  - type: "cta"
    title: "让我们一起创作"
    subtitle: "准备好将您的愿景转化为引人入胜的设计了吗？"
    actions:
      - variant: "primary"
        text: "联系我"
        href: "/zh/contact/"

  # BlogLatestPosts Widget
  - type: "blog-latest"
    id: "blog"
    title: "探索我博客上的深度文章"
    information: "深入设计智慧和创意灵感的领域，在这里您将找到宝贵的见解、实用技巧和引人入胜的叙事，提升和丰富您的创意之旅。"
    count: 4
    bg: '<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>'
---

