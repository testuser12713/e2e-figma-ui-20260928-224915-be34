document.addEventListener('DOMContentLoaded', function () {
  var main = document.querySelector('main');
  if (!main) return;

  var header = document.createElement('header');
  header.className = 'page-header';

  var title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Food Management';

  var subtitle = document.createElement('p');
  subtitle.className = 'page-subtitle';
  subtitle.textContent = 'Speisen anlegen, bearbeiten und entfernen';

  header.appendChild(title);
  header.appendChild(subtitle);
  main.appendChild(header);
});
