const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const category = tab.dataset.category;
    document.querySelectorAll('.tab').forEach(t => {
      const active = t === tab;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('hidden', card.dataset.category !== category);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
