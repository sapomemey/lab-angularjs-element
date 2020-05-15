import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [appLoadModule]="tag"></div>
  `
})
export class AppComponent {
  @Input() tag = '';
}
