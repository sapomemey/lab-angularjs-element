import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentationState {
  private stepSource = new Subject<number>();
  step$ = this.stepSource.asObservable();

  setStep(step: number) {
    this.stepSource.next(step);
  }
}
