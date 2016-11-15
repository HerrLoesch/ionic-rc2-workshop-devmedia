import { Injectable } from '@angular/core';
import {NativeStorage} from "ionic-native";

@Injectable()
export class MovieStorage  {

  constructor() {
  }

  public addFavorite(favorite:any){
    this.getFavorites().then(data => {
      data.push(favorite);
      NativeStorage.setItem("favorites", data);
    },
    error => console.warn(error))
  }

  public getFavorites() {
      return NativeStorage.getItem("favorites");
  }
}
