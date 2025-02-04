import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';


@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  public canon(): void {
    confetti({
        spread: this.randomInRange(50, 70),
        particleCount: this.randomInRange(50, 100),
        origin: { y: 0.6, x: 0.36 }
    });
  }

  private randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
  }
}
