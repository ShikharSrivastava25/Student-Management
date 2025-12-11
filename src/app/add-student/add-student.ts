import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../Service/student-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  private fb = inject(FormBuilder);
  private studentService = inject(StudentService);
  private router = inject(Router);

  studentForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    class: ['', Validators.required],
    gender: ['', Validators.required],
    hasHobby: [false],
    hobby: [''],
    favouriteSubject: ['']
  });

  get name() {
    return this.studentForm.get('name');
  }

  get selectedClass() {
    return this.studentForm.get('class')?.value;
  }

  get hasHobby() {
    return this.studentForm.get('hasHobby')?.value;
  }

  onSubmit() {
    const formValue = this.studentForm.value;

    const newStudent = {
      name: formValue.name!,
      class: formValue.class!,
      gender: formValue.gender!, 
      hobby: formValue.hasHobby ? formValue.hobby! : '',
      favouriteSubject: formValue.favouriteSubject!
    };

    this.studentService.addStudent(newStudent);
    this.router.navigate(['/home']);
  }
}
