import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { url } from 'node:inspector';
import { environment } from '../../environments/environment';
import { MarvelService } from '../marvel.service';

export interface Question {
  id: string;
  group: number;
  text: string;
  answer: string;
  points?: number;
  gender?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: []
})

export class QuizComponent implements OnInit {
  
  questions : Question[] = [
    {id: "1a", group: 1, text: "What do you consider yourself?", answer: "A female warrior", gender: "female", imageUrl: "../assets/1a.png" },
    {id: "1b", group: 1, text: "What do you consider yourself?", answer: "Fierce, no matter what gender", gender: "random", imageUrl: "../assets/1b.png" },
    {id: "1c", group: 1, text: "What do you consider yourself?", answer: "A male warrior", gender: "male", imageUrl: "../assets/1c.png" },
    {id: "2a", group: 2, text: "Would you rather?", answer: "Help someone in need", points: 1, imageUrl: "../assets/2a.png" },
    {id: "2c", group: 2, text: "Would you rather?", answer: "Rule the world at all costs", points: 7, imageUrl: "../assets/2c.png" },
    {id: "2b", group: 2, text: "Would you rather?", answer: "Weigh the options depending on the day", points: 5, imageUrl: "../assets/2b.png" },
    {id: "3a", group: 3, text: "What's your go-to snack?", answer: "Popcorn", points: 2, imageUrl: "../assets/3a.png" },
    {id: "3b", group: 3, text: "What's your go-to snack?", answer: "Apple", points: 1, imageUrl: "../assets/3b.png" },
    {id: "3c", group: 3, text: "What's your go-to snack?", answer: "Donut", points: 7, imageUrl: "../assets/3c.png" },
    {id: "4a", group: 4, text: "Which colors describe your vibe?", answer: "Green and blue", points: 2, imageUrl: "../assets/4a.png" },
    {id: "4b", group: 4, text: "Which colors describe your vibe?", answer: "Red and grey", points: 7, imageUrl: "../assets/4b.png" },
    {id: "4c", group: 4, text: "Which colors describe your vibe?", answer: "Pink and purple", points: 1, imageUrl: "../assets/4c.png" },
    {id: "5a", group: 5, text: "How do you like to get around?", answer: "Drive, duh", points: 1, imageUrl: "../assets/5a.png" },
    {id: "5b", group: 5, text: "How do you like to get around?", answer: "Fly through the sky", points: 2, imageUrl: "../assets/5b.png" },
    {id: "5c", group: 5, text: "How do you like to get around?", answer: "Teleport...of course", points: 4, imageUrl: "../assets/5c.png" },
    {id: "6a", group: 6, text: "How do you feel about capes?", answer: "Love them!", points: 1, imageUrl: "../assets/6a.png" },
    {id: "6b", group: 6, text: "How do you feel about capes?", answer: "Take 'em or leave 'em", points: 2, imageUrl: "../assets/6b.png" },
    {id: "6c", group: 6, text: "How do you feel about capes?", answer: "They're the worst", points: 3, imageUrl: "../assets/6c.png" }
]

  currentGroup: number = 1;
  currentItem: string = this.currentGroup.toString() + 'a';
  allAnswers: any = [];
  answers: any;
  numericalValues: any = [];
  totalPoints: number;
  genderChoice: string;
  genderOptions: string[] = [
    "female",
    "male"
  ]
  finalGender: string;
  altid: number;

  constructor(public marvelService: MarvelService, public http: HttpClient) {}
  
  ngOnInit(): void {}
  
gatherAnswers(answers: any) {
  if (this.currentGroup == 1) {
    this.allAnswers.push(answers);
    this.genderChoice = this.allAnswers[0];
    this.currentGroup += 1;
    this.currentItem = this.currentGroup.toString() + 'a';
    console.log(this.genderChoice);  // FOR TESTING - CAN BE REMOVED
  
    } else if (this.currentGroup > 1 && this.currentGroup < 6) {

        if (isNaN(answers)) {
          answers = 1;
        }

      this.allAnswers.push(parseInt(answers));
      this.currentGroup += 1;
      this.currentItem = this.currentGroup.toString() + 'a';
      console.log(this.allAnswers);

  } else if (this.currentGroup == 6) {

    if (isNaN(answers)) {
      answers = 1;
    }

    this.allAnswers.push(parseInt(answers));
    this.numericalValues = this.allAnswers.slice(1);
    this.currentGroup += 1;
      function add(sum, b) {
        return sum + b;
  };

  let totalPoints = this.numericalValues.reduce(add, 0);

  if (this.genderChoice == "random") {
    let randomNumber: number = Math.floor(Math.random() * 2);
    this.genderChoice = this.genderOptions[randomNumber];
  } 
  
  let finalGender = this.genderChoice;

  if (totalPoints < 5) {
    totalPoints = 5;
  }

  if (totalPoints > 28) {
    totalPoints = 28;
  }

      console.log(finalGender);  // FOR TESTING - CAN BE REMOVED
      console.log(totalPoints);  // FOR TESTING - CAN BE REMOVED

    this.http.get(environment.backendUrl + finalGender + "/" + totalPoints).subscribe( response => {
      // this.http.get("http://localhost:3000/" + finalGender + "/" + totalPoints).subscribe( response => {
    let hero = response[0];  
      let id = hero.marvelid; // CHANGED FROM CONST
      this.marvelService.altid = hero.altid;
      this.marvelService.heroDescription = hero.description;
      this.marvelService.getHeroes(id);

        console.log(response);
  })};
}

};