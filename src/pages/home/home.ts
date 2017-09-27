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
            favorited: false,
            shared: false
        },
        {
            imgPath: "images.jpg",
            title: "Bridge",
            desc: "This is a cool background created by user: ABCDD1836!",
            favorited: false,
            shared: false
        },
        {
            imgPath: "download.jpg",
            title: "Awesome",
            desc: "This is a cool background created by user: jadebard",
            favorited: false,
            shared: false
        },
        {
            imgPath: "canal.jpg",
            title: "Bridge",
            desc: "This is a cool background created by user: ABCDD1836!",
            favorited: false,
            shared: false
        },
        {
            imgPath: "moonbeer.jpg",
            title: "Bridge",
            desc: "This is a cool background created by user: ABCDD1836!",
            favorited: false,
            shared: false
        },
        {
            imgPath: "mountain.jpg",
            title: "Bridge",
            desc: "This is a cool background created by user: ABCDD1836!",
            favorited: false,
            shared: false
        },
        {
            imgPath: "nightmountain.jpg",
            title: "Bridge",
            desc: "This is a cool background created by user: ABCDD1836!",
            favorited: false,
            shared: false
        },
        {
            imgPath: "skyline.jpg",
            title: "Bridge",
            desc: "This is a cool background created by user: ABCDD1836!",
            favorited: false,
            shared: false
        },
        {
            imgPath: "sloth.jpg",
            title: "Bridge",
            desc: "This is a cool background created by user: ABCDD1836!",
            favorited: false,
            shared: false
        },
        {
            imgPath: "windows.jpg",
            title: "Bridge",
            desc: "This is a cool background created by user: ABCDD1836!",
            favorited: false,
            shared: false
        },
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

    clickShared(card) {
        let index = this.cards.indexOf(card);

        if(index > -1) {
            if (card.shared) {
                this.cards[index].shared = false;
            } else {
                this.cards[index].shared = true;
            }
        }
    }

    deleteCard(card) {
        let index = this.cards.indexOf(card);
        this.cards.splice(index, 1)
    }


}
