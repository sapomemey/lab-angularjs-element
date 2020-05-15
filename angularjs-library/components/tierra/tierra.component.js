(function (angular) {

  angular
    .module('PlanetaTierraModule', [])
    .component('planetaTierra', {
      template: `
      <div class="container-planeta tierra">
        <div class="tierra-box">
          <div ng-click="$ctrl.toggle()" class="select-box">{{$ctrl.countrySelected}}</div>
          <ul ng-class="{'select-show': $ctrl.isOpen, 'select-hidden': !$ctrl.isOpen}">
            <li ng-repeat="country in $ctrl.countries" ng-click="$ctrl.selected(country)">{{country.name}}</li>
          </ul>
        </div>

        <div class="tierra-box">Covid: {{$ctrl.covid}}</div>
      </div>
      `,
      controller: function () {
        this.countries = [
          { name: 'Peru', covid: '20k' },
          { name: 'Italia', covid: '31k' },
          { name: 'Brasil', covid: '15k' },
          { name: 'Argentina', covid: '10k' },
          { name: 'Japon', covid: '2k' }
        ];
        this.countrySelected = 'Seleccione::';
        this.isOpen = false;
        this.covid = '';

        this.toggle = () => {
          this.isOpen = !this.isOpen;
        };
        this.selected = (country) => {
          this.countrySelected = country.name;
          this.covid = country.covid;
          this.isOpen = false;
        }
      }
    });

})(window.angular);
