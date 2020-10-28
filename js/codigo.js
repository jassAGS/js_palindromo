var frase = prompt("ingrese la cadena:");

function palindromo(frase){
  var fraseusar= frase.split(' ').join('');
  var fraseal ='';
  var palindromesino='';
  for(var i=fraseusar.length-1; i>=0; i-- ){
    fraseal +=fraseusar[i];

  }
  if(fraseusar.toLowerCase()==fraseal.toLowerCase()){
    alert("es palindromo");
  }else{
    alert("no es palindromo");
  }

  
}

palindromo(frase);
