import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card-model';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'gacha-history',
  imports: [ CommonModule, MatTableModule, MatPaginatorModule ],
  templateUrl: './gacha-history.component.html',
  styleUrl: './gacha-history.component.css'
})
export class GachaHistoryComponent {
  cardList: Card[] = [];
  cardCount: number[]
  columnsToDisplay = ['id','name'];

  constructor() { 
    this.cardCount = [0,0,0,0];
    this.retrieveCardHistory();
  }

  updateCardList(card: Card) {
    this.cardList.push(card);
    this.updateCardCount(card);
    this.updateTable();
    this.saveCardHistory();
  }

  updateCardCount(card:Card) {
    if(card.rarity === "MYTHIC")
      this.cardCount[0]++;
    else if (card.rarity === "RARE")
      this.cardCount[1]++;
    else if (card.rarity === "UNCOMMON")
      this.cardCount[2]++;
    else if(card.rarity === "COMMON")
      this.cardCount[3]++;
  }

  updateTable() {
    //TODO: Implement code to dynamically update table after rolling
  }

  saveCardHistory() {
    localStorage.setItem('cardHistoryList', JSON.stringify(this.cardList));
  }

  retrieveCardHistory() {
    let jsonString = localStorage.getItem('cardHistoryList');
    if(jsonString) {
      this.cardList = JSON.parse(jsonString);
      this.cardList.forEach(c => this.updateCardCount(c));
    }
  }
}
