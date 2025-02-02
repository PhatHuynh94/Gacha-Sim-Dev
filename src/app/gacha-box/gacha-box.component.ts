import { Component, Output, EventEmitter } from '@angular/core';
import { Card, cardRarity, MythicList, RareList, UncommonList, CommonList } from '../models/card-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gacha-box',
  imports: [ CommonModule ],
  templateUrl: './gacha-box.component.html',
  styleUrl: './gacha-box.component.css'
})
export class GachaBoxComponent {
  @Output() onRoll = new EventEmitter();

  showResults: boolean;

  cardRarityGotten: string = "";
  imageUrl: string = "";

  constructor() { 
    this.showResults = false;
  }

  onRollClick() {
    this.showResults = true;
    this.cardRarityGotten = cardRarity[this.getRarity()];
    this.imageUrl = this.getCard(this.cardRarityGotten);
    let card:Card = {
      name: "",
      id: "",
      rarity: this.cardRarityGotten,
      fileName: this.imageUrl,
    }
    this.onRoll.emit(card);
  }

  onAgainClick() {
    this.showResults = false;
    this.cardRarityGotten = "";
  }
  getRarity(): number {
    let rand = Math.random();
    if(rand<0.5) return 0;
    else if(rand<0.8) return 1;
    else if(rand<0.95) return 2;
    else return 3;
  }
  getCard(cardRarity: string): string {
    let url = "../../assets/img/"+cardRarity+"/";
    let cardNum = Math.floor(Math.random()*1);
    if(cardRarity === "MYTHIC")
      url += MythicList[cardNum];
    else if (cardRarity === "RARE")
      url += RareList[cardNum];
    else if (cardRarity === "UNCOMMON")
      url += UncommonList[cardNum];
    else
      url += CommonList[cardNum];
    return url;
  }

  runConfetti() {
    // confetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: {
    //     y: 0.6
    //   }
    // });
  }
}
