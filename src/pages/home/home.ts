import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


    cards = [
        {
            imgPath: "JwTKjXN.jpg",
            title: "Pink floyd",
            desc: "This is a cool background created by user: XYZ1000c",
            favorited: false
        },
        {
            imgPath: "images.jpg",
            title: "Bridge",
            desc: "This is a cool background created by user: ABCDD1836!",
            favorited: false
        },
        {
            imgPath: "download.jpg",
            title: "Awesome",
            desc: "This is a cool background created by user: jadebard",
            favorited: false
        }
    ];

  constructor(public navCtrl: NavController) {

  }

    clickFavorite(card) {
        let index = this.cards.indexOf(card);

        if(index > -1) {
            if (card.favorited) {
                this.cards[index].favorited = false;
            } else {
                this.cards[index].favorited = true;
            }
        }
    }


}
