// Esperar 2 segundos y luego mostrar el contenido principal
setTimeout(function () {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('main').classList.remove('hidden');
}, 2000); 

