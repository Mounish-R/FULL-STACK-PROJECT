import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl = 'http://localhost:3000/api/questions';

  constructor(private http: HttpClient) { }

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
}
