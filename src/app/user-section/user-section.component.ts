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
  programmingQuestions: any[] = [];  // For programming questions
  selectedAnswers: { [key: string]: string } = {};  // Store selected answers for MCQs
  userMatches: { [question: string]: string[] } = {}; // Store selected matches by user for each match question
  isSubmitted = false; // To track if the user has submitted the answers
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.loadMcqs();
    this.loadShortAnswers();
    this.loadMatchQuestions();
    this.loadProgrammingQuestions();  // Load programming questions
  }
  
  // Load MCQs
  loadMcqs() {
    this.questionService.getMcqs().subscribe((data: any[]) => {
      this.mcqs = data;
    });
  }

  // Load Short Answer Questions
  loadShortAnswers() {
    this.questionService.getShortAnswers().subscribe((data: any[]) => {
      this.shortAnswers = data;
    });
  }

  // Load Match the Following Questions
  loadMatchQuestions() {
    this.questionService.getMatches().subscribe(
      (data: any[]) => {
        this.matchQuestions = data;
        // Initialize userMatches object
        this.matchQuestions.forEach(match => {
          this.userMatches[match.question] = new Array(match.questions.length).fill('');
        });
      },
      (error) => {
        console.error('Error loading match questions:', error);
      }
    );
  }

  // Load Programming Questions
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

  // Method to handle MCQ selection
  selectMcqAnswer(mcq: any, selectedOption: string) {
    this.selectedAnswers[mcq.question] = selectedOption;
  }

  // Check if the selected MCQ answer is correct
  isMcqCorrect(mcq: any) {
    return this.selectedAnswers[mcq.question] === mcq.correctAnswer;
  }

  // Check Short Answer
  isShortAnswerCorrect(shortAnswer: any, userAnswer: string) {
    return userAnswer.trim().toLowerCase() === shortAnswer.answer.trim().toLowerCase();
  }

  // check it is correct 
  isMatchCorrect(matchQuestion: any, index: number) {
    return this.userMatches[matchQuestion.question][index] === matchQuestion.correctMatch[index];
  }
  submitMatches() {
    this.isSubmitted = true;
  }
  // Check Match Question
  

  
}
