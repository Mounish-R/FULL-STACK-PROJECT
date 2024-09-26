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
  match = { question: '', question1: '', question2: '', question3: '', question4: '', answer1: '', answer2: '', answer3: '', answer4: '' };
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

  on_submit_match() {
    const match_data = {
      question: this.match.question,
      questions: [
        this.match.question1,
        this.match.question2,
        this.match.question3,
        this.match.question4
      ],
      answers: [
        this.match.answer1,
        this.match.answer2,
        this.match.answer3,
        this.match.answer4
      ]
    };

    this.questionService.addMatch(match_data).subscribe(response => {
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
