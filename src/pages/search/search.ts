import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Movies} from '../../providers/movies';

@Component({
  selector: 'SearchPage',
  templateUrl: 'search.html',
  providers: [ Movies ]
})
export class SearchPage {

  movies: any;
  searchText:string;

  constructor(public navCtrl: NavController, private movieRepository: Movies) {
    this.movies = [];
    this.searchText = "";
  }

  onSearchInput() {
    this.movieRepository.search(this.searchText)
        .then(data => { this.movies = data; }, error => console.log(error));
  }


  ionViewDidLoad() {
  }

}
