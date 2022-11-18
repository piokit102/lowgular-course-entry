import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PerssonModel } from '../model/persson.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './ssss.response';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<PerssonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>(
      'https://dummy.restapiexample.com/api/v1/employees',).pipe(
        map((response: ApiResponse<EmployeeResponse[]>): PerssonModel[] => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
        return{
          name:employeeResponse.employee_name,
          personalNumber:employeeResponse.id,
          img:employeeResponse.profile_image,
          surname:'',
          mail:''
        }
      });}
    ));
  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/create', employee).pipe(map(_ => void 0));
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/create' + id).pipe(map(_ => void 0));
  }
}
