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

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    console.log('Loading questions...');
    this.loadMcqs();
    this.loadShortAnswers();
    this.loadMatchQuestions();
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
  
}
