(function () {
  var filterRoot = document.querySelector('[data-publication-filters]');
  if (!filterRoot) {
    return;
  }

  var buttons = Array.prototype.slice.call(
    filterRoot.querySelectorAll('[data-theme]')
  );
  var scope =
    filterRoot.closest('.page__content') || document.querySelector('.page__content') || document;
  var items = Array.prototype.slice.call(scope.querySelectorAll('.list__item'));
  var themeSet = buttons
    .map(function (button) {
      return button.getAttribute('data-theme');
    })
    .filter(function (theme) {
      return theme && theme !== 'all';
    });

  var emptyMessage = document.createElement('p');
  emptyMessage.className = 'filter-empty';
  emptyMessage.textContent =
    'No publications match this theme yet — check back soon!';
  emptyMessage.hidden = true;
  filterRoot.insertAdjacentElement('afterend', emptyMessage);

  function applyFilter(theme) {
    var normalized = theme && themeSet.indexOf(theme) !== -1 ? theme : 'all';

    items.forEach(function (item) {
      var dataset = (item.getAttribute('data-themes') || '').split(/\s+/);
      var match =
        normalized === 'all' ||
        dataset.filter(Boolean).indexOf(normalized) !== -1;
      item.hidden = !match;
    });

    buttons.forEach(function (button) {
      var isActive = button.getAttribute('data-theme') === normalized;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    var visibleCount = items.filter(function (item) {
      return !item.hidden;
    }).length;
    emptyMessage.hidden = visibleCount !== 0;
  }

  filterRoot.addEventListener('click', function (event) {
    var button = event.target.closest('[data-theme]');
    if (!button || !filterRoot.contains(button)) {
      return;
    }
    var theme = button.getAttribute('data-theme');
    applyFilter(theme);
  });

  document.addEventListener('click', function (event) {
    var trigger = event.target.closest('[data-theme-trigger]');
    if (!trigger) {
      return;
    }
    var theme = trigger.getAttribute('data-theme-trigger');
    var matchingButton = filterRoot.querySelector(
      '[data-theme="' + theme + '"]'
    );
    if (matchingButton) {
      applyFilter(theme);
      try {
        matchingButton.focus({ preventScroll: true });
      } catch (error) {
        matchingButton.focus();
      }
    }
  });

  var params = new URLSearchParams(window.location.search);
  var initialTheme = params.get('theme');
  applyFilter(initialTheme);
})();
