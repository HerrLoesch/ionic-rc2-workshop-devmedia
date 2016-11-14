import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Movies} from '../../providers/movies';

@Component({
  selector: 'DetailsPage',
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit {

  constructor(public navCtrl: NavController, private movieRepository: Movies, private params: NavParams) {
    
  }

 public movie:any = {};

 ngOnInit(){
   console.log("initialize Details Page");
   let id = this.params.get("id");
   this.movieRepository.getMovie(id).then(data => {this.movie = data});

 }
}
