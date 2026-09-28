document.addEventListener('DOMContentLoaded', function () {
  var main = document.querySelector('main');
  if (!main) return;

  var header = document.createElement('header');
  header.className = 'page-header';

  var title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Time Management';

  var subtitle = document.createElement('p');
  subtitle.className = 'page-subtitle';
  subtitle.textContent = 'Schichtplan und Anwesenheit';

  header.appendChild(title);
  header.appendChild(subtitle);
  main.appendChild(header);
});
