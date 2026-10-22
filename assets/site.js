(function () {
  var cfg = window.STORE || {};
  var buy = cfg.buy || {};
  document.querySelectorAll('[data-buy]').forEach(function (el) {
    var slug = el.getAttribute('data-buy');
    var url = buy[slug];
    if (url && url !== '#') {
      el.setAttribute('href', url);
      el.removeAttribute('aria-disabled');
      el.textContent = 'Buy - ' + (el.getAttribute('data-price') || '');
      el.target = '_blank';
      el.rel = 'noopener';
    } else {
      el.setAttribute('aria-disabled', 'true');
      el.setAttribute('href', '#checkout');
      el.addEventListener('click', function (e) { e.preventDefault(); });
    }
  });
  var y = document.querySelectorAll('[data-year]');
  for (var i = 0; i < y.length; i++) y[i].textContent = new Date().getFullYear();
})();
