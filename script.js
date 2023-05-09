const burger = document.querySelector(".burger");
const spans = document.querySelectorAll(".burger span");
const liens = document.querySelector(".liens");

burger.addEventListener("click", function() {
    this.classList.toggle("open");
    spans.forEach(span => span.classList.toggle("open"));
    liens.classList.toggle("show");
    });

// let titreNavigation = document.createElement("h1");
// titreNavigation.textContent = "Titre de la page";
// let barreNavigation = document.querySelector(".barre_navigation");
// let logo = barreNavigation.querySelector(".logo");
// barreNavigation.insertAdjacentElement(titreNavigation, logo);

// Kata n°1 : Créer du texte HTML via JS.
const titreNavigation = document.createElement("h1");
titreNavigation.textContent = "Bienvenue sur la chaîne de Gulnyr";
const logoDiv = document.querySelector(".logo");
logoDiv.insertAdjacentElement("afterend", titreNavigation);

titreNavigation.classList.add("titre_navigation");

const premiereKeyframes = [
    {opacity: 0, transform: "translateY(-10px"},
    {opacity: 1, transform: "translateY(0px)"}
];

const options = {
    duration: 1000,
    easting: "ease-in-out"
}
const effect = new KeyframeEffect(titreNavigation, premiereKeyframes, options);
const animation = new Animation(effect, document.timeline);
window.addEventListener("load", function() {
    animation.play();
});

// Kata n°3 : Créer une to do list.

// const suggereUnJeu = document.getElementById("insertion_jeu");
// const boutonAjouter = document.getElementById("bouton_ajouter");
// const listeSubjections = document.getElementById("liste_subjections");

// boutonAjouter.addEventListener('click', function() {
//     const jeu = suggereUnJeu.value;

//     if (jeu) {
//         const nomDuJeu = document.createElement("li");
//         nomDuJeu.innerText = jeu;
//         listeSubjections.appendChild(nomDuJeu);
//         // Cette ligne permet de vider le champ d'écriture une fois le jeu ajoutait à la liste.
//         suggereUnJeu.value = "";
//     } else {
//         alert("Entrez le nom d'un jeu");
//     }
// });