import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacesComponent {
  constructor(private _employeeService: EmployeeService) { }
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();
}
