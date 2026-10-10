/*
 * main.js — renders content from window.PORTFOLIO (assets/js/data.js)
 * and wires up site behaviour. No dependencies, no build step.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var data = window.PORTFOLIO || {};

  /* ---------- helpers ---------- */

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Allow only http(s) and mailto URLs in hrefs.
  function safeUrl(url) {
    var u = String(url || '').trim();
    return /^(https?:|mailto:)/i.test(u) ? u : '';
  }

  var ACRONYMS = ['ml', 'ai', 'api', 'ui', 'ux', 'iot'];
  function toArray(v) { return Array.isArray(v) ? v : []; }

  function svg(paths, extraClass) {
    return '<svg' + (extraClass ? ' class="' + extraClass + '"' : '') +
      ' width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">' +
      paths + '</svg>';
  }

  var ICONS = {
    github: '<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>',
    linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
    twitter: '<path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"/>',
    email: '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5-8-5V6l8 5 8-5v2.24z"/>',
    folder: '<path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/>',
    external: '<path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>'
  };

  var SOCIAL_LABELS = { github: 'GitHub', linkedin: 'LinkedIn', twitter: 'X (Twitter)', email: 'Email' };

  function githubUrl() {
    var s = data.socials || {};
    if (s.github) return s.github;
    return data.githubUser ? 'https://github.com/' + data.githubUser : '';
  }

  function githubUser() {
    if (data.githubUser) return data.githubUser;
    var m = /github\.com\/([^\/?#]+)/i.exec(githubUrl());
    return m ? m[1] : '';
  }

  /* ---------- bindings ---------- */

  function applyBindings() {
    var values = {
      name: data.name,
      initials: data.initials,
      role: data.role,
      tagline: data.tagline,
      email: data.email,
      year: String(new Date().getFullYear())
    };
    $$('[data-bind]').forEach(function (el) {
      var key = el.getAttribute('data-bind');
      if (values[key] != null && values[key] !== '') el.textContent = values[key];
    });

    var hrefs = {
      github: safeUrl(githubUrl()),
      mailto: data.email ? 'mailto:' + data.email : ''
    };
    $$('[data-bind-href]').forEach(function (el) {
      var key = el.getAttribute('data-bind-href');
      var url = hrefs[key];
      if (url) {
        el.setAttribute('href', url);
        if (key === 'github') { el.setAttribute('target', '_blank'); el.setAttribute('rel', 'noopener'); }
      } else {
        el.hidden = true;
      }
    });

    if (data.name && data.role) document.title = data.name + ' — ' + data.role;
  }

  /* ---------- renderers ---------- */

  function renderSocials() {
    var s = data.socials || {};
    var items = [];
    ['github', 'linkedin', 'twitter'].forEach(function (key) {
      var url = safeUrl(s[key]);
      if (!url) return;
      items.push('<li><a class="socials__link" href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="' +
        SOCIAL_LABELS[key] + '">' + svg(ICONS[key]) + '</a></li>');
    });
    if (data.email) {
      items.push('<li><a class="socials__link" href="' + esc('mailto:' + data.email) + '" aria-label="' +
        SOCIAL_LABELS.email + '">' + svg(ICONS.email) + '</a></li>');
    }
    var html = items.join('');
    $$('[data-render="socials"]').forEach(function (el) { el.innerHTML = html; });
  }

  function renderAbout() {
    var el = $('[data-render="about"]');
    if (!el) return;
    el.innerHTML = toArray(data.about).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
  }

  function renderSkills() {
    var el = $('[data-render="skills"]');
    if (!el) return;
    el.innerHTML = toArray(data.skills).map(function (g) {
      return '<div class="skill-group"><h3 class="skill-group__title">' + esc(g.group) + '</h3>' +
        '<ul class="tags">' + toArray(g.items).map(function (i) {
          return '<li class="tag">' + esc(i) + '</li>';
        }).join('') + '</ul></div>';
    }).join('');
  }

  function renderCertifications() {
    var el = $('[data-render="certifications"]');
    if (!el) return;
    var list = toArray(data.certifications);
    var section = el.closest('section');
    if (!list.length) {
      if (section) section.hidden = true;
      return;
    }
    el.innerHTML = list.map(function (c) {
      var url = safeUrl(c.verify);
      return '<li class="cert">' +
        '<p class="cert__issuer">' + esc(c.issuer) + '</p>' +
        '<h3 class="cert__name">' + esc(c.name) + '</h3>' +
        (c.detail ? '<p class="cert__detail">' + esc(c.detail) + '</p>' : '') +
        (c.date ? '<p class="cert__date">' + esc(c.date) + '</p>' : '') +
        (url ? '<a class="cert__verify" href="' + esc(url) + '" target="_blank" rel="noopener">Verify credential</a>' : '') +
        '</li>';
    }).join('');
  }

  function cardHtml(p) {
    var tags = toArray(p.tags).map(function (t) { return String(t).toLowerCase(); });
    var links = '';
    var repo = safeUrl(p.repo);
    var demo = safeUrl(p.demo);
    if (repo) {
      links += '<a class="card__link" aria-label="Source code" href="' + esc(repo) +
        '" target="_blank" rel="noopener">' + svg(ICONS.github) + '</a>';
    }
    if (demo) {
      links += '<a class="card__link" aria-label="Live demo" href="' + esc(demo) +
        '" target="_blank" rel="noopener">' + svg(ICONS.external) + '</a>';
    }
    return '<article class="card" data-tags="' + esc(tags.join(' ')) + '">' +
      '<div class="card__top">' + svg(ICONS.folder, 'card__icon') +
      '<div class="card__links">' + links + '</div></div>' +
      '<h3 class="card__title">' + esc(p.title) + '</h3>' +
      '<p class="card__desc">' + esc(p.description) + '</p>' +
      '<ul class="card__tech">' + toArray(p.tech).map(function (t) {
        return '<li>' + esc(t) + '</li>';
      }).join('') + '</ul></article>';
  }

  function renderProjects(projects) {
    var grid = $('[data-render="projects"]');
    if (grid) grid.innerHTML = projects.map(cardHtml).join('');
    renderFilters(projects);
  }

  function renderFilters(projects) {
    var bar = $('[data-render="filters"]');
    if (!bar) return;
    var seen = {};
    var tags = [];
    projects.forEach(function (p) {
      toArray(p.tags).forEach(function (t) {
        var key = String(t).toLowerCase();
        if (key && !seen[key]) { seen[key] = true; tags.push(key); }
      });
    });
    if (tags.length < 2) { bar.innerHTML = ''; bar.hidden = true; return; }
    bar.hidden = false;
    bar.innerHTML = '<button class="filter is-active" data-filter="all" aria-pressed="true">All</button>' +
      tags.map(function (t) {
        var label = ACRONYMS.indexOf(t) !== -1 ? t.toUpperCase() : t.charAt(0).toUpperCase() + t.slice(1);
        return '<button class="filter" data-filter="' + esc(t) + '" aria-pressed="false">' + esc(label) + '</button>';
      }).join('');
  }

  function initFilters() {
    var bar = $('[data-render="filters"]');
    if (!bar) return;
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.filter') : null;
      if (!btn || !bar.contains(btn)) return;
      var filter = btn.getAttribute('data-filter') || 'all';
      $$('.filter', bar).forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      $$('[data-render="projects"] .card').forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').split(/\s+/);
        card.hidden = !(filter === 'all' || tags.indexOf(filter) !== -1);
      });
    });
  }

  function renderExperience() {
    var el = $('[data-render="experience"]');
    if (!el) return;
    el.innerHTML = toArray(data.experience).map(function (x) {
      return '<li class="timeline__item"><div class="timeline__dot"></div><div class="timeline__content">' +
        '<p class="timeline__date">' + esc(x.date) + '</p>' +
        '<h3 class="timeline__role">' + esc(x.role) +
        (x.org ? ' <span class="timeline__org">@ ' + esc(x.org) + '</span>' : '') + '</h3>' +
        '<ul class="timeline__points">' + toArray(x.points).map(function (pt) {
          return '<li>' + esc(pt) + '</li>';
        }).join('') + '</ul></div></li>';
    }).join('');
  }

  // Fallback: show latest public repos when no projects are configured.
  function loadGithubRepos() {
    var user = githubUser();
    if (!user || !window.fetch) return;
    fetch('https://api.github.com/users/' + encodeURIComponent(user) + '/repos?sort=updated&per_page=6')
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(function (repos) {
        if (!Array.isArray(repos) || !repos.length) return;
        var projects = repos.filter(function (r) { return !r.fork; }).map(function (r) {
          var lang = r.language || '';
          return {
            title: r.name,
            description: r.description || '',
            tags: lang ? [lang.toLowerCase()] : [],
            tech: lang ? [lang] : [],
            repo: r.html_url,
            demo: r.homepage || ''
          };
        });
        if (projects.length) renderProjects(projects);
      })
      .catch(function () { /* fail silently */ });
  }

  /* ---------- behaviour ---------- */

  function initNav() {
    var toggle = $('.nav__toggle');
    var menu = $('.nav__menu');
    if (!toggle || !menu) return;

    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', function () {
      setOpen(!menu.classList.contains('is-open'));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && menu.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(min-width: 768px)');
      var onChange = function (ev) { if (ev.matches) setOpen(false); };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  function initTheme() {
    var btn = $('.theme-toggle');
    if (!btn) return;
    function effectiveTheme() {
      var t = root.getAttribute('data-theme');
      if (t === 'light' || t === 'dark') return t;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    function sync() { btn.setAttribute('aria-pressed', effectiveTheme() === 'dark' ? 'true' : 'false'); }
    btn.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
      sync();
    });
    sync();
  }

  function initScroll() {
    var header = $('.site-header');
    var backToTop = $('.back-to-top');
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (header) header.classList.toggle('is-scrolled', y > 10);
      if (backToTop) backToTop.classList.toggle('is-visible', y > 600);
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();

    if (backToTop) {
      backToTop.addEventListener('click', function () {
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        try { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); }
        catch (e) { window.scrollTo(0, 0); }
      });
    }
  }

  function initActiveLink() {
    var links = $$('.nav__link');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var byId = {};
    links.forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href.charAt(0) === '#' && href.length > 1) byId[href.slice(1)] = a;
    });
    var sections = Object.keys(byId).map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          var on = a === byId[entry.target.id];
          a.classList.toggle('is-active', on);
          if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }

  function initReveal() {
    var items = $$('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });
    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- boot ---------- */

  function safe(fn) {
    try { fn(); } catch (e) { if (window.console) console.error(e); }
  }

  function init() {
    safe(applyBindings);
    safe(renderSocials);
    safe(renderAbout);
    safe(renderSkills);
    safe(renderCertifications);
    safe(function () {
      var projects = toArray(data.projects);
      renderProjects(projects);
      if (!projects.length) loadGithubRepos();
    });
    safe(initFilters);
    safe(renderExperience);
    safe(initNav);
    safe(initTheme);
    safe(initScroll);
    safe(initActiveLink);
    safe(initReveal);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
