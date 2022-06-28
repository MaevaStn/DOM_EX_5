// Liste des journaux
let journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr", "http://sudouest.fr"];

let newUL = document.createElement('ul');
contenu.appendChild(newUL);

let firstLi = document.createElement('li');
let firstLink = document.createElement('a');
var firstText = document.createTextNode("Le Monde");

newUL.appendChild(firstLi);
firstLi.appendChild(firstLink);
firstLink.appendChild(firstText);
firstLink.href = journaux[0];

let secLi = document.createElement('li');
let secLink = document.createElement('a');
var secText = document.createTextNode("Le Figaro");

newUL.appendChild(secLi);
secLi.appendChild(secLink);
secLink.appendChild(secText);
secLink.href = journaux[1];


let thirdLi = document.createElement('li');
let thirdLink = document.createElement('a');
var thirdText = document.createTextNode("Libération");

newUL.appendChild(thirdLi);
thirdLi.appendChild(thirdLink);
thirdLink.appendChild(thirdText);
thirdLink.href = journaux[2];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
