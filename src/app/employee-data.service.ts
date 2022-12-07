import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  postEmployeeData(data: any) {
    return this.http.post<any>(`http://localhost:3000/posts`, data).pipe(map(response => {
      return response;
    }))
  }

  getEmployeeData() {
    return this.http.get<any>(`http://localhost:3000/posts`).pipe(map(response => {
      return response;
    }))
  }

  getEmployeeSingleData(id: number) {
    return this.http.get<any>(`http://localhost:3000/posts/${id}`).pipe(map(response => {
      return response;
    }))
  }

}
