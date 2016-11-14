import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { FavoritePage } from '../favorite/favorite';
import { AboutPage } from '../about/about';


@Component({
  selector: 'HomePage',
  templateUrl: 'home.html'
})
export class HomePage {

  public searchRoot = SearchPage;
  public favoritesRoot = FavoritePage;
  public aboutRoot = AboutPage;
  

  constructor(public navCtrl: NavController) {
    
  }

}
