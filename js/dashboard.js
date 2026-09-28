document.addEventListener('DOMContentLoaded', function () {
  var main = document.querySelector('main');
  if (!main) return;

  var header = document.createElement('header');
  header.className = 'page-header';

  var title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Dashboard';

  var subtitle = document.createElement('p');
  subtitle.className = 'page-subtitle';
  subtitle.textContent = 'Überblick über Umsatz, Bestellungen und Schichten';

  header.appendChild(title);
  header.appendChild(subtitle);
  main.appendChild(header);
});

// dashboard.js — rendert die Kernkennzahlen (KPI-Karten) der Dashboard-Seite.
// Beispieldaten liegen inline; die Karten werden vollständig vom Skript erzeugt.
var KPI_DATA = [
    {
      label: 'Umsatz',
      value: '€ 12.480',
      delta: '+12 %',
      trend: 'positive'
    },
    {
      label: 'Bestellungen',
      value: '1.284',
      delta: '+8 %',
      trend: 'positive'
    },
    {
      label: 'Aktive Nutzer',
      value: '347',
      delta: '-3 %',
      trend: 'negative'
    }
  ];

  function buildCard(kpi) {
    var card = document.createElement('article');
    card.className = 'kpi-card';

    var value = document.createElement('span');
    value.className = 'kpi-value';
    value.textContent = kpi.value;

    var label = document.createElement('span');
    label.className = 'kpi-label';
    label.textContent = kpi.label;

    var delta = document.createElement('span');
    delta.className = 'kpi-delta';
    if (kpi.trend === 'positive') {
      delta.classList.add('is-positive');
    } else if (kpi.trend === 'negative') {
      delta.classList.add('is-negative');
    } else {
      delta.classList.add('is-neutral');
    }
    delta.textContent = kpi.delta;

    card.appendChild(value);
    card.appendChild(label);
    card.appendChild(delta);

    return card;
  }

  function render() {
    var container = document.getElementById('kpi-section');
    if (!container) {
      return;
    }

    KPI_DATA.forEach(function (kpi) {
      container.appendChild(buildCard(kpi));
    });
  }

document.addEventListener('DOMContentLoaded', render);
