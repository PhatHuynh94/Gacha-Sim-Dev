import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Card } from '../models/card-model';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'gacha-history',
  imports: [ CommonModule, MatTableModule, MatPaginatorModule ],
  templateUrl: './gacha-history.component.html',
  styleUrl: './gacha-history.component.css'
})
export class GachaHistoryComponent implements OnInit {
  @Input() recentCard: Card = {};

  public cardCount: number[]
  public cardList: Card[] = [];
  columnsToDisplay = ['name'];

  constructor() { 
    this.cardCount = [0,0,0,0]
  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.cardList.push(this.recentCard);
    this.updateCardCount();
    this.updateTable();
  }

  updateCardCount() {
    if(this.recentCard.rarity === "MYTHIC")
      this.cardCount[0]++;
    else if (this.recentCard.rarity === "RARE")
      this.cardCount[1]++;
    else if (this.recentCard.rarity === "UNCOMMON")
      this.cardCount[2]++;
    else if(this.recentCard.rarity === "COMMON")
      this.cardCount[3]++;
  }

  updateTable() {
    //TODO: Implement code to dynamically update table after rolling
  }

  saveTableHistory() {
    //TODO: Save cardList to memory
  }
}
