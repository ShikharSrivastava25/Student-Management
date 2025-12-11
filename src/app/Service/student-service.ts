import { Injectable, signal } from '@angular/core';
import { Student } from '../Model/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = signal<Student[]>([
    {
      name: 'Shikhar Srivastava',
      class: '9',
      gender: 'Male',
      hobby: 'Reading',
      favouriteSubject: 'History'
    },
    {
      name: 'Antariksh Pandey',
      class: '9',
      gender: 'Male',
      hobby: 'Gym',
      favouriteSubject: 'Computer Science'
    }
  ]);

  addStudent(student : Student) {
    this.students.update(list => [...list, student]);
  }
}
