import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';

export interface Question {
  id: string;
  group: string;
  text: string;
  answer: string;
  points: number;
  display: boolean
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [MarvelService]
})

export class QuizComponent implements OnInit {

  questions : Question[] = [
    {id: "1a", group: "1", text: "Would you rather...", answer: "Help someone in need", points: 1, display: true },
    {id: "1b", group: "1", text: "Would you rather...", answer: "Depends on the day", points: 5, display: true },
    {id: "1c", group: "1", text: "Would you rather...", answer: "Rule the world at all costs", points: 10, display: true },
    {id: "2a", group: "2", text: "I consider myself", answer: "A woman warrior", points: 1, display: false },
    {id: "2b", group: "2", text: "I consider myself", answer: "Somewhere in between", points: 1, display: false },
    {id: "2c", group: "2", text: "I consider myself", answer: "A warrior", points: 1, display: false },
    {id: "3a", group: "3", text: "What's your go-to snack?", answer: "Candy bar", points: 5, display: false },
    {id: "3b", group: "3", text: "What's your go-to snack?", answer: "Ants on a log", points: 1, display: false },
    {id: "3c", group: "3", text: "What's your go-to snack?", answer: "Flaming Hot Cheetos", points: 10, display: false },
    {id: "4a", group: "4", text: "Which color wheel describes your vibe?", answer: "Green and blue", points: 5, display: false },
    {id: "4b", group: "4", text: "Which color wheel describes your vibe?", answer: "Red and black", points: 10, display: false },
    {id: "4c", group: "4", text: "Which color wheel describes your vibe?", answer: "Pink and purple", points: 1, display: false },
    {id: "5a", group: "5", text: "What's your favorite way to get around?", answer: "Drive, duh", points: 1, display: false },
    {id: "5b", group: "5", text: "What's your favorite way to get around?", answer: "Fly through the sky", points: 1, display: false },
    {id: "5c", group: "5", text: "What's your favorite way to get around?", answer: "Teleport...of course", points: 1, display: false },
    {id: "6a", group: "6", text: "", answer: "", points: 10, display: false },
    {id: "6b", group: "6", text: "", answer: "", points: 1, display: false },
    {id: "6c", group: "6", text: "", answer: "", points: 5, display: false }
]

  currentGroup: number = 1;
  currentItem: string = this.currentGroup.toString() + 'a';
  // answers: string[];

  constructor(public marvelService: MarvelService) {}
  
  ngOnInit(): void {}
  

}
