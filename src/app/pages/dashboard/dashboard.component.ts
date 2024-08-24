import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  isUser: boolean = false;
  isAdmin: boolean = false;

  // User information
  userInfo = {
    name: 'MOUNISH R',
    rollNumber: '7376221CS232',
    department: 'Computer Science and Engineering',
    currentYear: '3rd Year',
    phoneNumber: '9095764683',
  };

  // Example data for user results (Marks)
  userResults = [
    { subject: 'Mathematics', marks: 85 },
    { subject: 'Physics', marks: 78 },
    { subject: 'Chemistry', marks: 92 },
    { subject: 'Biology', marks: 88 },
    { subject: 'English', marks: 75 },
  ];

  newQuestion = { question: '', answer: '' };
  feedbackMessage: string = '';

  constructor() { }

  ngAfterViewInit(): void {
    this.initializeUserRole();
    if (this.isUser) {
      this.renderMarksGraph();
    }
  }

  initializeUserRole() {
    const userRole = this.getUserRole();
    this.isUser = userRole === 'user';
    this.isAdmin = userRole === 'admin';
  }

  getUserRole(): string {
    return 'user'; // Replace with actual logic
  }

  addQuestion() {
    console.log('New Question Added:', this.newQuestion);
    this.newQuestion = { question: '', answer: '' };
  }

  renderMarksGraph() {
    console.log('Rendering graph...');
    const subjects = this.userResults.map(result => result.subject);
    const marks = this.userResults.map(result => result.marks);

    new Chart('marksChart', {
      type: 'bar',
      data: {
        labels: subjects,
        datasets: [{
          label: 'Marks Obtained',
          data: marks,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100 // Set the maximum y-axis value to 100 to represent percentage marks
          }
        }
      }
    });
  }

  submitFeedback() {
    if (this.feedbackMessage.trim()) {
      // Handle the feedback submission
      console.log('Feedback submitted:', this.feedbackMessage);
      // You can send feedbackMessage to a server here

      // Clear the feedback message
      this.feedbackMessage = '';
    } else {
      console.log('Feedback cannot be empty');
    }
  }
}
