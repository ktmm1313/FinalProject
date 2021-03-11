import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';

interface Hero {
  id: number;
  name: string;
  // thumbnail: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  name: string;
  // thumbnail: string;

selectHero() {
  console.log(this.name);
}

  constructor(public marvelService: MarvelService) {}

  ngOnInit(): void {}

  getResults(hero: Hero) {
     console.log(hero.name)
   }

}
