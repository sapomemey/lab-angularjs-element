import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

const ngModules = {
  'planeta-marte': ['PlanetaMarteModule'],
  'planeta-tierra': ['PlanetaTierraModule'],
  'planeta-pluton': ['PlanetaPlutonModule']
};

@Directive({
  selector: '[appLoadModule]'
})
export class LoadModuleDirective implements AfterViewInit {
  @Input('appLoadModule') tag = '';

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    this.insertTag();
    this.runModule();
  }

  insertTag() {
    const element = this.element.nativeElement as HTMLElement;
    const tagElement = document.createElement(this.tag);
    element.appendChild(tagElement);
  }

  runModule() {
    const angular = (window as any).angular;

    angular.element(document).ready(() => {
      angular.bootstrap(this.element.nativeElement, ngModules[this.tag]);
    });
  }
}
