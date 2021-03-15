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

  constructor(private http: HttpClient) {}

  getHeroes(id:number) {
    const requestUrl = 
    this.url + "/characters/" + id + "?apikey=" + this.apiKey;
    this.http.get(requestUrl).subscribe( (response: any) => {   
      console.log(response);
      const heroes = response.data.results;
         for (let hero of heroes) {
          const superHero: Hero = {
          id: hero.id,
          name: hero.name,
          image: hero.thumbnail.path + "/portrait_small" + ".jpg"
        };   console.log(hero.name, hero.id, hero.thumbnail.path);
        this.heroes.push(superHero);
        console.log(superHero);
      }
    }, (error) => {
      console.error(error);
    }
    );
  }
}
