import { Component, OnInit, Input } from '@angular/core';
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
  constructor(public getCharacter: MarvelService) {}

  @Input() chosenHero: any;

  ngOnInit(): void {}

}
