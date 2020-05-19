import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PresentationState } from '../../presentation.state';

@Component({
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Step3Component implements OnInit {
  constructor(private presentationState: PresentationState) { }

  ngOnInit() { 
    this.presentationState.setStep(3);
  }
}
