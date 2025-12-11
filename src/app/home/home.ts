import { Component, inject } from '@angular/core';
import { StudentService } from '../Service/student-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  studentsService = inject(StudentService);

  students = this.studentsService.students;
}
