import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent {
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = '';
  title: string = '';
  language: string = 'javascript';
  output: string = '';
  languages: string[] = ['javascript', 'python', 'c', 'cpp'];

  constructor(private http: HttpClient) {}

  saveCode() {
    const codeData = { title: this.title, language: this.language, code: this.code };
    this.http.post<{ code: any, output: string }>('http://localhost:3000/api/codes', codeData)
      .subscribe(response => {
        console.log('Code saved:', response.code);
        this.output = response.output; // Set the output received from the server
      });
  }
}
