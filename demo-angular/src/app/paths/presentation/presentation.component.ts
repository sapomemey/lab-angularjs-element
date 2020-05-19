import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { PresentationState } from './presentation.state';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PresentationComponent implements OnInit, OnDestroy {
  private presentationStateSubscription = new Subscription();
  private currentStep = 1;
  private readonly maxSteps = 3;
  private readonly minSteps = 1;

  constructor(
    private presentationState: PresentationState,
    private router: Router,
  ) { }

  ngOnInit() {
    this.presentationStateSubscription = this.presentationState.step$.subscribe(step => {
      this.currentStep = step;
    });
  }

  ngOnDestroy() {
    this.presentationStateSubscription.unsubscribe();
  }

  after() {
    const nextStep = this.currentStep + 1;
    if (nextStep <= this.maxSteps) {
      this.router.navigate([`/home/presentation/step${nextStep}`]);
    }
  }

  before() {
    const nextStep = this.currentStep - 1;
    if (nextStep >= this.minSteps) {
      this.router.navigate([`/home/presentation/step${nextStep}`]);
    }
  }
}
