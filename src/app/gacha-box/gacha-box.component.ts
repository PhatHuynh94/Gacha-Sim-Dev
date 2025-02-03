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
    let cardGotten = this.getCard(this.cardRarityGotten);
    this.imageUrl = "../../assets/img/"+cardGotten.rarity+"/"+cardGotten.fileName;
    this.onRoll.emit(cardGotten);
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
  getCard(cardRarity: string): Card {
    let card;
    let cardNum = Math.floor(Math.random()*1);
    if(cardRarity === "MYTHIC") {
      cardNum = Math.floor(Math.random()*MythicList.length);
      card = MythicList[cardNum];
    }
    else if (cardRarity === "RARE") {
      cardNum = Math.floor(Math.random()*RareList.length);
      card = RareList[cardNum];
    }
    else if (cardRarity === "UNCOMMON") {
      cardNum = Math.floor(Math.random()*UncommonList.length);
      card = UncommonList[cardNum];
    }
    else {
      cardNum = Math.floor(Math.random()*CommonList.length);
      card = CommonList[cardNum];
    }
    return card;
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
