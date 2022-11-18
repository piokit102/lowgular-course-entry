import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';;
import {PerssonModel} from "../../model/persson.model";


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) { }
  data$: Observable<PerssonModel[] | null> = this._employeeService.getAll();

  remove(id:string){
  this._employeeService.delete(id).subscribe();
  }

}

