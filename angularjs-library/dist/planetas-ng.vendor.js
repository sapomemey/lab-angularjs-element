!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),t(2),e.exports=t(3)},function(e,n){window.angular.module("PlanetaPlutonModule",[]).component("planetaPluton",{template:'\n      <div class="container-planeta pluton">\n        <p>\n          Plutón, designado (134340) Pluto, es un planeta enano \n          del sistema solar situado a continuación de la órbita de Neptuno.\n        </p>\n      </div>\n      ',controller:function(){}})},function(e,n){window.angular.module("PlanetaTierraModule",[]).component("planetaTierra",{template:'\n      <div class="container-planeta tierra">\n        <div class="tierra-box">\n          <div ng-click="$ctrl.toggle()" class="select-box">{{$ctrl.countrySelected}}</div>\n          <ul ng-class="{\'select-show\': $ctrl.isOpen, \'select-hidden\': !$ctrl.isOpen}">\n            <li ng-repeat="country in $ctrl.countries" ng-click="$ctrl.selected(country)">{{country.name}}</li>\n          </ul>\n        </div>\n\n        <div class="tierra-box">Covid: {{$ctrl.covid}}</div>\n      </div>\n      ',controller:function(){this.countries=[{name:"Peru",covid:"20k"},{name:"Italia",covid:"31k"},{name:"Brasil",covid:"15k"},{name:"Argentina",covid:"10k"},{name:"Japon",covid:"2k"}],this.countrySelected="Seleccione::",this.isOpen=!1,this.covid="",this.toggle=()=>{this.isOpen=!this.isOpen},this.selected=e=>{this.countrySelected=e.name,this.covid=e.covid,this.isOpen=!1}}})},function(e,n){window.angular.module("PlanetaMarteModule",[]).component("planetaMarte",{template:'\n      <div class="container-planeta marte">\n        <p>\n          Marte es el cuarto planeta en orden de distancia al Sol y\n          el segundo más pequeño del sistema solar, después de Mercurio\n        </p>\n      </div>\n      ',controller:function(){}})}]);