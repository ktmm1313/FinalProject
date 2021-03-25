import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { response } from 'express';


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
  url = "https://gateway.marvel.com/v1/public";
  heroes: Hero[] = [];
  public chosenHero: [] = [];
  heroDescription: string;
  altid: number;
  name: string;
  // ts = new Date().getTime();
  // privateKey = process.env.PRIVATE_KEY;
  // md5 = require('md5');
  // hash = this.md5((this.ts + this.privateKey + this.apiKey).toString()); DIDN'T WORK
  // hash = this.md5(this.ts + this.privateKey + this.apiKey);

  constructor(private http: HttpClient) {}

  getHeroes(id:number) {
    const requestUrl = 
    this.url + "/characters/" + id + "?apikey=" + this.apiKey;
    // this.url + "/characters" + "?ts=" + this.ts + "&apikey=" + this.apiKey + "&hash=" + this.hash;
    // this.url + "/characters" + "?ts=" + this.ts + "&apikey=" + this.apiKey + "&hash=" + this.hash;
    // this.url + "/characters" + "&apikey=" + this.apiKey + "?ts=" + this.ts + "&hash=" + this.hash;
    // this.url + "/characters/" + id + "?ts=" + this.ts + "&apikey=" + this.apiKey + "&hash=" + this.hash;
    console.log(requestUrl);
    this.http.get(requestUrl).subscribe( (response: any) => {   
      console.log(response);
      console.log(requestUrl);
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
        this.chosenHero = response.data.results;
      }, (error) => {
        console.error(error);
      }
      );
  }

}