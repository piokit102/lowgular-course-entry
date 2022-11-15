import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {PerssonModel} from "../model/persson.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<PerssonModel[]> {
    return this._httpClient.get<PerssonModel[]>('assets/data/people.json')
  }
}
