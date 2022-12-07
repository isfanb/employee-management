import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-signup',
  templateUrl: './employee-signup.component.html',
  styleUrls: ['./employee-signup.component.css']
})
export class EmployeeSignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signup() {
    this.http.post<any>('http://localhost:3000/signup', this.signupForm.value).subscribe(response => {
      alert('signup success!!!');
      this.signupForm.reset();
      this.router.navigate(['login'])
    }),
      (error: any) => {
      alert('something wrong!!!')
      console.log(error);
    }
  }

}
