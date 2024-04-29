

var contraseña=document.getElementById('contraseña')
var contraseña2=document.getElementById('confirmar_contraseña')

function generadorcontraseña(){
const abc = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
var resultado='';
for(var letras=1;letras<=8;letras++){
        var random=Math.floor(Math.random()*abc.length)
        resultado+=abc[random]      
}

contraseña.textContent=resultado;
contraseña2.textContent=resultado;
}

