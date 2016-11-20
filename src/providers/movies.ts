import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { forEach } from 'lodash';
import { Movie } from '../domain/Movie';
import {MovieConverter} from '../domain/MovieConverter';

@Injectable()
export class Movies {

  constructor(public http: Http) {
  }

  public search(searchText: string){

    return new Promise( resolve => {
      let url = 'http://www.omdbapi.com/?s=' + searchText;
      this.http.get(url)
                .map(this.map)
                .subscribe(data => resolve(data));

    });
  }
  
    map(data:any): Array<Movie>{
      let result = new Array<Movie>();
      let jsonData = data.json().Search;
      forEach(jsonData, element => {
        let movie = MovieConverter.create(element);
        result.push(movie);
      });

      return result;
    }

    public getMovie(id: string){
    console.log("Get movie: " + id);
    return new Promise( resolve => {
      let url = 'http://www.omdbapi.com/?i=' + id;
      this.http.get(url)
                .map(result => { return result.json(); })
                .subscribe(data => resolve(data));

    });
    }
}
