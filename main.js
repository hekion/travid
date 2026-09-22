document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('js-hamburger');
  const closeBtn = document.getElementById('js-close-btn');
  const nav = document.getElementById('js-nav');
  const overlay = document.getElementById('js-overlay');

  // メニューを開く関数
  const openMenu = () => {
    nav.classList.add('is-open');
    overlay.classList.add('is-active');
  };

  // メニューを閉じる関数
  const closeMenu = () => {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-active');
  };

  if (hamburger && nav && closeBtn && overlay) {
    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
});
