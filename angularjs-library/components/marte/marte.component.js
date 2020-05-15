(function (angular) {

  angular
    .module('PlanetaMarteModule', [])
    .component('planetaMarte', {
      template: `
      <div class="container-planeta marte">
        <p>
          Marte es el cuarto planeta en orden de distancia al Sol y
          el segundo más pequeño del sistema solar, después de Mercurio
        </p>
      </div>
      `,
      controller: function () {
        
      }
    });

})(window.angular);
