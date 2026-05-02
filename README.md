# 🏛️ Chichen Vibe — Site Web Touristique

---

## 📌 Présentation du projet

**Chichen Vibe** est un site web touristique dédié au site archéologique de **Chichén Itzá**, situé dans la péninsule du Yucatán au Mexique. Ce lieu, classé au **Patrimoine Mondial de l'UNESCO** et élu l'une des **7 Nouvelles Merveilles du Monde**, est présenté à travers plusieurs pages riches en contenu historique et visuel.

L'objectif de ce projet était de **transformer une maquette Figma en un site web fonctionnel**, en appliquant les connaissances acquises en cours de développement web.

⚠️ **Projet en cours de développement** — Seules deux pages HTML ont été réalisées pour le moment (`index.html` et `histoire.html`). Les autres pages prévues dans la navigation (Monuments, UNESCO, Parcours, Galerie, Accès) seront développées ultérieurement.  
Le site est actuellement **disponible uniquement en français**. Une version anglaise est prévue mais pas encore implémentée.

---

## 🚀 Consulter mon Portfolio

Mon projet est hébergé en ligne pour une consultation immédiate :  
👉 **[Cliquer ici pour voir le site en ligne](https://ahamedsahnayas-coder.github.io/Chichen-Vibe/)**

Ou bien via le terminal (bash) :

```
bash
git clone https://github.com/ahamedsahnayas-coder/Chichen-Vibe.git

cd Chichen-Vibe

# Windows : start index.html | Mac : open index.html | Linux : xdg-open index.html
```

---

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
| **HTML5** | Structure et contenu des pages |
| **CSS3** | Mise en forme, animations, design responsive |
| **JavaScript** | Interactions dynamiques (menus, modales, timeline) |

Aucun framework ni bibliothèque externe n'a été utilisé. Le site est entièrement développé en HTML/CSS/JS natif.

---

## 📁 Structure du projet

```
chichen-vibe/
│
├── index.html        → ✅ Page d'accueil (réalisée)
├── histoire.html     → ✅ Page Histoire (réalisée)
├── monuments.html    → 🔜 Page Monuments (prévue)
├── unesco.html       → 🔜 Page UNESCO (prévue)
├── parcours.html     → 🔜 Page Parcours (prévue)
├── galerie.html      → 🔜 Page Galerie (prévue)
├── acces.html        → 🔜 Page Accès (prévue)
│
├── styles.css        → Feuille de style principale (design complet du site)
├── script.js         → Fichier JavaScript (interactions et comportements)
│
└── images/           → Dossier contenant toutes les images du site
    ├── castillo.jpg
    ├── civilisation.jpg
    ├── facebook.png
    ├── instagram.png
    ├── tiktok.png
    ├── MCN.jpg
    └── ...
```

---

### Détail des fichiers principaux

- **`index.html`** — Page d'accueil avec un hero plein écran (image de fond, titre, badge UNESCO, bouton vers le site officiel).
- **`histoire.html`** — Page Histoire composée de deux grandes sections : 4 cartes thématiques cliquables et une chronologie interactive en 7 étapes.
- **`styles.css`** — Contient l'intégralité du design : palette de couleurs, typographies, layout des composants, modales, chronologie et responsive design.
- **`script.js`** — Gère les interactions JavaScript : menu hamburger mobile, ouverture/fermeture des modales, affichage dynamique de la timeline, et bouton "retour en haut".

---

## ✨ Fonctionnalités

- **Navigation multi-pages** — Barre de navigation commune à toutes les pages avec lien actif mis en évidence
- **Design responsive** — Le site s'adapte aux mobiles, tablettes et ordinateurs
- **Menu hamburger** — Navigation mobile avec animation d'ouverture/fermeture
- **Modales "En savoir plus"** — Fenêtres contextuelles avec contenu détaillé, fermeture par clic sur le fond ou touche Échap
- **Boutons "Lire la suite / Réduire"** — Affichage progressif du contenu dans la chronologie
- **Liens réseaux sociaux** — Facebook, Instagram, TikTok (footer)
- **Bouton retour en haut** — Apparaît après 400px de défilement
- **Sélecteur de langue FR / EN** — Présent dans le header (interface prête, traduction non encore implémentée — site disponible en français uniquement)

---

## 👥 Répartition du travail

Le projet a été réalisé en groupe de 3 personnes. Chaque membre a contribué à la fois à la partie HTML/CSS et à la partie JavaScript.


### 👤 Millan LECHAR — Structure & Intégration HTML

**HTML/CSS :**
- Création de la structure globale du site (header, footer, balises sémantiques)
- Développement de la page `index.html` (hero, badge UNESCO, bouton officiel)
- Mise en place du header (logo, navigation, sélecteur de langue, bouton hamburger)
- Contribution CSS ciblée sur les composants développés

**JavaScript :**
- Menu hamburger mobile : ouverture/fermeture, animation des barres, gestion de l'attribut `aria-expanded`
- Fermeture automatique du menu au clic en dehors de la zone de navigation

---

### 👤 Nayas AHAMEDSAH — Design CSS & Mise en Forme

**HTML/CSS :**
- Développement de la section "4 cartes thématiques" et des modales dans `histoire.html`
- Intégration du hero de la page Histoire (titre, divider, badge)
- Travail CSS approfondi : palette de couleurs, typographies, variables CSS, composants visuels et footer

**JavaScript :**
- Fonctions `openModal()` et `closeModal()` : affichage des modales, blocage du scroll, fermeture au clic sur le fond et à la touche Échap
- Gestion du focus accessibilité sur le bouton de fermeture

---

### 👤 Rémy MARCELS — Chronologie, Responsive & Footer

**HTML/CSS :**
- Développement de la section chronologie dans `histoire.html` (7 entrées timeline)
- Mise en page du footer commun (colonnes, badges, réseaux sociaux, logo MCN)
- Intégration du responsive design complet (media queries mobile et tablette)

---

## 🚀 Améliorations possibles

- **Compléter les pages manquantes** — Monuments, UNESCO, Parcours, Galerie, Accès sont prévues mais pas encore développées
- **Version anglaise fonctionnelle** — Le sélecteur de langue FR/EN est présent dans le header mais le site est uniquement disponible en français pour le moment
- **Améliorer les animations** — Ajouter des transitions d'entrée (scroll animations, fade-in) pour dynamiser la navigation

---

## 🎓 AUTEUR : Millan LECHAR, Rémy MARCELS, Nayas AHAMEDSAH

Projet réalisé dans le cadre du **BUT 1 Informatique**
Université Gustave Eiffel — Année universitaire 2025-2026

---

*Site consacré à Chichén Itzá — Patrimoine Mondial de l'UNESCO 🏛️*
