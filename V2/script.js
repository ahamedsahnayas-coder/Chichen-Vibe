/* ================================================================
   CHICHEN VIBE — script.js
   Niveau : BUT 1 Informatique

   Sommaire :
     1. Menu hamburger (mobile)
     2. Modales "En savoir plus"
     3. Timeline "Lire la suite" / "Réduire"
     4. Bouton "Retour en haut"
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ================================================================
     1. MENU HAMBURGER (MOBILE)
     ================================================================ */

  var hamburgerBtn = document.getElementById('hamburger-btn');
  var mainNav      = document.getElementById('main-nav');

  if (hamburgerBtn && mainNav) {

    hamburgerBtn.addEventListener('click', function () {
      var estOuvert = mainNav.classList.toggle('open');
      hamburgerBtn.classList.toggle('is-open', estOuvert);
      hamburgerBtn.setAttribute('aria-expanded', String(estOuvert));
    });

    document.addEventListener('click', function (evenement) {
      var clicEnDehors = !hamburgerBtn.contains(evenement.target) &&
                         !mainNav.contains(evenement.target);
      if (clicEnDehors) {
        mainNav.classList.remove('open');
        hamburgerBtn.classList.remove('is-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });

  }

  /* ================================================================
     2. MODALES "EN SAVOIR PLUS"
     ================================================================ */

  /**
   * Ouvre la modale dont l'id est passé en paramètre.
   * @param {string} id
   */
  window.openModal = function (id) {
    var modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    /* Fermeture au clic sur le fond */
    function surFond(evenement) {
      if (evenement.target === modal) {
        window.closeModal(id);
        modal.removeEventListener('click', surFond);
      }
    }
    modal.addEventListener('click', surFond);

    /* Fermeture avec Échap */
    function surEchap(evenement) {
      if (evenement.key === 'Escape') {
        window.closeModal(id);
        document.removeEventListener('keydown', surEchap);
      }
    }
    document.addEventListener('keydown', surEchap);

    /* Focus accessibilité */
    var boutonFermer = modal.querySelector('.modal-close button');
    if (boutonFermer) boutonFermer.focus();
  };

  /**
   * Ferme la modale dont l'id est passé en paramètre.
   * @param {string} id
   */
  window.closeModal = function (id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  /* ================================================================
     3. TIMELINE — "LIRE LA SUITE" / "RÉDUIRE"

     Structure HTML attendue dans .timeline-card-body :
       <p class="excerpt">…</p>
       <div class="timeline-full-content">…</div>   ← AVANT le bouton
       <button class="btn-lire" onclick="toggleExpand(this)">…</button>

     previousElementSibling du bouton = .timeline-full-content
     ================================================================ */

  /**
   * Affiche ou masque le contenu complet d'une carte de timeline.
   * @param {HTMLElement} bouton
   */
  window.toggleExpand = function (bouton) {
    var contenu = bouton.previousElementSibling;

    if (!contenu || !contenu.classList.contains('timeline-full-content')) {
      return;
    }

    var estOuvert = bouton.getAttribute('aria-expanded') === 'true';

    if (estOuvert) {
      contenu.classList.remove('expanded');
      contenu.setAttribute('aria-hidden', 'true');
      bouton.setAttribute('aria-expanded', 'false');
      bouton.textContent = 'Lire la suite ↓';
    } else {
      contenu.classList.add('expanded');
      contenu.setAttribute('aria-hidden', 'false');
      bouton.setAttribute('aria-expanded', 'true');
      bouton.textContent = 'Réduire ↑';
    }
  };

  /* ================================================================
     4. BOUTON "RETOUR EN HAUT"
     ================================================================ */

  var scrollTopBtn = document.getElementById('scroll-top-btn');

  if (scrollTopBtn) {

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  }

}); /* fin DOMContentLoaded */