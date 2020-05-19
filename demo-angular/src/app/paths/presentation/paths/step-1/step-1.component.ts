import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { PresentationState } from '../../presentation.state';

@Component({
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Step1Component implements OnInit {
  constructor(private presentationState: PresentationState) { }

  ngOnInit() {
    this.presentationState.setStep(1);
  }
}
