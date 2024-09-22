import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl = 'http://localhost:3000/api/questions';

  constructor(private http: HttpClient) { }

  // POST methods for adding questions (already correct)
  addMcq(mcq: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/mcq`, mcq);
  }

  addShortAnswer(shortAnswer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/short-answer`, shortAnswer);
  }

  addMatch(match: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/match`, match);
  }

  addProgrammingQuestion(programmingQuestion: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/programming-question`, programmingQuestion);
  }

  // GET methods for fetching questions
  getMcqs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mcq`);
  }

  getShortAnswers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/short-answer`);
  }

  getMatches(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/match`);
  }
  

  getProgrammingQuestions() {
    return this.http.get<any[]>('/api/questions/programming'); // Adjust the API endpoint if necessary
  }
}
