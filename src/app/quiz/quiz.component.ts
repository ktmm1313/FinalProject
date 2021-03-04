import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(public marvelService: MarvelService) { }

  ngOnInit(): void {
  }
  

}
