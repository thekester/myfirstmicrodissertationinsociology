/* script.js
   Gestion de l'interactivité du livre :
   - Navigation entre chapitres
   - Download PDF (version simplifiée)
   - Évolution future : pagination, animations...
*/

// Sélection du bouton pour téléchargement
const downloadBtn = document.getElementById("downloadPdfBtn");

downloadBtn.addEventListener("click", () => {
  // Pour générer un PDF côté client, on peut utiliser une librairie type html2pdf, JSPDF, etc.
  // Ici, on se contente d'un message. 
  // ----
  // Exemple (non fonctionnel ici) :
  // html2pdf().from(document.body).save('Livre_JeunesContreVieux.pdf');
  alert("Fonction de génération PDF à implémenter (librairie côté client requise).");
});

// Gestion de la navigation chapitres
const chapterLinks = document.querySelectorAll(".chapter-link");
chapterLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      window.scrollTo({
        top: target.offsetTop - 80,
        left: 0,
        behavior: "smooth"
      });
    }
  });
});

// TODO futur : 
// - Ajouter un système de pagination interne 
// - Permettre la saisie de commentaires ou notes 
// - Faire évoluer la structure pour de réels 100 pages
