import { EmployeeDataService } from './../employee-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: any;
  employeeDetail: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private employeeDataService: EmployeeDataService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(response => {
      this.id = response.get('id')
    })
    if(this.id) {
      this.employeeDataService.getEmployeeSingleData(this.id).subscribe(response => {
        this.employeeDetail = response;
      })
    }
  }

}
