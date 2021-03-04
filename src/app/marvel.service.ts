import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface Hero {
  id: number;
  name: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})

export class MarvelService {
  apiKey = "d49166f47ed95b64b29bf9077ea82d9c";
  url = "https://gateway.marvel.com/v1/public";
  heroes: Hero[]

  constructor(private http: HttpClient) { }

  getHeroes() {
    const requestUrl = 
    this.url + "/characters/1009146" + "?apikey=" + this.apiKey;
    this.http.get(this.url).subscribe( data => {
      console.log(data);
    }
      );
  }


  // getUrlWithAPIKey() {
  //   return `${this.url}?apikey=${this.apiKey}`;
  // }


}
