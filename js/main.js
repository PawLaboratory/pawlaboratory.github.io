/* =========================================================
   main.js —— 渲染逻辑，通常不需要修改
   ========================================================= */

(function () {
  'use strict';

  /* ============ 1. 背景图 ============ */
  var mqDark  = window.matchMedia('(prefers-color-scheme: dark)');
  var bgLayer = document.getElementById('bgLayer');

  function pickBackgroundUrl() {
    var bg = SITE.background || {};
    var light = bg.light || '';
    var dark  = bg.dark  || '';
    // 深色模式优先用 dark，没有就回退到 light；反之亦然
    return mqDark.matches ? (dark || light) : (light || dark);
  }

  function applyBackground() {
    var url = pickBackgroundUrl();

    if (!url) {
      bgLayer.style.display = 'none';
      return;
    }

    var dim = (SITE.background && typeof SITE.background.dim === 'number')
      ? SITE.background.dim
      : 0.86;

    bgLayer.style.display = '';
    bgLayer.style.setProperty('--bg-image', 'url("' + url + '")');
    document.documentElement.style.setProperty('--bg-dim', String(dim));
  }

  if (typeof mqDark.addEventListener === 'function') {
    mqDark.addEventListener('change', applyBackground);
  } else if (typeof mqDark.addListener === 'function') {
    mqDark.addListener(applyBackground);   // 老浏览器兜底
  }
  applyBackground();

  /* ============ 2. Logo ============ */
  var logoImg  = document.getElementById('logoImg');
  var logoLink = document.getElementById('logoLink');

  logoImg.src = SITE.logo.src;
  logoImg.alt = SITE.logo.alt || '';
  logoLink.href = SITE.logo.href;
  logoLink.setAttribute('aria-label', SITE.logo.alt || 'Home');

  /* ============ 3. 页脚 ============ */
  document.getElementById('copyright').textContent = SITE.copyright || '';

  /* ============ 4. 图标加载失败时的兜底（首字母占位图） ============ */
  function fallbackIcon(text) {
    var ch = String(text || '?').trim().charAt(0).toUpperCase() || '?';
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
        '<rect width="64" height="64" rx="8" fill="#8a9a96" fill-opacity="0.22"/>' +
        '<text x="32" y="43" text-anchor="middle" font-size="30" font-weight="600" ' +
              'font-family="-apple-system,Segoe UI,Roboto,sans-serif" fill="#8a9a96">' +
          ch +
        '</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  /* ============ 5. 创建一张卡片 ============ */
  function createCard(p) {
    var card = document.createElement('a');
    card.className = 'card';
    card.href = p.href || '#';
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    /* 头部：图标 + 标题 */
    var head = document.createElement('div');
    head.className = 'card-head';

    var icon = document.createElement('img');
    icon.className = 'card-icon';
    icon.alt = '';
    icon.loading = 'lazy';
    icon.decoding = 'async';
    icon.src = p.icon || fallbackIcon(p.title);
    icon.addEventListener('error', function () {
      this.src = fallbackIcon(p.title);
    }, { once: true });

    var title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = p.title || 'Untitled';

    head.appendChild(icon);
    head.appendChild(title);
    card.appendChild(head);

    /* 简介 */
    if (p.desc) {
      var desc = document.createElement('p');
      desc.className = 'card-desc';
      desc.textContent = p.desc;
      card.appendChild(desc);
    }

    /* 标签 */
    if (Array.isArray(p.tags) && p.tags.length) {
      var tags = document.createElement('div');
      tags.className = 'tags';
      p.tags.forEach(function (t) {
        var span = document.createElement('span');
        span.className = 'tag';
        span.textContent = t;
        tags.appendChild(span);
      });
      card.appendChild(tags);
    }

    return card;
  }

  /* ============ 6. 渲染全部卡片 ============ */
  var grid = document.getElementById('grid');
  var frag = document.createDocumentFragment();

  (SITE.projects || []).forEach(function (p) {
    frag.appendChild(createCard(p));
  });

  grid.appendChild(frag);
})();