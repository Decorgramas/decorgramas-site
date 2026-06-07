// Decor Gramas — GA4 Event Tracking
// Não armazena dados pessoais (compatível com LGPD)
(function () {
  'use strict';

  function gaEvent(name, params) {
    if (typeof gtag !== 'function') return;
    gtag('event', name, params || {});
  }

  var path = window.location.pathname.replace(/\/$/, '') || '/';

  // ── 1. WhatsApp click — global (todos os botões do site) ──────────────
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href*="wa.me"], a[href*="whatsapp.com"]');
    if (!link) return;
    gaEvent('whatsapp_click', {
      page_path: path,
      link_text: (link.textContent || '').trim().slice(0, 80)
    });
  });

  // ── 2. Lead form submit ───────────────────────────────────────────────
  document.addEventListener('submit', function (e) {
    if (e.target.tagName !== 'FORM') return;
    gaEvent('lead_form_submit', {
      page_path: path,
      form_id: e.target.id || 'form'
    });
  });

  // ── 3. Blog article view (artigos, não o índice /blog) ────────────────
  if (/^\/blog\/.+/.test(path)) {
    gaEvent('blog_article_view', {
      page_path: path,
      page_title: document.title
    });
  }

  // ── 4. Projeto click — cards no portfólio ─────────────────────────────
  if (path === '/projetos') {
    document.addEventListener('click', function (e) {
      var card = e.target.closest('.project-card, .projeto-card, .gallery-item');
      if (!card) return;
      var label = (card.querySelector('h3, h4, figcaption') || {}).textContent || '';
      gaEvent('projeto_click', { page_path: path, card_label: label.trim().slice(0, 80) });
    });
  }

  // ── 5. Bio page — botões com data-ga-event ────────────────────────────
  document.querySelectorAll('[data-ga-event]').forEach(function (el) {
    el.addEventListener('click', function () {
      gaEvent(this.getAttribute('data-ga-event'), { page_path: path });
    });
  });

}());
