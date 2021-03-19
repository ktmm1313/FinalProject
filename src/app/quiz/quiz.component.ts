import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';
import { environment } from 'src/environments/environment'

export interface Question {
  id: string;
  group: string;
  text: string;
  answer: string;
  points: number;
  gender: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: []
})

export class QuizComponent implements OnInit {
  
  questions : Question[] = [
    {id: "1a", group: "1", text: "I consider myself", answer: "A woman warrior", points: 1, gender: "female" },
    {id: "1b", group: "1", text: "I consider myself", answer: "Somewhere in between", points: 2, gender: "random" },
    {id: "1c", group: "1", text: "I consider myself", answer: "A warrior", points: 3, gender: "male" },
    {id: "2a", group: "2", text: "Would you rather...", answer: "Help someone in need", points: 1, gender: "" },
    {id: "2b", group: "2", text: "Would you rather...", answer: "Depends on the day", points: 5, gender: "" },
    {id: "2c", group: "2", text: "Would you rather...", answer: "Rule the world at all costs", points: 10, gender: "" },
    {id: "3a", group: "3", text: "What's your go-to snack?", answer: "Candy bar", points: 1, gender: "" },
    {id: "3b", group: "3", text: "What's your go-to snack?", answer: "Ants on a log", points: 2, gender: "" },
    {id: "3c", group: "3", text: "What's your go-to snack?", answer: "Flaming Hot Cheetos", points: 10, gender: "" },
    {id: "4a", group: "4", text: "Which color wheel describes your vibe?", answer: "Green and blue", points: 1, gender: "" },
    {id: "4b", group: "4", text: "Which color wheel describes your vibe?", answer: "Red and black", points: 10, gender: "" },
    {id: "4c", group: "4", text: "Which color wheel describes your vibe?", answer: "Pink and purple", points: 2, gender: "" },
    {id: "5a", group: "5", text: "What's your favorite way to get around?", answer: "Drive, duh", points: 1, gender: "" },
    {id: "5b", group: "5", text: "What's your favorite way to get around?", answer: "Fly through the sky", points: 2, gender: "" },
    {id: "5c", group: "5", text: "What's your favorite way to get around?", answer: "Teleport...of course", points: 5, gender: "" },
    {id: "6a", group: "6", text: "How do you feel about capes?", answer: "Love them!", points: 1, gender: "" },
    {id: "6b", group: "6", text: "How do you feel about capes?", answer: "Take 'em or leave 'em", points: 2, gender: "" },
    {id: "6c", group: "6", text: "How do you feel about capes?", answer: "They're the worst", points: 3, gender: "" }
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

  constructor(public marvelService: MarvelService, public http:HttpClient) {}
  
  ngOnInit(): void {}
  
gatherAnswers(answers: any) {
  if (this.currentGroup == 1) {
    this.allAnswers.push(answers);
    this.genderChoice = this.allAnswers[0];
    this.currentGroup += 1;
    this.currentItem = this.currentGroup.toString() + 'a';
    console.log(this.genderChoice);  // FOR TESTING - CAN BE REMOVED
  
    } else if (this.currentGroup > 1 && this.currentGroup < 6) {
    this.allAnswers.push(parseInt(answers));
    this.currentGroup += 1;
    this.currentItem = this.currentGroup.toString() + 'a';

  } else if (this.currentGroup == 6) {
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

      console.log(finalGender);  // FOR TESTING - CAN BE REMOVED
      console.log(totalPoints);  // FOR TESTING - CAN BE REMOVED


    this.http.get(environment + finalGender + "/" + totalPoints).subscribe( response => {
      // this.http.get(process.env.DATABASE_URL + "/" + finalGender + "/" + totalPoints).subscribe( response => {
      // this.http.get("http://localhost:3000/" + finalGender + "/" + totalPoints).subscribe( response => {
    const hero = response[0];  
      let id = hero.marvelid; // CHANGED FROM CONST
      this.marvelService.altid = hero.altid;
      this.marvelService.heroDescription = hero.description;
      this.marvelService.getHeroes(id);

        console.log(response);
  })};
}

};