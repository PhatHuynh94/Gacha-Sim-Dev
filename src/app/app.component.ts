import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(GachaHistoryComponent) history!: GachaHistoryComponent;

  title = 'Gacha-Sim';

  updateHistory(card: Card) {
    this.history.updateCardList(card);
  }
}
