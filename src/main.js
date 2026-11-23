const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.gallery-item, .panorama-trigger').forEach(item => item.addEventListener('click', event => {
  if(item.classList.contains('panorama-trigger')) event.preventDefault();
  const lightbox = document.querySelector('.lightbox');
  const image = lightbox.querySelector('img');
  image.src = item.dataset.full;
  image.alt = item.classList.contains('panorama-trigger') ? 'Panoramica di Villa Casaggiori' : item.querySelector('img').alt;
  lightbox.classList.toggle('panorama-lightbox', item.classList.contains('panorama-trigger'));
  lightbox.classList.add('open');
}));
const lightbox = document.querySelector('.lightbox');
function closeLightbox(){ lightbox.classList.remove('open', 'panorama-lightbox'); }
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if(event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape') closeLightbox(); });
document.querySelector('#year').textContent = new Date().getFullYear();
