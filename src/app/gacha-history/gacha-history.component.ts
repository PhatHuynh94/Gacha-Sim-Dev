import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Card } from '../models/card-model';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'gacha-history',
  imports: [ CommonModule, MatTableModule, MatPaginatorModule ],
  templateUrl: './gacha-history.component.html',
  styleUrl: './gacha-history.component.css'
})
export class GachaHistoryComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(); 
  dataSource = new MatTableDataSource<Card>([]);
  cardList: Card[] = [];
  cardCount: number[] = [0,0,0,0];;
  columnsToDisplay = ['id','name'];

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
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
    this.dataSource.data = this.cardList;
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
    this.dataSource.data = this.cardList;
  }

  deleteHistory() {
    localStorage.removeItem('cardHistoryList');
    this.cardList = [];
    this.cardCount = [0,0,0,0];
    this.dataSource.data = this.cardList;
  }
}
