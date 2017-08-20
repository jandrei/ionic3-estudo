import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private base: String = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  public getLatest() {
    let url: String = "/movie/latest?api_key=cedefa171b72cf2050e42e7a60f1c4d2";

    return this.http.get(this.base + url.toString());
  }

  public getPopular() {
    let url: String = "/movie/popular?api_key=cedefa171b72cf2050e42e7a60f1c4d2";

    return this.http.get(this.base + url.toString());
  }
}
