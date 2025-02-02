import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './models/card-model';
import { GachaBoxComponent } from './gacha-box/gacha-box.component'
import { GachaHistoryComponent } from './gacha-history/gacha-history.component';

@Component({
  selector: 'app-root',
  imports: [GachaBoxComponent, GachaHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gacha-Sim';
  recentCard:Card = {};

  updateHistory(card: Card) {
    this.recentCard = card;
  }
}
