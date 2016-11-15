import { Component } from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MovieStorage} from "../../providers/movie-storage";

@Component({
  selector: 'AddFavoritePage',
  templateUrl: 'add-favorite.html'
})
export class AddFavoritePage {

  title: string = "";
  year: string = "";

  formData:FormGroup;

  constructor(private viewController: ViewController, private params: NavParams, private builder:FormBuilder, private storage:MovieStorage) {

    this.title = this.params.get("Title");
    this.year = this.params.get("Year");

      this.formData = this.builder.group(
        { comments: ['', Validators.minLength(5)]}
      );
  }

  public dismiss(){
    this.viewController.dismiss();
  }

  public save(){
    let favorite = {
      "comments": this.formData.value.comments,
      "id": this.params.get("imdbID")
    }

    this.storage.addFavorite(favorite);

    this.dismiss();
  }
}
