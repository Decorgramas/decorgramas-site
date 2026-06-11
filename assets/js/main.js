/* Decor Gramas — main.js
   Header scroll, menu mobile, FAQ accordion */

/* Header scroll */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* Mobile menu */
const trigger = document.getElementById('menuTrigger');
const mobile  = document.getElementById('mobileMenu');
const overlay = document.getElementById('mobileOverlay');
const mClose  = document.getElementById('mobileClose');
if (trigger && mobile && overlay) {
  const toggleMenu = () => {
    const isOpen = mobile.classList.toggle('open');
    trigger.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  trigger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  if (mClose) mClose.addEventListener('click', toggleMenu);
  mobile.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => { if (mobile.classList.contains('open')) toggleMenu(); })
  );
  mobile.querySelectorAll('.mob-group-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.parentElement;
      const wasOpen = group.classList.contains('open');
      mobile.querySelectorAll('.mob-group').forEach(g => g.classList.remove('open'));
      if (!wasOpen) group.classList.add('open');
    });
  });
}

/* FAQ accordion */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  if (!q) return;
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
