import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation.component';
import { Step1Component } from './paths/step-1/step-1.component';
import { Step2Component } from './paths/step-2/step-2.component';
import { Step3Component } from './paths/step-3/step-3.component';

@NgModule({
  declarations: [
    PresentationComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: PresentationComponent, children: [
          { path: '', redirectTo: '/home/presentation/step1', pathMatch: 'full' },
          { path: 'step1', component: Step1Component },
          { path: 'step2', component: Step2Component },
          { path: 'step3', component: Step3Component }
        ]
      },
    ])
  ]
})
export class PresentationModule { }
