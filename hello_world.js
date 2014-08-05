
// il est possible d'écrire le code JVS dans un fichier externem portant l'extension .js
// ce fichier est ensuite appelé depuis la page Web au moyen d'élément <script> et de son attribut src qui contient URL du fichier

<html>
	<head>
		<title> Hello World </title>
	</head>
	
	<body>
		<script src="hello.js"></script>
	</body>

</html>

// on suppose ici que le hello.js se trouve dans le même répertoire aue la page Web

// variables
var text1 = "Mon premier text"; // string
var number = 5; // number
var isTrue = true; // boolean

// interagir avec l'utilisateur
var text = 'Bonjour';
text+= 'toi';
alert(text); // affiche 'Bonjour toi'

var userName = prompt('Entrez votre prenom: ');
alert(userName); // affiche le prenom entre par l'utilisateur

//
var start = "Bonjour", name, end = " !", result;
name = prompt("Quel est votre prenom ?");
result = start + name + end;
alert(result)

// 
var first, second, result;
first = prompt("premier chiffre: ");
second = prompt("second chiffre: ");
result = parseInt(first) + parseInt(second); // parseInt() char-number conversion
alert(result);

// conditions

var floor = parseInt(prompt("entrez l'etage ascenseur doit se rendre: "));

if (floor==0){
	alert(" vous vous trouvez deja au rdc.");
} else if (-2<=floor && floor <=30){
	alert("direction etage n " + floor);
} else {
	alert("l'etage n'existe pas");
}

// condition switch
var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));

switch (drawer) {
    case 1:
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
    break;

    case 2:
        alert('Contient du matériel informatique : des câbles, des composants, etc.');
    break;

    case 3:
        alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
    break;

    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
    break;

    default:
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
}

// les boucles
var number = 1;
while(number<10){
	number++;
}
alert(number); // affiche 10

// exemple pratique
var nicks = '', nick,
    proceed = true;

while (proceed) {
    nick = prompt('Entrez un prénom :');
  
    if (nick) {
        nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'une espace juste après
    } else {
        proceed = false; // Aucun prénom n'a été entré, donc on fait en sorte d'invalider la condition
    }
}

alert(nicks); // Affiche les prénoms à la suite

// utilisation du break
var nicks = '', nick;

while (true) {
    nick = prompt('Entrez un prénom :');
  
    if (nick) {
        nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'une espace juste après
    } else {
        break; // On quitte la boucle
    }
}

alert(nicks); // Affiche les prénoms à la suite

// boucle for
for (var nicks = '', nick; true;) {
    nick = prompt('Entrez un prénom :');
  
    if (nick) {
        nicks += nick + ' ';  
    } else {
        break;  
    }	
}

alert(nicks);

// les fonctions

function byTwo() {
    var result = parseInt(prompt('Donnez le nombre à multiplier par 2 :'));
    alert(result * 2);
}

byTwo();

alert('Vous en êtes à la moitié !');

byTwo();

// les variables globales, locales

var message = 'Ici la variable globale !';

function showMsg() {
    var message = 'Ici la variable locale !';
    alert(message);
}

showMsg();

alert(message);

// function(arg)

// array
var myArray = [];
myArray.push(element); // ajouter element a la fin du tableau
myArray.pop(); // retirer element a la fin du tableau
myArray.shift(); // retirer element au debut du tableau

for (var i=0; i < myArray.length; i++){
	alert(myArray[i]);
}










