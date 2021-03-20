import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


interface Hero {
  id: number;
  name: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})

export class MarvelService {
  apiKey = "d49166f47ed95b64b29bf9077ea82d9c";
  url = "http://gateway.marvel.com/v1/public";
  heroes: Hero[] = [];
  public chosenHero: [] = [];
  heroDescription: string;
  altid: number;
  ts = new Date().getTime();
  privateKey = process.env.PRIVATE_KEY;
  md5 = require('md5');
  hash = this.md5((this.ts + this.privateKey + this.apiKey).toString());

  constructor(private http: HttpClient) {}

  getHeroes(id:number) {
    console.log(`the ts is: ` + this.ts);
    console.log(`the hash is: ` + this.hash);
    const requestUrl = 
    // this.url + "/characters" + "?ts=" + this.ts + "&apikey=" + this.apiKey + "&hash=" + this.hash;
    this.url + "/characters" + "?ts=" + this.ts + "&apikey=" + this.apiKey + "&hash=" + this.hash;
    // this.url + "/characters/" + id + "?ts=" + this.ts + "&apikey=" + this.apiKey + "&hash=" + this.hash;
    console.log(requestUrl);
    this.http.get(requestUrl).subscribe( (response: any) => {   
      console.log(response);
      this.chosenHero = response.data.results;
      console.log(this.chosenHero);
    }, (error) => {
      console.error(error);
    }
    )};

    getAltHero(altid:number) {
      const requestUrl = 
      this.url + "/characters/" + altid + "?apikey=" + this.apiKey;
      this.http.get(requestUrl).subscribe( (response: any) => {   
        console.log(response);
        this.chosenHero = response.data.results;
        console.log(this.chosenHero);
      }, (error) => {
        console.error(error);
      }
      );
  }

}