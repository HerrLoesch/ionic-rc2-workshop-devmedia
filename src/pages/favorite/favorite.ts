import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieStorage} from "../../providers/movie-storage";

/*
  Generated class for the Favorite page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'FavoritePage',
  templateUrl: 'favorite.html'
})
export class FavoritePage {

  favorites: any;

  constructor(public navCtrl: NavController, private storage:MovieStorage) {
    this.favorites = [];
    this.storage.getFavorites().then(data => this.favorites = data);
  }
}
