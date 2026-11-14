(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem('portfolio-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = saved || (systemDark ? 'dark' : 'light');
  const themeButton = document.querySelector('.theme-toggle');
  const setThemeLabel = () => {
    if (!themeButton) return;
    const dark = root.dataset.theme === 'dark';
    themeButton.textContent = dark ? '☀' : '☾';
    themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  };
  setThemeLabel();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', root.dataset.theme);
    setThemeLabel();
  });
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    navLinks?.classList.toggle('open', open);
  });
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
