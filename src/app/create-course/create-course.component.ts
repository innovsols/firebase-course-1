import { logging } from 'protractor';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from '../model/course';
import { catchError, concatMap, last, map, take, tap } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'create-course',
  templateUrl: 'create-course.component.html',
  styleUrls: ['create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  courseId: string;

  form = this.fb.group({
    description: ['', Validators.required],
    category: ['BEGINNER', Validators.required],
    url: ['', Validators.required],
    longDescription: ['', Validators.required],
    promo: [false],
    promoStartAt: [null]
  });

  constructor(private fb: FormBuilder,
    private service: CoursesService,
    private aFire: AngularFirestore,
    private router: Router) {

  }

  ngOnInit() {
    this.courseId = this.aFire.createId();
  }

  onCreateCourse() {

    const val = this.form.value;

    const newCourse: Partial<Course> = {
        description:  val.description,
        url: val.url,
        longDescription: val.longDescription,
        promo: val.promo,
        categories: [val.category]
    };

    newCourse.promoStartAt = Timestamp.fromDate(this.form.value.promoStartAt);

    console.log(newCourse);

    this.service.createCourse(newCourse, this.courseId).pipe(
      tap(course => {
        console.log('Created New Course', course);
        this.router.navigateByUrl('/courses');
      }),
      catchError(err => {
        console.log(err);
        alert('Could not create user');
        return throwError(err);
      })
    // tslint:disable-next-line: deprecation
    ).subscribe();
  }

}
