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
  url = "https://gateway.marvel.com/v1/public";
  heroes: Hero[] = [];
  public chosenHero: [] = [];
  heroDescription: string;
  altid: number;

  constructor(private http: HttpClient) {}

  getHeroes(id:number) {
    const requestUrl = 
    this.url + "/characters/" + id + "?apikey=" + this.apiKey;
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
        console.log(requestUrl);
        this.chosenHero = response.data.results;
        console.log(this.chosenHero);
      }, (error) => {
        console.error(error);
      }
      );
  }


}
