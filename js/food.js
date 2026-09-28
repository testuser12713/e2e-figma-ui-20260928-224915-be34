document.addEventListener('DOMContentLoaded', function () {
  'use strict';

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
  main.insertBefore(header, main.firstChild);

  // In-Memory-Sitzungszustand mit Beispieldaten (keine Persistenz über Reload).
  let dishes = [
    { id: 1, name: 'Wiener Schnitzel', price: 14.9, category: 'Hauptgericht', description: 'Vom Kalb, mit Preiselbeeren und Kartoffelsalat' },
    { id: 2, name: 'Caesar Salad', price: 9.5, category: 'Salat', description: 'Römersalat, Parmesan, Croutons, Caesar-Dressing' },
    { id: 3, name: 'Kaiserschmarrn', price: 8.9, category: 'Dessert', description: 'Fluffig, mit Apfelmus und Rosinen' },
    { id: 4, name: 'Tom Kha Gai', price: 11.5, category: 'Suppe', description: 'Thailändische Kokos-Hühnersuppe mit Koriander' },
  ];

  let nextId = dishes.length + 1;
  let editingId = null;

  const listEl = document.getElementById('food-list');
  const emptyEl = document.getElementById('food-empty');
  const addBtn = document.getElementById('add-food-btn');
  const modalEl = document.getElementById('food-modal');
  const modalTitleEl = document.getElementById('food-modal-title');
  const formEl = document.getElementById('food-form');
  const cancelBtn = document.getElementById('cancel-food-btn');

  const idInput = document.getElementById('food-id');
  const nameInput = document.getElementById('food-name');
  const priceInput = document.getElementById('food-price');
  const categoryInput = document.getElementById('food-category');
  const descriptionInput = document.getElementById('food-description');

  function formatPrice(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) {
      return '0,00 €';
    }
    return num.toFixed(2).replace('.', ',') + ' €';
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function renderList() {
    listEl.innerHTML = '';

    if (dishes.length === 0) {
      emptyEl.hidden = false;
      return;
    }

    emptyEl.hidden = true;

    dishes.forEach(function (dish) {
      const li = document.createElement('li');
      li.className = 'food-item';
      li.dataset.id = dish.id;
      li.innerHTML =
        '<div class="food-item-info">' +
          '<span class="food-item-name">' + escapeHtml(dish.name) + '</span>' +
          '<span class="food-item-desc">' + escapeHtml(dish.description || '') + '</span>' +
        '</div>' +
        '<div class="food-item-meta">' +
          '<span class="badge badge-neutral">' + escapeHtml(dish.category || '') + '</span>' +
          '<span class="food-item-price">' + formatPrice(dish.price) + '</span>' +
        '</div>' +
        '<div class="food-item-actions">' +
          '<button type="button" class="icon-btn" data-action="edit" aria-label="Bearbeiten">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>' +
          '</button>' +
          '<button type="button" class="icon-btn icon-btn-danger" data-action="delete" aria-label="Löschen">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>' +
          '</button>' +
        '</div>';
      listEl.appendChild(li);
    });
  }

  function openModal(dish) {
    editingId = dish ? dish.id : null;
    idInput.value = dish ? dish.id : '';
    nameInput.value = dish ? dish.name : '';
    priceInput.value = dish ? dish.price : '';
    categoryInput.value = dish ? dish.category : '';
    descriptionInput.value = dish ? dish.description : '';
    modalTitleEl.textContent = dish ? 'Gericht bearbeiten' : 'Neues Gericht';
    modalEl.hidden = false;
    nameInput.focus();
  }

  function closeModal() {
    modalEl.hidden = true;
    editingId = null;
    formEl.reset();
  }

  function readForm() {
    return {
      name: nameInput.value.trim(),
      price: Number(String(priceInput.value).replace(',', '.')),
      category: categoryInput.value.trim(),
      description: descriptionInput.value.trim(),
    };
  }

  addBtn.addEventListener('click', function () {
    openModal(null);
  });

  cancelBtn.addEventListener('click', closeModal);

  modalEl.addEventListener('click', function (event) {
    if (event.target === modalEl) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modalEl.hidden) {
      closeModal();
    }
  });

  formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = readForm();

    if (!data.name) {
      nameInput.focus();
      return;
    }
    if (!Number.isFinite(data.price) || data.price < 0) {
      priceInput.focus();
      return;
    }
    if (!data.category) {
      categoryInput.focus();
      return;
    }

    if (editingId !== null) {
      dishes = dishes.map(function (dish) {
        if (dish.id === editingId) {
          return {
            id: dish.id,
            name: data.name,
            price: data.price,
            category: data.category,
            description: data.description,
          };
        }
        return dish;
      });
    } else {
      dishes.push({
        id: nextId,
        name: data.name,
        price: data.price,
        category: data.category,
        description: data.description,
      });
      nextId += 1;
    }

    renderList();
    closeModal();
  });

  listEl.addEventListener('click', function (event) {
    const button = event.target.closest('button[data-action]');
    if (!button) {
      return;
    }
    const li = button.closest('.food-item');
    const id = Number(li.dataset.id);
    const dish = dishes.find(function (d) { return d.id === id; });

    if (!dish) {
      return;
    }

    if (button.dataset.action === 'edit') {
      openModal(dish);
    } else if (button.dataset.action === 'delete') {
      if (window.confirm('Möchten Sie „' + dish.name + '“ wirklich löschen?')) {
        dishes = dishes.filter(function (d) { return d.id !== id; });
        renderList();
      }
    }
  });

  renderList();
});
