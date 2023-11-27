// Esperar 2 segundos y luego mostrar el contenido principal y los botones
setTimeout(function () {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('main').classList.remove('hidden');
    
    // Mostrar los botones después de ocultar la pantalla de inicio
    document.querySelector('.buttons-container').style.visibility = 'visible';
}, 2000); // 2000 milisegundos = 2 segundos




AFRAME.registerComponent('rotation-reader', {
    /**
     * We use IIFE (immediately-invoked function expression) to only allocate one
     * vector or euler and not re-create on every tick to save memory.
     */
    tick: (function () {
        var position = new THREE.Vector3();
        var quaternion = new THREE.Quaternion();

        return function () {
            this.el.object3D.getWorldPosition(position);
            this.el.object3D.getWorldQuaternion(quaternion);
            // position and rotation now contain vector and quaternion in world space.
        };
    })()
});


var showingNacho = 1;
const nachos = [];
nachos.push(document.getElementById('enachoIndividual'));
nachos.push(document.getElementById('enachoGrande'));


var showingSoda = 1;
const sodas = [];
sodas.push(document.getElementById('esodaChica'));
sodas.push(document.getElementById('esodaMediana'));
sodas.push(document.getElementById('esodaGrande'));
sodas.push(document.getElementById('esodaJumbo'));


var showingHD = 1;
const hotdogs = [];
hotdogs.push(document.getElementById('ehdIndividual'));
hotdogs.push(document.getElementById('ehdJumbo'));


var showingPopcorn = 1;
const palomitas = [];
palomitas.push(document.getElementById('epalomitaChica'));
palomitas.push(document.getElementById('epalomitaMediana'));
palomitas.push(document.getElementById('epalomitaGrande'));
palomitas.push(document.getElementById('epalomitaJumbo'));
palomitas.push(document.getElementById('epalomitaLlevar'));

function showHotdogs(){
    hideAllModels();
    /*for(var i = 0; i < hotdogs.length; i++){
        hotdogs[i].setAttribute('visible', false);
    }*/
    hotdogs[showingHD%hotdogs.length].setAttribute('visible', true);
    showingHD++;
};

function showNachos(){
    hideAllModels();
    /*for(var i = 0; i < nachos.length; i++){
        nachos[i].setAttribute('visible', false);
    }*/
    nachos[showingNacho%nachos.length].setAttribute('visible', true);
    showingNacho++;
};

function showSodas(){
    hideAllModels();
    /*for(var i = 0; i < sodas.length; i++){
        sodas[i].setAttribute('visible', false);
    }*/
    sodas[showingSoda%sodas.length].setAttribute('visible', true);
    showingSoda++;
};

function showPalomitas(){
    hideAllModels();
    /*for(var i = 0; i < popcorns.length; i++){
        popcorns[i].setAttribute('visible', false);
    }*/
    palomitas[showingPopcorn%palomitas.length].setAttribute('visible', true);
    showingPopcorn++;
};

function hideAllModels() {
    for(var i = 0; i < nachos.length; i++){
        nachos[i].setAttribute('visible', false);
    }
    for(var i = 0; i < sodas.length; i++){
        sodas[i].setAttribute('visible', false);
    }
    for(var i = 0; i < hotdogs.length; i++){
        hotdogs[i].setAttribute('visible', false);
    }
    for(var i = 0; i < palomitas.length; i++){
        palomitas[i].setAttribute('visible', false);
    }
};





/*
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los botones y modelos
    const nachosButton = document.getElementById('nachosButton');
    const hotdogButton = document.getElementById('hotdogButton');
    const sodaButton = document.getElementById('sodaButton');
    const popcornButton = document.getElementById('popcornButton');

    var nachoModel = document.getElementById('nachoIndividual');
    const hotdogModel = document.getElementById('hdIndividual');
    const sodaModel = document.getElementById('sodaMediana');
    const popcornModel = document.getElementById('sodaGrande'); // Cambiar al modelo de palomitas si lo tienes

    // Asignar funciones a los eventos de clic en los botones
    nachosButton.addEventListener('click', () => {
        // Ocultar todos los modelos
        hideAllModels();
        // Mostrar el modelo de nachos
        nachoModel.setAttribute('visible', true);
    });

    hotdogButton.addEventListener('click', () => {
        // Ocultar todos los modelos
        hideAllModels();
        // Mostrar el modelo de hot dog
        hotdogModel.setAttribute('visible', true);
    });

    sodaButton.addEventListener('click', () => {
        // Ocultar todos los modelos
        hideAllModels();
        // Mostrar el modelo de soda
        sodaModel.setAttribute('visible', true);
    });

    popcornButton.addEventListener('click', () => {
        // Ocultar todos los modelos
        hideAllModels();
        // Mostrar el modelo de palomitas (cambia al modelo que tengas)
        popcornModel.setAttribute('visible', true);
    });

    // Función para ocultar todos los modelos
    function hideAllModels() {
        nachoModel.setAttribute('visible', false);
        hotdogModel.setAttribute('visible', false);
        sodaModel.setAttribute('visible', false);
        popcornModel.setAttribute('visible', false);
    }
});*/