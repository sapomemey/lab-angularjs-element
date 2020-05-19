import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PresentationState } from '../../presentation.state';

@Component({
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Step2Component implements OnInit {
  constructor(private presentationState: PresentationState) { }

  ngOnInit() {
    this.presentationState.setStep(2);
  }
}
