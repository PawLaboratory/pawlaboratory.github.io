/* =========================================================
   config.js —— 只改这一个文件就能维护整站内容
   ========================================================= */

const SITE = {

  /* -------------------------------------------------------
   * 1. 左上角 Logo
   * ------------------------------------------------------- */
  logo: {
    src: 'assets/Logo.png',                    // 图片路径
    alt: '爪爪实验室',                            // 无障碍描述
    href: 'https://github.com/PawLaboratory'       // 点击 Logo 打开的主页
  },

  /* -------------------------------------------------------
   * 2. 页脚文案
   * ------------------------------------------------------- */
  copyright: '© 2026 PawLaboratory · All rights reserved.',

  /* -------------------------------------------------------
   * 3. 背景图（可选）
   *    light / dark 可以只填一个，另一个会自动复用
   *    dim：0 ~ 1，遮罩浓度。越大文字越清晰、背景越淡
   * ------------------------------------------------------- */
  background: {
    light: 'assets/bg.png',        // 例如 'assets/bg-light.jpg'
    dark: '',         // 例如 'assets/bg-dark.jpg'
    dim: 0.75
  },

  /* -------------------------------------------------------
   * 4. 项目卡片
   *    复制一段 { ... } 到数组里即可新增卡片
   * ------------------------------------------------------- */
  projects: [
    {
      title: 'FurryArtStudio',
      icon: 'assets/FurryArtStudioLogo.png',
      desc: '轻量、强大的工具，用于管理 Fursona 手稿、参考素材、OC 内容和图片文档。',
      tags: ['Fursona', 'VB.net', 'DAM'],
      href: 'https://github.com/PawLaboratory/FurryArtStudio'
    },
    {
      title: 'Chromis',
      icon: 'assets/ChromisLogo.png',
      desc: '使用K-Means聚类，中位切分或八叉树算法从图像中提取主颜色的类库。',
      tags: ['NuGet', 'VB.net', 'K-Means'],
      href: 'https://github.com/PawLaboratory/Chromis'
    },
    {
      title: 'Logger',
      icon: '',
      desc: '带彩色文本输出的日志系统。',
      tags: ['NuGet', 'VB.net', 'Logger', 'Logging'],
      href: 'https://github.com/PawLaboratory/Logger'
    }

    /* 继续添加：
    ,{
      title: '项目名称 D',
      icon: 'assets/icons/project-d.png',
      desc: '简介……',
      tags: ['Tag1', 'Tag2'],
      href: 'https://example.com'
    }
    */
  ]
};