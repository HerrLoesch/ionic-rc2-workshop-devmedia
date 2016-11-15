import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {DetailsPage} from '../details/details';

import {Movies} from '../../providers/movies';
import {AddFavoritePage} from "../add-favorite/add-favorite";

@Component({
  selector: 'SearchPage',
  templateUrl: 'search.html'
})
export class SearchPage {

  movies: any;
  searchText:string;

  constructor(public navCtrl: NavController, private movieRepository: Movies, private modalCtrl: ModalController) {
    this.movies = [];
    this.searchText = "";
  }

  onSearchInput() {
    this.movieRepository.search(this.searchText)
        .then(data => { this.movies = data; }, error => console.log(error));
  }

  showDetails(id:string) {
    console.log("Showing details for: " + id)
    this.navCtrl.push(DetailsPage, { "id": id});
  }

  addFavorite(movie:any){
    console.log(movie);
    let modal = this.modalCtrl.create(AddFavoritePage, movie);
    modal.present();
  }
}
