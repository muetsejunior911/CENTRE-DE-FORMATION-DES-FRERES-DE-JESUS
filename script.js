// Script pour basculer entre les onglets
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Cache tous les éléments avec la classe "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Retire la classe "active" de tous les liens d'onglets
    tablinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Affiche l'onglet actuel et ajoute la classe "active"
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Ouvrir l'onglet par défaut
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.nav-link').click();
});

function openTab(event, tabName) {
  var i, tabcontent, tablinks;

  // Cacher tous les contenus des onglets
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Supprimer la classe "active" de tous les onglets
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Montrer le contenu de l'onglet spécifique et ajouter une classe "active" au bouton cliqué
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Affiche par défaut la section Accueil
document.getElementById("home").style.display = "block";
