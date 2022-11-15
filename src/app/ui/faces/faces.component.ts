import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeService} from "../../services/employee.service";
import {PerssonModel} from "../../model/persson.model";

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacesComponent {
  constructor(private _employeeService: EmployeeService) { }
  data$: Observable<PerssonModel[] | null> = this._employeeService.getAll();

}
