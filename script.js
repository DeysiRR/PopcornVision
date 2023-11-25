// Esperar 2 segundos y luego mostrar el contenido principal
setTimeout(function () {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('main').classList.remove('hidden');
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
  // Obtener referencias a los botones y modelos
const nachosButton = document.getElementById('nachosButton');
const hotdogButton = document.getElementById('hotdogButton');
const sodaButton = document.getElementById('sodaButton');
const popcornButton = document.getElementById('popcornButton');

const nachoModel = document.getElementById('nachoIndividual');
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
