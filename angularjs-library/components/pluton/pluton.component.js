(function (angular) {

  angular
    .module('PlanetaPlutonModule', [])
    .component('planetaPluton', {
      template: `
      <div class="container-planeta pluton">
        <p>
          Plutón, designado (134340) Pluto, es un planeta enano 
          del sistema solar situado a continuación de la órbita de Neptuno.
        </p>
      </div>
      `,
      controller: function () {
        
      }
    });

})(window.angular);
