import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'; //NEW
import { MarvelService } from '../marvel.service';

interface Hero {
  id: number;
  name: string;
  image?: string;

}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  
altid: number;
counter: number = 0;

  constructor(public getCharacter: MarvelService, public http:HttpClient) {}

  ngOnInit(): void {}


  // getNemesis(altid: number) {
  //   console.log(`getNemesis altid value: ` + altid);
  //   console.log(`button counter started at: ` + this.counter);
  //     // this.http.get("http://localhost:3000/" + altid).subscribe( response => { // LOCAL
  //     this.http.get(environment.backendUrl + altid).subscribe( response => {
  //     let hero = response[0];
  //     let id = hero.marvelid;
  //     this.getCharacter.altid = hero.altid;
  //     this.getCharacter.heroDescription = hero.description;
  //     if (this.counter % 2 === 0) {
  //     this.getCharacter.getHeroes(altid);
  //     } else {
  //       this.getCharacter.getAltHero(id);
  //     }
  //       this.counter += 1;
  //       console.log(`button counter just went up to: ` + this.counter);
  //       console.log(response);
  // })};


  getNemesis(altid: number) {
    // console.log(`getNemesis altid value: ` + altid);
    // console.log(`button counter started at: ` + this.counter);
      this.http.get(environment.backendUrl + altid).subscribe( response => {
      let hero = response[0];
      let id = hero.marvelid;
      this.getCharacter.altid = hero.altid;
      this.getCharacter.heroDescription = hero.description;
      if (this.counter % 2 === 0) {
      this.getCharacter.getHeroes(altid);
      } else {
        this.getCharacter.getAltHero(id);
      }
        this.counter += 1;
        // console.log(`button counter just went up to: ` + this.counter);
        // console.log(response);
  })};


}
