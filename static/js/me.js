(function () {
  try {
    var p = new URLSearchParams(window.location.search);
    if (p.get('me') === '1') localStorage.setItem('mythogen_me', '1');
    if (p.get('me') === '0') localStorage.removeItem('mythogen_me');
    if (localStorage.getItem('mythogen_me') === '1') {
      window['ga-disable-G-C089DF9NW5'] = true;
    }
  } catch (e) {}
})();
