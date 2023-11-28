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

AFRAME.registerComponent('look-at', {
    schema: { type: 'selector' },
    
    init: function () {},
  
    tick: function () {
      this.el.object3D.lookAt(this.data.object3D.position)
    }
  })


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
    hotdogs[showingHD%hotdogs.length].setAttribute('visible', true);
    showingHD++;
};

function showNachos(){
    hideAllModels();
    nachos[showingNacho%nachos.length].setAttribute('visible', true);
    showingNacho++;
};

function showSodas(){
    hideAllModels();
    sodas[showingSoda%sodas.length].setAttribute('visible', true);
    showingSoda++;
};

function showPalomitas(){
    hideAllModels();
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