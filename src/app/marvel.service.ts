import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Pool } from 'connection';

// const pool = require('./connection');
const crypto = require('crypto-browserify');

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
  privateKey = Pool.privateKey;
  ts = new Date().getTime();
  hash = crypto.createHash('md5').update(this.ts + this.privateKey + this.apiKey).digest('hex');
  heroes: Hero[] = [];
  public chosenHero: [] = [];
  heroDescription: string;
  altid: number;
  

  constructor(private http: HttpClient) {}
		

  getHeroes(id:number) {
    const requestUrl = 
    // this.url + "/characters/" + id + "?apikey=" + this.apiKey;
    this.url + "/characters/" + id + "?ts=" + this.ts + "&apikey=" + this.apiKey + "&hash=" + this.hash;
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
