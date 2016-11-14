import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Movies} from '../../providers/movies';

@Component({
  selector: 'DetailsPage',
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit {

  constructor(public navCtrl: NavController, private movieRepository: Movies) {
  }

 public movie:any = {};

 ngOnInit(){
   console.log("initialize Details Page");

   this.movieRepository.getMovie("tt4244162").then(data => {this.movie = data});

 }
}
