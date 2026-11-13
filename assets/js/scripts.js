/* AHDOOMA theme: mobile menu, active menu glow and background motion. */
(function () {
   var toggle = document.querySelector('.js-menu-toggle');
   var topbar = document.querySelector('.js-topbar');

   if (toggle && topbar) {
      toggle.addEventListener('click', function () {
         var open = topbar.classList.toggle('is-open');
         toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      document.addEventListener('keydown', function (e) {
         if (e.key === 'Escape' && topbar.classList.contains('is-open')) {
            topbar.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.focus();
         }
      });
   }

   /* Pause the background while the tab is hidden, to save battery. */
   var bg = document.querySelector('.bg');
   if (bg) {
      document.addEventListener('visibilitychange', function () {
         bg.classList.toggle('is-paused', document.hidden);
      });
   }
})();
