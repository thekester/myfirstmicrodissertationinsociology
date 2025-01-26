/* script.js
   Gestion de l'interactivité du livre :
   - Navigation entre chapitres
   - Download PDF (fonction d'exemple via html2pdf.js)
   - Évolution future : pagination, animations...
*/

// Sélection du bouton pour téléchargement
const downloadBtn = document.getElementById("downloadPdfBtn");

// Au clic, on génère un PDF du contenu du livre
downloadBtn.addEventListener("click", () => {
  // Sélection de l'élément qui contiendra le livre entier
  const element = document.getElementById("book-content");

  // Options pour html2pdf
  const options = {
    margin:       0.5,
    filename:     'JeunesContreVieux_TheophileAvenel.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Génération et téléchargement du PDF
  html2pdf().set(options).from(element).save();
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
// - Faire évoluer la structure pour de réels 100 pages ou plus
