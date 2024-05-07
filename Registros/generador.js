
function generadorcontraseña() {
        const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
        var resultado = '';
        for (var letras = 1; letras <= 8; letras++) {
            var random = Math.floor(Math.random() * abc.length);
            resultado += abc[random];
        }
    
        document.getElementById('contraseña').value = resultado;
        document.getElementById('confirmar_contraseña').value = resultado;
    }
 



function mostrarcontraseña(){
  var mostrar = document.getElementById('contraseña');
        
        mostrar.setAttribute('type','text')
        var contraseña=document.getElementById('mostrar_contraseña')
        contraseña.style.display='none';
        var ocultar=document.getElementById('ocultar_contraseña')
        ocultar.style.display='';
   
     
}
function ocultarcontraseña(){
        var mostrar = document.getElementById('contraseña');
        
        mostrar.setAttribute('type','password')
        
        var ocultar=document.getElementById('ocultar_contraseña')
        ocultar.style.display='none';
        var contraseña=document.getElementById('mostrar_contraseña')
        contraseña.style.display='';
        
}
       

    