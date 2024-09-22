import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent {
  mcq = { question: '', option1: '', option2: '', option3: '', option4: '', correctAnswer: '' };
  shortAnswer = { question: '', answer: '' };
  match = { question: '', option1: '', option2: '', option3: '', option4: '', correctMatch: '' };
  programmingQuestion = { question: '', language: '', expectedAnswer: '' };

  constructor(private questionService: QuestionService) { }

  onSubmitMcq() {
    this.questionService.addMcq(this.mcq).subscribe(response => {
      console.log(response.message);
    }, error => {
      console.error('Error:', error);
    });
  }

  onSubmitShortAnswer() {
    this.questionService.addShortAnswer(this.shortAnswer).subscribe(response => {
      console.log(response.message);
    }, error => {
      console.error('Error:', error);
    });
  }

  onSubmitMatch() {
    this.questionService.addMatch(this.match).subscribe(response => {
      console.log(response.message);
    }, error => {
      console.error('Error:', error);
    });
  }

  
onSubmitProgrammingQuestion() {
  const programmingQuestionData = {
    question: this.programmingQuestion.question
  };

  this.questionService.addProgrammingQuestion(programmingQuestionData).subscribe(
    (response) => {
      console.log('Programming question added successfully', response);
      // Reset the form or handle the response as needed
      this.programmingQuestion.question = ''; // Reset the question input
    },
    (error) => {
      console.error('Error adding programming question:', error);
    }
  );
}
}
