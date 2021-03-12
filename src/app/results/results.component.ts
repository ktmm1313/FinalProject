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
  public totalPoints: any;
  id: number = 0;
  name: string;
  // thumbnail: string;

selectedHero() {
  console.log(this.name);
}

  constructor(public marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.heroes = [];
  }


}
