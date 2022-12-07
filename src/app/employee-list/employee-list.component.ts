import { Interface } from './employee-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeDataService } from './../employee-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeFullList: any;
  filterTerm !: string;
  formValue !: FormGroup;
  employeeNewInterface: Interface = new Interface();
  page = 1;
  itemsPerPage = 5;

  constructor(
    private formBuilder: FormBuilder,
    private employeeDataService: EmployeeDataService
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      birthdate: ['', Validators.required],
      basicsalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.getEmployeeList()
  }

  postEmployeeList() {
    this.employeeNewInterface.username = this.formValue.value.username;
    this.employeeNewInterface.firstname = this.formValue.value.firstname;
    this.employeeNewInterface.lastname = this.formValue.value.lastname;
    this.employeeNewInterface.email = this.formValue.value.email;
    this.employeeNewInterface.birthdate = this.formValue.value.birthdate;
    this.employeeNewInterface.basicsalary = this.formValue.value.basicsalary;
    this.employeeNewInterface.status = this.formValue.value.status;
    this.employeeNewInterface.group = this.formValue.value.group;
    this.employeeNewInterface.description = this.formValue.value.description;

    this.employeeDataService.postEmployeeData(this.employeeNewInterface).subscribe(response => {
      alert('add employee success!!!');
      let cancels = document.getElementById('cancel');
      cancels?.click();
      this.formValue.reset();
      this.getEmployeeList();
    }),
    (error: any) => {
      alert('something wrong!!!')
      console.log(error);
    }
  }

  getEmployeeList() {
    this.employeeDataService.getEmployeeData().subscribe(response => {
        this.employeeFullList = response;
    })
  }

  edit() {
    alert('this is edit button!!!')
  }

  delete() {
    alert('this is delete button!!!')
  }

}
