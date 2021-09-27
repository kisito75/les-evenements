do{
	var nbr = prompt("saisir une valeur positive");
	if(nbr <=0){
		var nbr = prompt("pas de valeur negative");
	}
}while (nbr<=0)


var mytab = [];

for (var i=1; i<=nbr; i++) {

//methode 1
//my tab [i]= prompt("saisir une valeur ");

//methode 2
var valeurssaisies = prompt("saisir une valeur");
mytab[i]= valeurssaisies;
document.write(" "+mytab[i]+" ");
}

