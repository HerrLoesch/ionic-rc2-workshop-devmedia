import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Movies {

  constructor(public http: Http) {
  }

  public search(searchText: string){

    return new Promise( resolve => {
      let url = 'http://www.omdbapi.com/?s=' + searchText;
      this.http.get(url)
                .map(result => { return result.json(); })
                .subscribe(data => resolve(data.Search));

    });
  }
}
