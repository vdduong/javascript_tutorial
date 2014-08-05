
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









