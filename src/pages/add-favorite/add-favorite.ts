import { Component } from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'AddFavoritePage',
  templateUrl: 'add-favorite.html'
})
export class AddFavoritePage {

  title: string;
  year: string;

  constructor(private viewController: ViewController, private params: NavParams) {
    this.title = this.params.get("Title");
    this.year = this.params.get("Year");
  }

  public dismiss(){
    this.viewController.dismiss();
  }

  ionViewDidLoad() {
    console.log('Hello AddFavorite Page');
  }

}
