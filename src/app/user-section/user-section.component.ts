// E:\angular17_login\src\app\user-section\user-section.component.ts

import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../admin-section/question.service';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit {

  mcqs: any[] = [];
  shortAnswers: any[] = [];
  matchQuestions: any[] = [];
  programmingQuestions: any[] = [];  // New property

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    console.log('Loading questions...');
    this.loadMcqs();
    this.loadShortAnswers();
    this.loadMatchQuestions();
    this.loadProgrammingQuestions();  // Load programming questions
  }
  
  loadMcqs() {
    this.questionService.getMcqs().subscribe((data: any[]) => {
      this.mcqs = data;
    });
  }

  loadShortAnswers() {
    this.questionService.getShortAnswers().subscribe((data: any[]) => {
      this.shortAnswers = data;
    });
  }

  loadMatchQuestions() {
    this.questionService.getMatches().subscribe(
      (data: any[]) => {
        this.matchQuestions = data;
      },
      (error) => {
        console.error('Error loading match questions:', error);
      }
    );
  }

  loadProgrammingQuestions() {
    this.questionService.getProgrammingQuestions().subscribe(
      (data: any[]) => {
        this.programmingQuestions = data;
      },
      (error) => {
        console.error('Error loading programming questions:', error);
      }
    );
  }
}
