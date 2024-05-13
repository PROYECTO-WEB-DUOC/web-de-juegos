document.addEventListener('DOMContentLoaded', () => {


    const fecha_juego = new Date('06/13/2024 0:01 AM');

    const dias = document.querySelector('#days');
    const horas = document.querySelector('#hours');
    const minutos = document.querySelector('#minutes');
    const segundos = document.querySelector('#seconds');
    
    const milisegundos_segundo = 1000;
    const milisegundos_minuto = milisegundos_segundo * 60;
    const milisegundos_hora= milisegundos_minuto * 60;
    const milisegundos_dias = milisegundos_hora* 24

    

    
    function updateCountdown() {
        
        const now = new Date()
        const duracion = fecha_juego - now;
        const dias_restantes = Math.floor(duracion / milisegundos_dias);
        const horas_restantes = Math.floor((duracion % milisegundos_dias) / milisegundos_hora);
        const minutos_restantes = Math.floor((duracion % milisegundos_hora) / milisegundos_minuto);
        const segundos_restantes = Math.floor((duracion % milisegundos_minuto) / milisegundos_segundo);
        
        dias.textContent = dias_restantes;
        horas.textContent = horas_restantes;
        minutos.textContent =  minutos_restantes;
        segundos.textContent = segundos_restantes;
    }

   
    updateCountdown();
    
    setInterval(updateCountdown,1000);

    //cambio de color

    let btnblanco=document.getElementById('fondoblanco')
    let body=document.getElementById('body')
    let btnnegro=document.getElementById('fondonegro')
    let navbar=document.getElementById('navbar')
    let navlink=document.getElementById('navlink')
    let video=document.getElementById('video')
    let contador=document.getElementById('contador')
    let navbar_toggler=document.getElementById('navbar_toggler');
    let titulos=document.getElementById('titulo')
    let titulos2=document.getElementById('titulo2')
    let titulos3=document.getElementById('titulo3')
    let footer=document.getElementById('footer')
    let blanco=document.getElementById('blanco')
    let negro=document.getElementById('negro')
    let next=document.getElementById('next')
    let prev=document.getElementById('prev')
    btnnegro.addEventListener('click',(e)=>{
        e.preventDefault();
        body.style='background: #fff; '
        navlink.style='color: black'
        contador.style='color:black'
        navbar_toggler.style='border: 1px solid white; background-color:#fff;'
        titulos.style='color:black;'
        titulos2.style='color:black;'
        titulos3.style='color:black;'
        footer.style='--bs-bg-opacity: 0; background: linear-gradient(rgb(40, 40, 40), rgb(56, 56, 56));'
        blanco.style='background-color:#0b5ed7'
        negro.style=''
        next.style='background-color:rgb(56, 56, 56)'
        prev.style='background-color:rgb(56, 56, 56)'
    })


    btnblanco.addEventListener('click',(e)=>{
        e.preventDefault();
        body.style=''
        navbar.style=''
        navlink.style='color: black'
        video.style=''
        contador.style=''
        navbar_toggler.style=''
        titulos.style=''
        titulos2.style=''
        titulos3.style=''
        footer.style=''
        blanco.style=''
        negro.style='background-color:#0b5ed7'
        next.style=''
        prev.style=''
    })
});

