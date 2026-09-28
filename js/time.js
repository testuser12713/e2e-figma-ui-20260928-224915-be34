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
  main.insertBefore(header, main.firstChild);

  // Beispieldaten (liegen inline im Sitzungszustand dieser Seite).
  var kpis = [
    { label: 'Geplante Stunden heute', value: '96 h' },
    { label: 'Überstunden (Woche)', value: '12 h' },
    { label: 'Im Dienst', value: '9' },
    { label: 'Offene Schichten', value: '3' }
  ];

  var shifts = [
    { id: 'anna', name: 'Anna Weber', detail: 'Service · 10:00 – 18:00', onDuty: true, status: 'Im Dienst', badge: 'success' },
    { id: 'lukas', name: 'Lukas Meyer', detail: 'Küche · 11:00 – 19:00', onDuty: true, status: 'Im Dienst', badge: 'success' },
    { id: 'sofia', name: 'Sofia Rossi', detail: 'Service · 09:00 – 15:00', onDuty: true, status: 'Pause', badge: 'warning' },
    { id: 'ben', name: 'Ben Fischer', detail: 'Küche · 17:00 – 23:00', onDuty: false, status: 'Nicht anwesend', badge: 'neutral' }
  ];

  var slots = [
    { id: 'open-1', title: 'Service', time: 'Donnerstag · 18:00 – 22:00', booked: false },
    { id: 'open-2', title: 'Küche', time: 'Freitag · 11:00 – 19:00', booked: false },
    { id: 'open-3', title: 'Service', time: 'Samstag · 09:00 – 15:00', booked: false }
  ];

  var content = document.getElementById('time-content');

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function render() {
    var html = '';

    html += '<section class="section" aria-label="Kennzahlen">';
    html += '<div class="kpi-grid">';
    kpis.forEach(function (kpi) {
      html +=
        '<article class="card kpi">' +
        '<div class="kpi-head"><span class="kpi-label">' + escapeHtml(kpi.label) + '</span></div>' +
        '<p class="kpi-value">' + escapeHtml(kpi.value) + '</p>' +
        '</article>';
    });
    html += '</div>';
    html += '</section>';

    html += '<section class="section" aria-label="Schichtplan heute">';
    html += '<h2 class="section-title">Schichtplan heute</h2>';
    html += '<div class="list" id="shift-list">';
    shifts.forEach(function (s) {
      html +=
        '<div class="list-row">' +
        '<div class="list-info"><p class="list-title">' + escapeHtml(s.name) + '</p>' +
        '<p class="list-subtitle">' + escapeHtml(s.detail) + '</p></div>' +
        '<span class="badge badge-' + escapeHtml(s.badge) + '">' + escapeHtml(s.status) + '</span>' +
        '<button class="toggle" role="switch" aria-checked="' + s.onDuty + '" ' +
        'aria-label="Anwesenheit ' + escapeHtml(s.name) + '" data-shift-id="' + escapeHtml(s.id) + '"></button>' +
        '</div>';
    });
    html += '</div>';
    html += '</section>';

    html += '<section class="section" aria-label="Offene Schichten">';
    html += '<h2 class="section-title">Offene Schichten</h2>';
    html += '<div class="list" id="slot-list">';
    slots.forEach(function (slot) {
      var badgeText = slot.booked ? 'Gebucht' : 'Offen';
      var badgeClass = slot.booked ? 'success' : 'neutral';
      var actionLabel = slot.booked ? 'Stornieren' : 'Übernehmen';
      html +=
        '<div class="slot' + (slot.booked ? ' is-booked' : '') + '" role="button" tabindex="0" ' +
        'aria-pressed="' + slot.booked + '" aria-label="Zeitslot ' + escapeHtml(slot.title) + ' ' + escapeHtml(slot.time) + '" ' +
        'data-slot-id="' + escapeHtml(slot.id) + '">' +
        '<div class="list-info"><p class="list-title">' + escapeHtml(slot.title) + '</p>' +
        '<p class="list-subtitle">' + escapeHtml(slot.time) + '</p></div>' +
        '<span class="badge badge-' + badgeClass + '">' + badgeText + '</span>' +
        '<span class="slot-action">' + actionLabel + '</span>' +
        '</div>';
    });
    html += '</div>';
    html += '</section>';

    content.innerHTML = html;
  }

  function toggleShift(id) {
    shifts.forEach(function (s) {
      if (s.id === id) {
        s.onDuty = !s.onDuty;
        if (s.onDuty) {
          s.status = 'Im Dienst';
          s.badge = 'success';
        } else {
          s.status = 'Nicht anwesend';
          s.badge = 'neutral';
        }
      }
    });
    render();
  }

  function toggleSlot(id) {
    slots.forEach(function (slot) {
      if (slot.id === id) {
        slot.booked = !slot.booked;
      }
    });
    render();
  }

  content.addEventListener('click', function (event) {
    var toggle = event.target.closest('.toggle');
    if (toggle) {
      toggleShift(toggle.getAttribute('data-shift-id'));
      return;
    }

    var slot = event.target.closest('.slot');
    if (slot) {
      toggleSlot(slot.getAttribute('data-slot-id'));
    }
  });

  content.addEventListener('keydown', function (event) {
    var slot = event.target.closest('.slot');
    if (!slot) {
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSlot(slot.getAttribute('data-slot-id'));
    }
  });

  render();
});
