import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  public loginForm !:  FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.http.get<any>('http://localhost:3000/signup').subscribe(response => {
      let user = response.find((item: any) => {
        return item.email == this.loginForm.value.email && item.password == this.loginForm.value.password
      })
      if(user) {
        alert('login success!!!')
        this.loginForm.reset();
        this.router.navigate(['employee-list'])
      } else {
        alert('user not found!!!')
      }
    })
  }

}
